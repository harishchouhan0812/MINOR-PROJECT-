import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { User, Mail, Phone, Calendar, Droplet, MapPin } from 'lucide-react';
import { getStudentById, getUserById } from '../../../data';

export const StudentProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const student = getStudentById(user.id);
  const mentor = student?.mentorId ? getUserById(student.mentorId) : null;

  const profileSections = [
    {
      title: 'Personal Information',
      items: [
        { icon: User, label: 'Full Name', value: student?.displayName },
        { icon: Mail, label: 'Email', value: student?.email },
        { icon: Phone, label: 'Phone', value: student?.phoneNumber || 'Not provided' },
        {
          icon: Calendar,
          label: 'Date of Birth',
          value: student?.dateOfBirth
            ? new Date(student.dateOfBirth).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : 'Not provided',
        },
        { icon: Droplet, label: 'Blood Group', value: student?.bloodGroup || 'Not provided' },
      ],
    },
    {
      title: 'Academic Information',
      items: [
        { label: 'Student ID', value: student?.id },
        { label: 'Department', value: student?.department },
        { label: 'Semester', value: `Semester ${student?.semester}` },
        { label: 'Section', value: student?.section },
        { label: 'Enrollment Year', value: student?.enrollmentYear },
        { label: 'CGPA', value: student?.cgpa?.toFixed(2) || 'N/A' },
        { label: 'Status', value: student?.status },
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        title="My Profile"
        description="View and manage your personal and academic information"
        action={<SyntheticDataLabel />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="text-center pt-6">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {student?.displayName}
            </h2>
            <p className="text-gray-600 mb-3">{student?.email}</p>
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="info">{student?.department}</Badge>
              <Badge
                variant={student?.status === 'active' ? 'success' : 'gray'}
              >
                {student?.status}
              </Badge>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-left space-y-2">
                <div>
                  <p className="text-sm text-gray-600">CGPA</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {student?.cgpa?.toFixed(2) || 'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Semester</p>
                  <p className="text-lg font-medium text-gray-900">
                    {student?.semester}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details Section */}
        <div className="lg:col-span-2 space-y-6">
          {profileSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {item.icon && (
                        <item.icon className="text-gray-400 mt-1" size={18} />
                      )}
                      <div className="flex-1">
                        <dt className="text-sm font-medium text-gray-600">
                          {item.label}
                        </dt>
                        <dd className="text-sm text-gray-900 mt-1">
                          {item.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}

          {/* Mentor Information */}
          {mentor && (
            <Card>
              <CardHeader>
                <CardTitle>Mentor Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{mentor.name}</p>
                    <p className="text-sm text-gray-600">{mentor.email}</p>
                    <p className="text-sm text-gray-500">{mentor.department}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
