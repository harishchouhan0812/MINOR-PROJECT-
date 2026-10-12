import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { AttendanceChart, PerformanceChart } from '../../../components/charts';
import { ArrowLeft, User, AlertTriangle } from 'lucide-react';
import {
  getStudentById,
  getAttendanceByStudent,
  getAssessmentResultsByStudent,
  getPredictionsByStudent,
  getAlertsByStudent,
  subjects,
  assessments,
} from '../../../data';
import {
  calculateAttendancePercentage,
  formatPercentage,
  formatDate,
} from '../../../utils';

export const FacultyStudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const student = getStudentById(id!);
  const attendanceData = getAttendanceByStudent(id!);
  const assessmentData = getAssessmentResultsByStudent(id!);
  const predictions = getPredictionsByStudent(id!);
  const alerts = getAlertsByStudent(id!);

  if (!student) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Student not found</p>
      </div>
    );
  }

  const overallAttendance = calculateAttendancePercentage(attendanceData);

  // Subject-wise attendance
  const subjectAttendance = subjects
    .filter((s) => s.semester === student.semester)
    .map((subject) => {
      const records = attendanceData.filter((r) => r.subjectId === subject.id);
      return {
        subject: subject.code,
        percentage: calculateAttendancePercentage(records),
      };
    });

  // Recent performance
  const recentPerformance = assessmentData.slice(-5).map((result) => {
    const assessment = assessments.find((a) => a.id === result.assessmentId);
    return {
      name: assessment?.name.substring(0, 15) || 'Assessment',
      marks: (result.marks / result.maxMarks) * 100,
    };
  });

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/faculty/students')}
        leftIcon={<ArrowLeft size={16} />}
        className="mb-4"
      >
        Back to Students
      </Button>

      <PageHeader
        title={student.displayName}
        description={`${student.department} - Semester ${student.semester}`}
        action={<SyntheticDataLabel />}
      />

      {/* Student Info Card */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="text-center pt-6">
            <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <User className="text-white" size={40} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{student.displayName}</h3>
            <p className="text-sm text-gray-600 mb-2">{student.id}</p>
            <Badge variant={student.status === 'active' ? 'success' : 'gray'}>
              {student.status}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Attendance</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {formatPercentage(overallAttendance)}
            </p>
            <Badge
              variant={
                overallAttendance >= 75
                  ? 'success'
                  : overallAttendance >= 60
                  ? 'warning'
                  : 'error'
              }
            >
              {overallAttendance >= 75 ? 'Good' : 'Needs Attention'}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">CGPA</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {student.cgpa?.toFixed(2) || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">Cumulative</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-gray-600 mb-1">Active Alerts</p>
            <p className="text-3xl font-bold text-red-600 mb-2">
              {alerts.filter((a) => a.status !== 'resolved' && a.status !== 'dismissed').length}
            </p>
            <p className="text-sm text-gray-600">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Predictions & Alerts */}
      {predictions.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Academic Risk Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {predictions.map((prediction) => {
                const subject = subjects.find((s) => s.id === prediction.subjectId);
                return (
                  <div
                    key={prediction.id}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <AlertTriangle
                      className={
                        prediction.riskLevel === 'high'
                          ? 'text-red-600'
                          : prediction.riskLevel === 'medium'
                          ? 'text-yellow-600'
                          : 'text-green-600'
                      }
                      size={24}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900">{subject?.name}</h4>
                        <Badge
                          variant={
                            prediction.riskLevel === 'high'
                              ? 'error'
                              : prediction.riskLevel === 'medium'
                              ? 'warning'
                              : 'success'
                          }
                        >
                          {prediction.riskLevel} risk
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{prediction.target}</p>
                      <p className="text-sm text-gray-500">
                        Probability: {formatPercentage(prediction.probability * 100)} •
                        Predicted on {formatDate(prediction.predictionDate)}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => navigate(`/faculty/predictions/${prediction.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Attendance by Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <AttendanceChart data={subjectAttendance} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Performance</CardTitle>
          </CardHeader>
          <CardContent>
            {recentPerformance.length > 0 ? (
              <PerformanceChart data={recentPerformance} />
            ) : (
              <div className="h-[300px] flex items-center justify-center text-gray-500">
                No performance data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
