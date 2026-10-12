import { AttendanceRecord } from '../types';

// Generate attendance records for demonstration
// Academic year: Aug 2026 - Oct 2026 (10 weeks so far)

const generateAttendanceForStudent = (
  studentId: string,
  subjectId: string,
  attendanceRate: number, // 0-1
  pattern: 'regular' | 'declining' | 'irregular'
): AttendanceRecord[] => {
  const records: AttendanceRecord[] = [];
  const startDate = new Date('2026-08-01');
  const sessionsPerWeek = 3;
  const totalWeeks = 10;
  
  let recordId = 1;
  
  for (let week = 0; week < totalWeeks; week++) {
    // Adjust attendance rate based on pattern
    let weekRate = attendanceRate;
    if (pattern === 'declining') {
      weekRate = attendanceRate - (week * 0.05);
    } else if (pattern === 'irregular') {
      weekRate = attendanceRate + (Math.random() - 0.5) * 0.3;
    }
    weekRate = Math.max(0, Math.min(1, weekRate));
    
    for (let session = 0; session < sessionsPerWeek; session++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + week * 7 + session * 2);
      
      const isPresent = Math.random() < weekRate;
      const status = isPresent ? 'present' : 'absent';
      
      records.push({
        id: `ATT_${studentId}_${subjectId}_${recordId++}`,
        studentId,
        subjectId,
        date: date.toISOString().split('T')[0],
        status,
        sessionType: session === 2 ? 'lab' : 'lecture',
        duration: session === 2 ? 3 : 1,
      });
    }
  }
  
  return records;
};

export const attendanceRecords: AttendanceRecord[] = [
  // STU001 - Rahul (Good attendance, regular)
  ...generateAttendanceForStudent('STU001', 'SUB001', 0.85, 'regular'),
  ...generateAttendanceForStudent('STU001', 'SUB002', 0.90, 'regular'),
  ...generateAttendanceForStudent('STU001', 'SUB003', 0.87, 'regular'),
  ...generateAttendanceForStudent('STU001', 'SUB004', 0.83, 'regular'),
  
  // STU002 - Priya (Excellent attendance)
  ...generateAttendanceForStudent('STU002', 'SUB001', 0.95, 'regular'),
  ...generateAttendanceForStudent('STU002', 'SUB002', 0.97, 'regular'),
  ...generateAttendanceForStudent('STU002', 'SUB003', 0.93, 'regular'),
  ...generateAttendanceForStudent('STU002', 'SUB004', 0.95, 'regular'),
  
  // STU003 - Arjun (Average, declining)
  ...generateAttendanceForStudent('STU003', 'SUB001', 0.75, 'declining'),
  ...generateAttendanceForStudent('STU003', 'SUB002', 0.70, 'declining'),
  ...generateAttendanceForStudent('STU003', 'SUB003', 0.72, 'irregular'),
  ...generateAttendanceForStudent('STU003', 'SUB004', 0.68, 'declining'),
  
  // STU005 - Vikram (Poor attendance, irregular)
  ...generateAttendanceForStudent('STU005', 'SUB001', 0.55, 'irregular'),
  ...generateAttendanceForStudent('STU005', 'SUB002', 0.50, 'declining'),
  ...generateAttendanceForStudent('STU005', 'SUB003', 0.58, 'irregular'),
  ...generateAttendanceForStudent('STU005', 'SUB004', 0.52, 'irregular'),
];

// Helper functions
export const getAttendanceByStudent = (studentId: string): AttendanceRecord[] => {
  return attendanceRecords.filter((record) => record.studentId === studentId);
};

export const getAttendanceBySubject = (
  studentId: string,
  subjectId: string
): AttendanceRecord[] => {
  return attendanceRecords.filter(
    (record) => record.studentId === studentId && record.subjectId === subjectId
  );
};

export const calculateAttendancePercentage = (records: AttendanceRecord[]): number => {
  if (records.length === 0) return 0;
  const attended = records.filter(
    (r) => r.status === 'present' || r.status === 'late'
  ).length;
  return (attended / records.length) * 100;
};
