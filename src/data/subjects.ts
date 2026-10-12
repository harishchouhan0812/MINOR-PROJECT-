import { Subject } from '../types';

export const subjects: Subject[] = [
  // Semester 5 - CSE
  {
    id: 'SUB001',
    code: 'CSE501',
    name: 'Machine Learning',
    department: 'CSE',
    semester: 5,
    credits: 4,
    facultyId: 'FAC001',
    facultyName: 'Dr. Amit Verma',
    type: 'theory',
  },
  {
    id: 'SUB002',
    code: 'CSE502',
    name: 'Database Management Systems',
    department: 'CSE',
    semester: 5,
    credits: 4,
    facultyId: 'FAC002',
    facultyName: 'Dr. Sneha Gupta',
    type: 'theory',
  },
  {
    id: 'SUB003',
    code: 'CSE503',
    name: 'Computer Networks',
    department: 'CSE',
    semester: 5,
    credits: 3,
    facultyId: 'FAC001',
    facultyName: 'Dr. Amit Verma',
    type: 'theory',
  },
  {
    id: 'SUB004',
    code: 'CSE504',
    name: 'Software Engineering',
    department: 'CSE',
    semester: 5,
    credits: 3,
    facultyId: 'FAC002',
    facultyName: 'Dr. Sneha Gupta',
    type: 'theory',
  },
  {
    id: 'SUB005',
    code: 'CSE505',
    name: 'Machine Learning Lab',
    department: 'CSE',
    semester: 5,
    credits: 2,
    facultyId: 'FAC001',
    facultyName: 'Dr. Amit Verma',
    type: 'lab',
  },
  {
    id: 'SUB006',
    code: 'CSE506',
    name: 'DBMS Lab',
    department: 'CSE',
    semester: 5,
    credits: 2,
    facultyId: 'FAC002',
    facultyName: 'Dr. Sneha Gupta',
    type: 'lab',
  },
  
  // Semester 6 - CSE
  {
    id: 'SUB007',
    code: 'CSE601',
    name: 'Deep Learning',
    department: 'CSE',
    semester: 6,
    credits: 4,
    facultyId: 'FAC001',
    facultyName: 'Dr. Amit Verma',
    type: 'theory',
  },
  {
    id: 'SUB008',
    code: 'CSE602',
    name: 'Cloud Computing',
    department: 'CSE',
    semester: 6,
    credits: 3,
    facultyId: 'FAC002',
    facultyName: 'Dr. Sneha Gupta',
    type: 'theory',
  },
];

// Helper function to get subjects by semester
export const getSubjectsBySemester = (semester: number, department: string): Subject[] => {
  return subjects.filter(
    (subject) => subject.semester === semester && subject.department === department
  );
};

// Helper function to get subject by ID
export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find((subject) => subject.id === id);
};
