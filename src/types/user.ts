export type UserRole = 'student' | 'faculty' | 'mentor' | 'hod' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  switchRole: (role: UserRole, userId?: string) => void;
}
