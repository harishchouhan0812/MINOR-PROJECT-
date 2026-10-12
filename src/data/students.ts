import { Student, StudentProfile } from '../types';

export const students: StudentProfile[] = [
  {
    id: 'STU001',
    displayName: 'Rahul Sharma',
    email: 'rahul.sharma@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 8.5,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43210',
    dateOfBirth: '2004-03-15',
    bloodGroup: 'O+',
  },
  {
    id: 'STU002',
    displayName: 'Priya Patel',
    email: 'priya.patel@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 9.2,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43211',
    dateOfBirth: '2004-07-22',
    bloodGroup: 'A+',
  },
  {
    id: 'STU003',
    displayName: 'Arjun Kumar',
    email: 'arjun.kumar@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 7.8,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43212',
    dateOfBirth: '2004-01-10',
    bloodGroup: 'B+',
  },
  {
    id: 'STU004',
    displayName: 'Ananya Singh',
    email: 'ananya.singh@student.edu',
    department: 'ECE',
    semester: 5,
    section: 'B',
    enrollmentYear: 2023,
    cgpa: 8.9,
    status: 'active',
    mentorId: 'MEN002',
    phoneNumber: '+91 98765 43213',
    dateOfBirth: '2004-05-18',
    bloodGroup: 'AB+',
  },
  {
    id: 'STU005',
    displayName: 'Vikram Reddy',
    email: 'vikram.reddy@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 6.5,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43214',
    dateOfBirth: '2004-11-03',
    bloodGroup: 'O-',
  },
  {
    id: 'STU006',
    displayName: 'Meera Nair',
    email: 'meera.nair@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'B',
    enrollmentYear: 2023,
    cgpa: 8.7,
    status: 'active',
    mentorId: 'MEN002',
    phoneNumber: '+91 98765 43215',
    dateOfBirth: '2004-09-12',
    bloodGroup: 'A-',
  },
  {
    id: 'STU007',
    displayName: 'Karthik Iyer',
    email: 'karthik.iyer@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 7.2,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43216',
    dateOfBirth: '2004-04-25',
    bloodGroup: 'B-',
  },
  {
    id: 'STU008',
    displayName: 'Divya Menon',
    email: 'divya.menon@student.edu',
    department: 'CSE',
    semester: 5,
    section: 'A',
    enrollmentYear: 2023,
    cgpa: 8.1,
    status: 'active',
    mentorId: 'MEN001',
    phoneNumber: '+91 98765 43217',
    dateOfBirth: '2004-08-07',
    bloodGroup: 'O+',
  },
];

// Helper functions
export const getStudentById = (id: string): StudentProfile | undefined => {
  return students.find((student) => student.id === id);
};

export const getStudentsByDepartment = (department: string): StudentProfile[] => {
  return students.filter((student) => student.department === department);
};

export const getStudentsBySemester = (semester: number): StudentProfile[] => {
  return students.filter((student) => student.semester === semester);
};

export const getStudentsByMentor = (mentorId: string): StudentProfile[] => {
  return students.filter((student) => student.mentorId === mentorId);
};
