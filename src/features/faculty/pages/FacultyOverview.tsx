import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
} from '../../../components/ui';
import { StatCard, PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Users, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import {
  students,
  getNewAlerts,
  getActiveAlerts,
  initialCases,
  subjects,
  attendanceRecords,
  assessmentResults,
} from '../../../data';
import { calculateAttendancePercentage } from '../../../utils';

export const FacultyOverview: React.FC = () => {
  const newAlerts = getNewAlerts();
  const activeAlerts = getActiveAlerts();
  const activeCases = initialCases.filter(
    (c) => c.status === 'open' || c.status === 'in-progress'
  );

  // Calculate class statistics
  const totalStudents = students.filter((s) => s.department === 'CSE').length;
  const averageAttendance =
    students
      .filter((s) => s.department === 'CSE')
      .reduce((sum, student) => {
        const records = attendanceRecords.filter((r) => r.studentId === student.id);
        return sum + calculateAttendancePercentage(records);
      }, 0) / totalStudents;

  const averagePerformance =
    assessmentResults.length > 0
      ? assessmentResults.reduce((sum, r) => sum + (r.marks / r.maxMarks) * 100, 0) /
        assessmentResults.length
      : 0;

  // Students needing attention
  const studentsNeedingAttention = students.filter((student) => {
    const records = attendanceRecords.filter((r) => r.studentId === student.id);
    const attendance = calculateAttendancePercentage(records);
    return attendance < 75;
  });

  return (
    <div>
      <PageHeader
        title="Faculty Dashboard"
        description="Monitor class performance and manage student interventions"
        action={<SyntheticDataLabel />}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          iconColor="text-blue-600"
          description="CSE Department"
        />
        <StatCard
          title="New Alerts"
          value={newAlerts.length}
          icon={AlertTriangle}
          iconColor="text-red-600"
          description="Requires attention"
        />
        <StatCard
          title="Active Cases"
          value={activeCases.length}
          icon={CheckCircle}
          iconColor="text-orange-600"
          description="In progress"
        />
        <StatCard
          title="Class Average"
          value={`${averagePerformance.toFixed(1)}%`}
          icon={TrendingUp}
          iconColor="text-green-600"
          description="Overall performance"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            {newAlerts.length > 0 ? (
              <div className="space-y-3">
                {newAlerts.slice(0, 5).map((alert) => {
                  const student = students.find((s) => s.id === alert.studentId);
                  return (
                    <div
                      key={alert.id}
                      className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {student?.displayName}
                        </p>
                        <p className="text-sm text-gray-600">{alert.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(alert.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        variant={
                          alert.severity === 'critical' || alert.severity === 'high'
                            ? 'error'
                            : 'warning'
                        }
                        size="sm"
                      >
                        {alert.severity}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">No new alerts</p>
            )}
          </CardContent>
        </Card>

        {/* Students Needing Attention */}
        <Card>
          <CardHeader>
            <CardTitle>Students Needing Attention</CardTitle>
          </CardHeader>
          <CardContent>
            {studentsNeedingAttention.length > 0 ? (
              <div className="space-y-3">
                {studentsNeedingAttention.slice(0, 5).map((student) => {
                  const records = attendanceRecords.filter(
                    (r) => r.studentId === student.id
                  );
                  const attendance = calculateAttendancePercentage(records);
                  return (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-3 bg-red-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {student.displayName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {student.department} - Semester {student.semester}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-600">
                          {attendance.toFixed(1)}%
                        </p>
                        <p className="text-xs text-gray-600">Attendance</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">
                All students meeting requirements
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Active Interventions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Interventions</CardTitle>
        </CardHeader>
        <CardContent>
          {activeCases.length > 0 ? (
            <div className="space-y-3">
              {activeCases.slice(0, 5).map((supportCase) => {
                const student = students.find((s) => s.id === supportCase.studentId);
                return (
                  <div
                    key={supportCase.id}
                    className="flex items-start justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-gray-900">
                          {student?.displayName}
                        </p>
                        <Badge size="sm" variant="gray">
                          {supportCase.interventionType}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{supportCase.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Due: {new Date(supportCase.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge
                      variant={supportCase.priority === 'high' ? 'error' : 'info'}
                    >
                      {supportCase.status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8">
              No active interventions
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
