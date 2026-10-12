export interface AttendanceRecord {
  id: string;
  studentId: string;
  subjectId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  sessionType: 'lecture' | 'lab' | 'tutorial';
  duration: number; // in hours
}

export interface AttendanceSummary {
  studentId: string;
  subjectId: string;
  totalSessions: number;
  attended: number;
  percentage: number;
  trend: 'improving' | 'declining' | 'stable';
}
