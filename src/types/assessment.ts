export interface Assessment {
  id: string;
  name: string;
  subjectId: string;
  type: 'quiz' | 'assignment' | 'midterm' | 'final' | 'project' | 'presentation';
  maxMarks: number;
  dueDate: string;
  conductedDate?: string;
  weightage: number; // percentage contribution to final grade
  description?: string;
}

export interface AssessmentResult {
  id: string;
  studentId: string;
  assessmentId: string;
  subjectId: string;
  marks: number;
  maxMarks: number;
  assessmentDate: string;
  submittedOn: string | null;
  feedback?: string;
  grade?: string;
}

export interface SubjectPerformance {
  subjectId: string;
  subjectName: string;
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  grade: string;
  assessmentResults: AssessmentResult[];
}
