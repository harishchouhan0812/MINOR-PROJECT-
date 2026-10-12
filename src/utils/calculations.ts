import { AttendanceRecord, AssessmentResult } from '../types';

export const calculateAttendancePercentage = (
  records: AttendanceRecord[]
): number => {
  if (records.length === 0) return 0;
  const attended = records.filter(
    (r) => r.status === 'present' || r.status === 'late'
  ).length;
  return (attended / records.length) * 100;
};

export const calculateAverageMarks = (results: AssessmentResult[]): number => {
  if (results.length === 0) return 0;
  const totalPercentage = results.reduce((sum, result) => {
    return sum + (result.marks / result.maxMarks) * 100;
  }, 0);
  return totalPercentage / results.length;
};

export const calculateCGPA = (
  subjectPerformances: Array<{ credits: number; percentage: number }>
): number => {
  if (subjectPerformances.length === 0) return 0;
  
  const totalCredits = subjectPerformances.reduce(
    (sum, subject) => sum + subject.credits,
    0
  );
  
  const weightedGradePoints = subjectPerformances.reduce((sum, subject) => {
    const gradePoint = percentageToGradePoint(subject.percentage);
    return sum + gradePoint * subject.credits;
  }, 0);
  
  return weightedGradePoints / totalCredits;
};

const percentageToGradePoint = (percentage: number): number => {
  if (percentage >= 90) return 10;
  if (percentage >= 80) return 9;
  if (percentage >= 70) return 8;
  if (percentage >= 60) return 7;
  if (percentage >= 50) return 6;
  if (percentage >= 40) return 5;
  return 0;
};

export const calculateTrend = (values: number[]): 'improving' | 'declining' | 'stable' => {
  if (values.length < 2) return 'stable';
  
  const recentValues = values.slice(-3);
  const average = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
  const previousValues = values.slice(0, -1).slice(-3);
  const previousAverage =
    previousValues.reduce((a, b) => a + b, 0) / previousValues.length;
  
  const difference = average - previousAverage;
  
  if (difference > 5) return 'improving';
  if (difference < -5) return 'declining';
  return 'stable';
};

export const getRiskColor = (riskLevel: 'low' | 'medium' | 'high'): string => {
  switch (riskLevel) {
    case 'low':
      return 'text-green-600 bg-green-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'high':
      return 'text-red-600 bg-red-50';
  }
};

export const getSeverityColor = (severity: 'low' | 'medium' | 'high' | 'critical'): string => {
  switch (severity) {
    case 'low':
      return 'text-blue-600 bg-blue-50';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'high':
      return 'text-orange-600 bg-orange-50';
    case 'critical':
      return 'text-red-600 bg-red-50';
  }
};

export const getStatusColor = (status: string): string => {
  const statusColors: Record<string, string> = {
    completed: 'text-green-600 bg-green-50',
    'in-progress': 'text-blue-600 bg-blue-50',
    pending: 'text-gray-600 bg-gray-50',
    open: 'text-blue-600 bg-blue-50',
    closed: 'text-gray-600 bg-gray-50',
    resolved: 'text-green-600 bg-green-50',
    dismissed: 'text-gray-600 bg-gray-50',
    new: 'text-purple-600 bg-purple-50',
  };
  return statusColors[status] || 'text-gray-600 bg-gray-50';
};
