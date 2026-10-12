import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from '../../../components/ui';
import { PageHeader, SearchBar, SyntheticDataLabel } from '../../../components/shared';
import { useFilters } from '../../../hooks/useFilters';
import {
  students,
  attendanceRecords,
  assessmentResults,
  getPredictionsByStudent,
} from '../../../data';
import { calculateAttendancePercentage, formatPercentage } from '../../../utils';

export const FacultyStudents: React.FC = () => {
  const navigate = useNavigate();

  const studentData = students.map((student) => {
    const records = attendanceRecords.filter((r) => r.studentId === student.id);
    const results = assessmentResults.filter((r) => r.studentId === student.id);
    const predictions = getPredictionsByStudent(student.id);

    const attendance = calculateAttendancePercentage(records);
    const avgPerformance =
      results.length > 0
        ? results.reduce((sum, r) => sum + (r.marks / r.maxMarks) * 100, 0) /
          results.length
        : 0;
    const hasHighRiskPrediction = predictions.some((p) => p.riskLevel === 'high');

    return {
      ...student,
      attendance,
      avgPerformance,
      hasHighRiskPrediction,
    };
  });

  const { filteredItems, searchQuery, setSearchQuery } = useFilters(studentData, {
    searchFields: ['displayName', 'id', 'email'],
  });

  return (
    <div>
      <PageHeader
        title="Students"
        description="View and manage student information"
        action={<SyntheticDataLabel />}
      />

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Student Directory</CardTitle>
            <div className="w-96">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search students by name, ID, or email..."
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead align="center">Semester</TableHead>
                <TableHead align="center">Attendance</TableHead>
                <TableHead align="center">Performance</TableHead>
                <TableHead align="center">CGPA</TableHead>
                <TableHead align="center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((student) => (
                <TableRow
                  key={student.id}
                  onClick={() => navigate(`/faculty/students/${student.id}`)}
                  hover
                >
                  <TableCell>
                    <span className="font-medium">{student.id}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span>{student.displayName}</span>
                      {student.hasHighRiskPrediction && (
                        <Badge variant="error" size="sm">
                          At Risk
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell align="center">{student.semester}</TableCell>
                  <TableCell align="center">
                    <Badge
                      variant={
                        student.attendance >= 75
                          ? 'success'
                          : student.attendance >= 60
                          ? 'warning'
                          : 'error'
                      }
                    >
                      {formatPercentage(student.attendance)}
                    </Badge>
                  </TableCell>
                  <TableCell align="center">
                    {formatPercentage(student.avgPerformance)}
                  </TableCell>
                  <TableCell align="center">
                    {student.cgpa?.toFixed(2) || 'N/A'}
                  </TableCell>
                  <TableCell align="center">
                    <Badge
                      variant={student.status === 'active' ? 'success' : 'gray'}
                    >
                      {student.status}
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
