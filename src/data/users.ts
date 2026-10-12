import { User } from '../types';

// Demo users for role-based access
export const demoUsers: User[] = [
  // Students
  {
    id: 'STU001',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@student.edu',
    role: 'student',
    department: 'CSE',
  },
  {
    id: 'STU002',
    name: 'Priya Patel',
    email: 'priya.patel@student.edu',
    role: 'student',
    department: 'CSE',
  },
  {
    id: 'STU003',
    name: 'Arjun Kumar',
    email: 'arjun.kumar@student.edu',
    role: 'student',
    department: 'CSE',
  },
  {
    id: 'STU004',
    name: 'Ananya Singh',
    email: 'ananya.singh@student.edu',
    role: 'student',
    department: 'ECE',
  },
  {
    id: 'STU005',
    name: 'Vikram Reddy',
    email: 'vikram.reddy@student.edu',
    role: 'student',
    department: 'CSE',
  },
  
  // Faculty
  {
    id: 'FAC001',
    name: 'Dr. Amit Verma',
    email: 'amit.verma@faculty.edu',
    role: 'faculty',
    department: 'CSE',
  },
  {
    id: 'FAC002',
    name: 'Dr. Sneha Gupta',
    email: 'sneha.gupta@faculty.edu',
    role: 'faculty',
    department: 'CSE',
  },
  {
    id: 'FAC003',
    name: 'Prof. Rajesh Iyer',
    email: 'rajesh.iyer@faculty.edu',
    role: 'faculty',
    department: 'ECE',
  },
  
  // Mentors
  {
    id: 'MEN001',
    name: 'Dr. Kavita Sharma',
    email: 'kavita.sharma@faculty.edu',
    role: 'mentor',
    department: 'CSE',
  },
  {
    id: 'MEN002',
    name: 'Prof. Suresh Nair',
    email: 'suresh.nair@faculty.edu',
    role: 'mentor',
    department: 'CSE',
  },
  
  // HOD
  {
    id: 'HOD001',
    name: 'Dr. Ramesh Krishnan',
    email: 'ramesh.krishnan@faculty.edu',
    role: 'hod',
    department: 'CSE',
  },
  
  // Admin
  {
    id: 'ADM001',
    name: 'Sunita Desai',
    email: 'sunita.desai@admin.edu',
    role: 'admin',
  },
];

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return demoUsers.find((user) => user.id === id);
};

// Helper function to get users by role
export const getUsersByRole = (role: string): User[] => {
  return demoUsers.filter((user) => user.role === role);
};
