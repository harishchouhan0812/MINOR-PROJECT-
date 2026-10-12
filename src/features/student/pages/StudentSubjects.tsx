import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { PerformanceChart } from '../../../components/charts';
import { BookOpen } from 'lucide-react';
import {
  getStudentById,
  getSubjectsBySemester,
  getAssessmentResultsByStudent,
  getAssessmentsBySubject,
} from '../../../data';
import { formatPercentage, formatGrade } from '../../../utils';

export const StudentSubjects: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const student = getStudentById(user.id);
  const subjects = getSubjectsBySemester(
    student?.semester || 5,
    student?.department || 'CSE'
  );
  const assessmentResults = getAssessmentResultsByStudent(user.id);

  // Calculate subject-wise performance
  const subjectPerformance = subjects.map((subject) => {
    const subjectResults = assessmentResults.filter(
      (r) => r.subjectId === subject.id
    );
    const assessments = getAssessmentsBySubject(subject.id);

    const totalMarks = subjectResults.reduce((sum, r) => sum + r.marks, 0);
    const maxMarks = subjectResults.reduce((sum, r) => sum + r.maxMarks, 0);
    const percentage = maxMarks > 0 ? (totalMarks / maxMarks) * 100 : 0;

    return {
      ...subject,
      totalMarks,
      maxMarks,
      percentage,
      grade: formatGrade(percentage),
      assessmentCount: assessments.length,
      completedCount: subjectResults.length,
    };
  });

  // Performance trend data
  const performanceData = subjectPerformance.map((sp) => ({
    name: sp.code,
    marks: sp.percentage,
  }));

  return (
    <div>
      <PageHeader
        title="Subjects & Grades"
        description="View your subject-wise performance and grades"
        action={<SyntheticDataLabel />}
      />

      {/* Performance Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Subject Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <PerformanceChart data={performanceData} />
        </CardContent>
      </Card>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {subjectPerformance.map((subject) => (
          <Card key={subject.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen size={20} className="text-primary-600" />
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{subject.code}</p>
                </div>
                <Badge
                  variant={
                    subject.percentage >= 75
                      ? 'success'
                      : subject.percentage >= 50
                      ? 'warning'
                      : 'error'
                  }
                >
                  {subject.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Performance</span>
                  <span className="font-semibold text-gray-900">
                    {formatPercentage(subject.percentage)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      subject.percentage >= 75
                        ? 'bg-green-500'
                        : subject.percentage >= 50
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-3 border-t">
                  <div>
                    <p className="text-xs text-gray-600">Credits</p>
                    <p className="font-medium">{subject.credits}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Faculty</p>
                    <p className="font-medium text-sm">{subject.facultyName.split(' ')[1]}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Type</p>
                    <p className="font-medium capitalize">{subject.type}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Subject Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject Code</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead align="center">Credits</TableHead>
                <TableHead align="center">Marks</TableHead>
                <TableHead align="center">Percentage</TableHead>
                <TableHead align="center">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjectPerformance.map((subject) => (
                <TableRow key={subject.id}>
                  <TableCell>
                    <span className="font-medium">{subject.code}</span>
                  </TableCell>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell align="center">{subject.credits}</TableCell>
                  <TableCell align="center">
                    {subject.totalMarks}/{subject.maxMarks}
                  </TableCell>
                  <TableCell align="center">
                    {formatPercentage(subject.percentage)}
                  </TableCell>
                  <TableCell align="center">
                    <Badge
                      variant={
                        subject.percentage >= 75
                          ? 'success'
                          : subject.percentage >= 50
                          ? 'warning'
                          : 'error'
                      }
                    >
                      {subject.grade}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
