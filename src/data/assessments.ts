import { Assessment, AssessmentResult } from '../types';

export const assessments: Assessment[] = [
  // Machine Learning (SUB001)
  {
    id: 'ASMT001',
    name: 'Quiz 1 - Introduction to ML',
    subjectId: 'SUB001',
    type: 'quiz',
    maxMarks: 20,
    dueDate: '2026-08-15',
    conductedDate: '2026-08-15',
    weightage: 10,
  },
  {
    id: 'ASMT002',
    name: 'Assignment 1 - Linear Regression',
    subjectId: 'SUB001',
    type: 'assignment',
    maxMarks: 30,
    dueDate: '2026-08-30',
    weightage: 15,
  },
  {
    id: 'ASMT003',
    name: 'Midterm Exam',
    subjectId: 'SUB001',
    type: 'midterm',
    maxMarks: 50,
    dueDate: '2026-09-25',
    conductedDate: '2026-09-25',
    weightage: 25,
  },
  {
    id: 'ASMT004',
    name: 'Assignment 2 - Decision Trees',
    subjectId: 'SUB001',
    type: 'assignment',
    maxMarks: 30,
    dueDate: '2026-10-15',
    weightage: 15,
  },
  
  // DBMS (SUB002)
  {
    id: 'ASMT005',
    name: 'Quiz 1 - SQL Basics',
    subjectId: 'SUB002',
    type: 'quiz',
    maxMarks: 20,
    dueDate: '2026-08-20',
    conductedDate: '2026-08-20',
    weightage: 10,
  },
  {
    id: 'ASMT006',
    name: 'Assignment 1 - ER Diagrams',
    subjectId: 'SUB002',
    type: 'assignment',
    maxMarks: 25,
    dueDate: '2026-09-05',
    weightage: 12,
  },
  {
    id: 'ASMT007',
    name: 'Midterm Exam',
    subjectId: 'SUB002',
    type: 'midterm',
    maxMarks: 50,
    dueDate: '2026-09-28',
    conductedDate: '2026-09-28',
    weightage: 25,
  },
  
  // Computer Networks (SUB003)
  {
    id: 'ASMT008',
    name: 'Quiz 1 - OSI Model',
    subjectId: 'SUB003',
    type: 'quiz',
    maxMarks: 15,
    dueDate: '2026-08-18',
    conductedDate: '2026-08-18',
    weightage: 10,
  },
  {
    id: 'ASMT009',
    name: 'Midterm Exam',
    subjectId: 'SUB003',
    type: 'midterm',
    maxMarks: 50,
    dueDate: '2026-09-30',
    conductedDate: '2026-09-30',
    weightage: 30,
  },
  
  // Software Engineering (SUB004)
  {
    id: 'ASMT010',
    name: 'Quiz 1 - SDLC',
    subjectId: 'SUB004',
    type: 'quiz',
    maxMarks: 20,
    dueDate: '2026-08-22',
    conductedDate: '2026-08-22',
    weightage: 10,
  },
  {
    id: 'ASMT011',
    name: 'Project Proposal',
    subjectId: 'SUB004',
    type: 'project',
    maxMarks: 30,
    dueDate: '2026-09-10',
    weightage: 20,
  },
];

