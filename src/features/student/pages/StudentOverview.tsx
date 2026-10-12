import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
} from '../../../components/ui';
import { StatCard, PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { AttendanceChart, PerformanceChart } from '../../../components/charts';
import {
  Calendar,
  BookOpen,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';
import {
  getStudentById,
  getAttendanceByStudent,
  getAssessmentResultsByStudent,
  assessments,
  subjects,
} from '../../../data';
import { calculateAttendancePercentage, formatPercentage, formatGrade } from '../../../utils';

export const StudentOverview: React.FC = () => {
  const { user } = useAuth();
  
  if (!user) return null;

  const student = getStudentById(user.id);
  const attendanceRecords = getAttendanceByStudent(user.id);
  const assessmentResults = getAssessmentResultsByStudent(user.id);

  // Calculate overall attendance
  const overallAttendance = calculateAttendancePercentage(attendanceRecords);

  // Calculate subject-wise attendance
  const subjectAttendance = subjects
    .filter((s) => s.semester === student?.semester)
    .map((subject) => {
      const records = attendanceRecords.filter((r) => r.subjectId === subject.id);
      return {
        subject: subject.code,
        percentage: calculateAttendancePercentage(records),
      };
    });

  // Calculate average marks
  const averageMarks =
    assessmentResults.length > 0
      ? assessmentResults.reduce((sum, r) => sum + (r.marks / r.maxMarks) * 100, 0) /
        assessmentResults.length
      : 0;

  // Recent assessments for chart
  const recentAssessments = assessmentResults
    .slice(-5)
    .map((result) => {
      const assessment = assessments.find((a) => a.id === result.assessmentId);
      return {
        name: assessment?.name.substring(0, 15) || 'Assessment',
        marks: (result.marks / result.maxMarks) * 100,
      };
    });

  // Upcoming assessments
  const upcomingAssessments = assessments
    .filter((a) => {
      const dueDate = new Date(a.dueDate);
      const now = new Date();
      return dueDate > now;
    })
    .slice(0, 3);

  return (
    <div>
      {/* Header */}
      <PageHeader
        title="Student Dashboard"
        description={`Welcome back, ${student?.displayName}!`}
        action={<SyntheticDataLabel />}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Overall Attendance"
          value={formatPercentage(overallAttendance)}
          icon={Calendar}
          iconColor="text-blue-600"
          description="Current semester"
          trend={
            overallAttendance >= 75
              ? { value: 2, label: 'vs last month', isPositive: true }
              : undefined
          }
        />
        <StatCard
          title="Current CGPA"
          value={student?.cgpa?.toFixed(2) || 'N/A'}
          icon={TrendingUp}
          iconColor="text-green-600"
          description="Cumulative grade point"
        />
        <StatCard
          title="Average Performance"
          value={formatPercentage(averageMarks, 0)}
          icon={BookOpen}
          iconColor="text-purple-600"
          description={`Grade: ${formatGrade(averageMarks)}`}
        />
        <StatCard
          title="Assessments Completed"
          value={assessmentResults.length}
          icon={CheckCircle}
          iconColor="text-teal-600"
          description="This semester"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Attendance by Subject */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <AttendanceChart data={subjectAttendance} />
          </CardContent>
        </Card>

        {/* Recent Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Assessment Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {recentAssessments.length > 0 ? (
              <PerformanceChart data={recentAssessments} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                No assessment data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Assessments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assessments</CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAssessments.length > 0 ? (
              <div className="space-y-3">
                {upcomingAssessments.map((assessment) => {
                  const subject = subjects.find((s) => s.id === assessment.subjectId);
                  const daysUntil = Math.ceil(
                    (new Date(assessment.dueDate).getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  );
                  return (
                    <div
                      key={assessment.id}
                      className="flex items-start justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {assessment.name}
                        </p>
                        <p className="text-sm text-gray-600">{subject?.name}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Due: {new Date(assessment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        variant={daysUntil <= 3 ? 'warning' : 'info'}
                        size="sm"
                      >
                        {daysUntil} days
                      </Badge>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No upcoming assessments
              </p>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions & Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {overallAttendance < 75 && (
                <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="text-yellow-600 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-yellow-900">
                      Attendance Below 75%
                    </p>
                    <p className="text-sm text-yellow-800">
                      Your current attendance is {formatPercentage(overallAttendance)}.
                      Maintain at least 75% to meet requirements.
                    </p>
                  </div>
                </div>
              )}
              {averageMarks < 50 && (
                <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="text-red-600 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-red-900">
                      Performance Needs Attention
                    </p>
                    <p className="text-sm text-red-800">
                      Your average marks are below 50%. Consider reaching out for
                      academic support.
                    </p>
                  </div>
                </div>
              )}
              {overallAttendance >= 75 && averageMarks >= 50 && (
                <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="text-green-600 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-green-900">
                      Good Academic Standing
                    </p>
                    <p className="text-sm text-green-800">
                      You're meeting attendance requirements and maintaining good
                      performance. Keep it up!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
