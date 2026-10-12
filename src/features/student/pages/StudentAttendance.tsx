import React, { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Select,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { AttendanceChart } from '../../../components/charts';
import { Calendar, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import {
  getAttendanceByStudent,
  getAttendanceBySubject,
  getSubjectsBySemester,
  getStudentById,
} from '../../../data';
import {
  calculateAttendancePercentage,
  formatPercentage,
  formatDate,
} from '../../../utils';

export const StudentAttendance: React.FC = () => {
  const { user } = useAuth();
  const [selectedSubject, setSelectedSubject] = useState<string>('all');

  if (!user) return null;

  const student = getStudentById(user.id);
  const allAttendance = getAttendanceByStudent(user.id);
  const subjects = getSubjectsBySemester(student?.semester || 5, student?.department || 'CSE');

  // Calculate overall attendance
  const overallAttendance = calculateAttendancePercentage(allAttendance);

  // Calculate subject-wise statistics
  const subjectStats = subjects.map((subject) => {
    const records = allAttendance.filter((r) => r.subjectId === subject.id);
    const percentage = calculateAttendancePercentage(records);
    const trend = percentage >= 75 ? 'good' : percentage >= 60 ? 'warning' : 'poor';

    return {
      subject: subject.code,
      subjectName: subject.name,
      subjectId: subject.id,
      percentage,
      present: records.filter((r) => r.status === 'present').length,
      absent: records.filter((r) => r.status === 'absent').length,
      total: records.length,
      trend,
    };
  });

  // Get detailed attendance records for selected subject
  const selectedRecords =
    selectedSubject === 'all'
      ? allAttendance.slice(-20)
      : getAttendanceBySubject(user.id, selectedSubject).slice(-20);

  const getTrendIcon = (trend: string) => {
    if (trend === 'good') return <TrendingUp className="text-green-600" size={20} />;
    if (trend === 'warning') return <Minus className="text-yellow-600" size={20} />;
    return <TrendingDown className="text-red-600" size={20} />;
  };

  const getTrendColor = (trend: string) => {
    if (trend === 'good') return 'text-green-700 bg-green-50';
    if (trend === 'warning') return 'text-yellow-700 bg-yellow-50';
    return 'text-red-700 bg-red-50';
  };

  return (
    <div>
      <PageHeader
        title="Attendance"
        description="Track your attendance across all subjects"
        action={<SyntheticDataLabel />}
      />

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Overall Attendance</p>
                <p className="text-3xl font-bold text-gray-900">
                  {formatPercentage(overallAttendance)}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="text-blue-600" size={24} />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                {allAttendance.filter((r) => r.status === 'present').length} /{' '}
                {allAttendance.length} sessions attended
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Subjects Above 75%</p>
            <p className="text-3xl font-bold text-green-600">
              {subjectStats.filter((s) => s.percentage >= 75).length}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              out of {subjectStats.length} subjects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Subjects Below 75%</p>
            <p className="text-3xl font-bold text-red-600">
              {subjectStats.filter((s) => s.percentage < 75).length}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              need attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <AttendanceChart
            data={subjectStats.map((s) => ({
              subject: s.subject,
              percentage: s.percentage,
            }))}
          />
        </CardContent>
      </Card>

      {/* Subject Details */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Attendance by Subject</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectStats.map((stat) => (
              <div
                key={stat.subjectId}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-gray-900">{stat.subjectName}</h3>
                    <Badge size="sm" variant="gray">
                      {stat.subject}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">
                    {stat.present} present, {stat.absent} absent • {stat.total} total
                    sessions
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {getTrendIcon(stat.trend)}
                  <div
                    className={`px-4 py-2 rounded-lg font-semibold ${getTrendColor(
                      stat.trend
                    )}`}
                  >
                    {formatPercentage(stat.percentage)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Records */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Attendance Records</CardTitle>
            <Select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              options={[
                { value: 'all', label: 'All Subjects' },
                ...subjects.map((s) => ({
                  value: s.id,
                  label: s.name,
                })),
              ]}
              className="w-64"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {selectedRecords.map((record) => {
              const subject = subjects.find((s) => s.id === record.subjectId);
              return (
                <div
                  key={record.id}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{subject?.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatDate(record.date)} • {record.sessionType}
                    </p>
                  </div>
                  <Badge
                    variant={
                      record.status === 'present'
                        ? 'success'
                        : record.status === 'absent'
                        ? 'error'
                        : 'warning'
                    }
                  >
                    {record.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
