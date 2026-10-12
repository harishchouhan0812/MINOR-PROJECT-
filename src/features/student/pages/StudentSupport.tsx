import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  Badge,
  Textarea,
  Select,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { HelpCircle, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import { getCasesByStudent, getUserById } from '../../../data';
import { formatDate } from '../../../utils';

export const StudentSupport: React.FC = () => {
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [supportType, setSupportType] = useState('');
  const [description, setDescription] = useState('');

  if (!user) return null;

  const cases = getCasesByStudent(user.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Support request submitted successfully!');
    setShowForm(false);
    setSupportType('');
    setDescription('');
  };

  const supportTypes = [
    { value: 'academic', label: 'Academic Support' },
    { value: 'mentoring', label: 'Mentoring Request' },
    { value: 'counseling', label: 'Counseling' },
    { value: 'technical', label: 'Technical Issue' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div>
      <PageHeader
        title="Academic Support"
        description="Request support and track your support cases"
        action={<SyntheticDataLabel />}
      />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Cases</p>
                <p className="text-3xl font-bold text-gray-900">{cases.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <HelpCircle className="text-blue-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Cases</p>
                <p className="text-3xl font-bold text-orange-600">
                  {cases.filter((c) => c.status === 'in-progress' || c.status === 'open').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="text-orange-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-green-600">
                  {cases.filter((c) => c.status === 'completed').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Request Form */}
      {!showForm && (
        <Card className="mb-6">
          <CardContent className="text-center py-8">
            <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Need Academic Support?
            </h3>
            <p className="text-gray-600 mb-4">
              Request help from faculty or mentors for academic challenges
            </p>
            <Button onClick={() => setShowForm(true)}>
              Request Support
            </Button>
          </CardContent>
        </Card>
      )}

      {showForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Request Academic Support</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Select
                label="Support Type"
                options={supportTypes}
                value={supportType}
                onChange={(e) => setSupportType(e.target.value)}
                placeholder="Select support type"
                required
              />
              <Textarea
                label="Description"
                placeholder="Describe the issue or support you need..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
              <div className="flex gap-3">
                <Button type="submit">Submit Request</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Active Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Your Support Cases</CardTitle>
        </CardHeader>
        <CardContent>
          {cases.length > 0 ? (
            <div className="space-y-4">
              {cases.map((supportCase) => {
                const assignedUser = getUserById(supportCase.assignedTo);
                return (
                  <div
                    key={supportCase.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {supportCase.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {supportCase.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Created: {formatDate(supportCase.createdAt)}</span>
                          {supportCase.dueDate && (
                            <span>Due: {formatDate(supportCase.dueDate)}</span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        <Badge
                          variant={
                            supportCase.status === 'completed'
                              ? 'success'
                              : supportCase.status === 'in-progress'
                              ? 'info'
                              : 'warning'
                          }
                        >
                          {supportCase.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Assigned to:</span>
                        <span className="font-medium text-gray-900">
                          {assignedUser?.name || 'Unassigned'}
                        </span>
                      </div>
                      <Badge variant="gray" size="sm">
                        {supportCase.interventionType}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <MessageSquare className="mx-auto mb-3" size={48} />
              <p>No support cases yet</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
