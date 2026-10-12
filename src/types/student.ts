export interface Student {
  id: string;
  displayName: string;
  email: string;
  department: string;
  semester: number;
  section: string;
  enrollmentYear: number;
  cgpa: number | null;
  status: 'active' | 'on-leave' | 'graduated';
  mentorId?: string;
}

export interface StudentProfile extends Student {
  phoneNumber?: string;
  address?: string;
  emergencyContact?: string;
  dateOfBirth?: string;
  bloodGroup?: string;
}