// Assessment Results - Synthetic data for demonstration
export const assessmentResults: AssessmentResult[] = [
  // STU001 - Rahul Sharma (Average performer)
  {
    id: 'RES001',
    studentId: 'STU001',
    assessmentId: 'ASMT001',
    subjectId: 'SUB001',
    marks: 16,
    maxMarks: 20,
    assessmentDate: '2026-08-15',
    submittedOn: '2026-08-15',
  },
  {
    id: 'RES002',
    studentId: 'STU001',
    assessmentId: 'ASMT002',
    subjectId: 'SUB001',
    marks: 24,
    maxMarks: 30,
    assessmentDate: '2026-08-30',
    submittedOn: '2026-08-29',
  },
  {
    id: 'RES003',
    studentId: 'STU001',
    assessmentId: 'ASMT003',
    subjectId: 'SUB001',
    marks: 38,
    maxMarks: 50,
    assessmentDate: '2026-09-25',
    submittedOn: '2026-09-25',
  },
  {
    id: 'RES004',
    studentId: 'STU001',
    assessmentId: 'ASMT005',
    subjectId: 'SUB002',
    marks: 15,
    maxMarks: 20,
    assessmentDate: '2026-08-20',
    submittedOn: '2026-08-20',
  },
  {
    id: 'RES005',
    studentId: 'STU001',
    assessmentId: 'ASMT006',
    subjectId: 'SUB002',
    marks: 20,
    maxMarks: 25,
    assessmentDate: '2026-09-05',
    submittedOn: '2026-09-04',
  },
  
  // STU002 - Priya Patel (High performer)
  {
    id: 'RES006',
    studentId: 'STU002',
    assessmentId: 'ASMT001',
    subjectId: 'SUB001',
    marks: 19,
    maxMarks: 20,
    assessmentDate: '2026-08-15',
    submittedOn: '2026-08-15',
  },
  {
    id: 'RES007',
    studentId: 'STU002',
    assessmentId: 'ASMT002',
    subjectId: 'SUB001',
    marks: 28,
    maxMarks: 30,
    assessmentDate: '2026-08-30',
    submittedOn: '2026-08-28',
  },
  {
    id: 'RES008',
    studentId: 'STU002',
    assessmentId: 'ASMT003',
    subjectId: 'SUB001',
    marks: 47,
    maxMarks: 50,
    assessmentDate: '2026-09-25',
    submittedOn: '2026-09-25',
  },
  
  // STU003 - Arjun Kumar (Struggling student)
  {
    id: 'RES009',
    studentId: 'STU003',
    assessmentId: 'ASMT001',
    subjectId: 'SUB001',
    marks: 12,
    maxMarks: 20,
    assessmentDate: '2026-08-15',
    submittedOn: '2026-08-15',
  },
  {
    id: 'RES010',
    studentId: 'STU003',
    assessmentId: 'ASMT002',
    subjectId: 'SUB001',
    marks: 15,
    maxMarks: 30,
    assessmentDate: '2026-08-30',
    submittedOn: null, // Late submission
  },
  {
    id: 'RES011',
    studentId: 'STU003',
    assessmentId: 'ASMT003',
    subjectId: 'SUB001',
    marks: 22,
    maxMarks: 50,
    assessmentDate: '2026-09-25',
    submittedOn: '2026-09-25',
  },
  {
    id: 'RES012',
    studentId: 'STU003',
    assessmentId: 'ASMT005',
    subjectId: 'SUB002',
    marks: 10,
    maxMarks: 20,
    assessmentDate: '2026-08-20',
    submittedOn: '2026-08-20',
  },
  
  // STU005 - Vikram Reddy (At-risk student)
  {
    id: 'RES013',
    studentId: 'STU005',
    assessmentId: 'ASMT001',
    subjectId: 'SUB001',
    marks: 10,
    maxMarks: 20,
    assessmentDate: '2026-08-15',
    submittedOn: '2026-08-15',
  },
  {
    id: 'RES014',
    studentId: 'STU005',
    assessmentId: 'ASMT002',
    subjectId: 'SUB001',
    marks: 12,
    maxMarks: 30,
    assessmentDate: '2026-08-30',
    submittedOn: null, // Not submitted
  },
  {
    id: 'RES015',
    studentId: 'STU005',
    assessmentId: 'ASMT003',
    subjectId: 'SUB001',
    marks: 18,
    maxMarks: 50,
    assessmentDate: '2026-09-25',
    submittedOn: '2026-09-25',
  },
];

// Helper functions
export const getAssessmentsBySubject = (subjectId: string): Assessment[] => {
  return assessments.filter((assessment) => assessment.subjectId === subjectId);
};

export const getAssessmentResultsByStudent = (studentId: string): AssessmentResult[] => {
  return assessmentResults.filter((result) => result.studentId === studentId);
};

export const getAssessmentResultsBySubject = (
  studentId: string,
  subjectId: string
): AssessmentResult[] => {
  return assessmentResults.filter(
    (result) => result.studentId === studentId && result.subjectId === subjectId
  );
};
