import { SupportCase, FollowUpTask, MeetingRecord, CaseNote } from '../types';

export const initialCases: SupportCase[] = [
  {
    id: 'CASE001',
    studentId: 'STU005',
    alertId: 'ALT001',
    createdBy: 'FAC001',
    assignedTo: 'MEN001',
    interventionType: 'mentoring',
    title: 'Academic Support for Machine Learning',
    description:
      'Student showing high risk of failure in ML course. Requires intensive mentoring and study plan development.',
    dueDate: '2026-11-01',
    status: 'in-progress',
    priority: 'high',
    outcome: null,
    createdAt: '2026-10-05T10:00:00Z',
    updatedAt: '2026-10-08T14:30:00Z',
    closedAt: null,
    notes: [],
  },
  {
    id: 'CASE002',
    studentId: 'STU003',
    alertId: 'ALT004',
    createdBy: 'FAC001',
    assignedTo: 'MEN001',
    interventionType: 'remedial-session',
    title: 'Remedial Sessions for Core Concepts',
    description:
      'Arrange remedial sessions to cover fundamental ML concepts missed due to attendance gaps.',
    dueDate: '2026-10-25',
    status: 'in-progress',
    priority: 'medium',
    outcome: null,
    createdAt: '2026-10-04T09:00:00Z',
    updatedAt: '2026-10-07T11:00:00Z',
    closedAt: null,
    notes: [],
  },
  {
    id: 'CASE003',
    studentId: 'STU005',
    alertId: 'ALT002',
    createdBy: 'FAC002',
    assignedTo: 'MEN001',
    interventionType: 'faculty-consultation',
    title: 'Faculty Consultation - DBMS',
    description:
      'Schedule one-on-one consultation with DBMS faculty to address learning gaps and improve attendance.',
    dueDate: '2026-10-20',
    status: 'open',
    priority: 'high',
    outcome: null,
    createdAt: '2026-10-06T13:00:00Z',
    updatedAt: '2026-10-06T13:00:00Z',
    closedAt: null,
    notes: [],
  },
  {
    id: 'CASE004',
    studentId: 'STU008',
    alertId: null,
    createdBy: 'MEN002',
    assignedTo: 'MEN002',
    interventionType: 'study-plan',
    title: 'Structured Study Plan Development',
    description: 'Create personalized study schedule to improve time management and performance.',
    dueDate: '2026-10-30',
    status: 'completed',
    priority: 'low',
    outcome: 'Student successfully implemented study plan. Recent quiz scores improved by 15%.',
    createdAt: '2026-09-15T10:00:00Z',
    updatedAt: '2026-10-01T16:00:00Z',
    closedAt: '2026-10-01T16:00:00Z',
    notes: [],
  },
];

export const initialTasks: FollowUpTask[] = [
  {
    id: 'TASK001',
    caseId: 'CASE001',
    title: 'Initial mentoring meeting',
    description: 'Conduct first meeting to understand challenges and create action plan',
    assignedTo: 'MEN001',
    assignedToName: 'Dr. Kavita Sharma',
    dueDate: '2026-10-08',
    status: 'completed',
    completedAt: '2026-10-08T15:00:00Z',
    notes: 'Student identified time management and concept clarity as main issues',
    createdAt: '2026-10-05T10:30:00Z',
  },
  {
    id: 'TASK002',
    caseId: 'CASE001',
    title: 'Weekly check-in meeting',
    description: 'Review progress on study plan and assignment completion',
    assignedTo: 'MEN001',
    assignedToName: 'Dr. Kavita Sharma',
    dueDate: '2026-10-15',
    status: 'pending',
    completedAt: null,
    notes: null,
    createdAt: '2026-10-08T15:30:00Z',
  },
  {
    id: 'TASK003',
    caseId: 'CASE001',
    title: 'Coordinate peer tutoring',
    description: 'Arrange peer tutoring sessions with high-performing students',
    assignedTo: 'MEN001',
    assignedToName: 'Dr. Kavita Sharma',
    dueDate: '2026-10-12',
    status: 'in-progress',
    completedAt: null,
    notes: 'Connected with Priya Patel (STU002) for peer support',
    createdAt: '2026-10-08T16:00:00Z',
  },
  {
    id: 'TASK004',
    caseId: 'CASE002',
    title: 'Schedule remedial sessions',
    description: 'Book slots for 3 remedial sessions covering weeks 1-5 content',
    assignedTo: 'MEN001',
    assignedToName: 'Dr. Kavita Sharma',
    dueDate: '2026-10-10',
    status: 'completed',
    completedAt: '2026-10-09T11:00:00Z',
    notes: 'Sessions scheduled for Oct 12, 16, and 19',
    createdAt: '2026-10-04T10:00:00Z',
  },
  {
    id: 'TASK005',
    caseId: 'CASE003',
    title: 'Faculty meeting coordination',
    description: 'Arrange meeting between student and Dr. Sneha Gupta',
    assignedTo: 'MEN001',
    assignedToName: 'Dr. Kavita Sharma',
    dueDate: '2026-10-14',
    status: 'pending',
    completedAt: null,
    notes: null,
    createdAt: '2026-10-06T14:00:00Z',
  },
];

export const initialMeetings: MeetingRecord[] = [
  {
    id: 'MEET001',
    caseId: 'CASE001',
    studentId: 'STU005',
    conductedBy: 'MEN001',
    conductedByName: 'Dr. Kavita Sharma',
    meetingDate: '2026-10-08T15:00:00Z',
    duration: 45,
    type: 'one-on-one',
    summary:
      'Discussed academic challenges. Student reported difficulty managing time and understanding advanced ML concepts. Created action plan with weekly check-ins and peer tutoring.',
    actionItems: [
      'Create daily study schedule',
      'Complete pending assignments by Oct 15',
      'Attend all classes for next 2 weeks',
      'Join peer tutoring sessions',
    ],
    nextMeetingDate: '2026-10-15',
  },
  {
    id: 'MEET002',
    caseId: 'CASE004',
    studentId: 'STU008',
    conductedBy: 'MEN002',
    conductedByName: 'Prof. Suresh Nair',
    meetingDate: '2026-09-20T14:00:00Z',
    duration: 30,
    type: 'one-on-one',
    summary:
      'Initial assessment meeting. Student needs better time management. Created structured study plan with specific time blocks for each subject.',
    actionItems: [
      'Follow 2-hour daily study schedule',
      'Complete assignments 2 days before deadline',
      'Review notes same day after classes',
    ],
    nextMeetingDate: '2026-09-27',
  },
];

export const initialCaseNotes: CaseNote[] = [
  {
    id: 'NOTE001',
    caseId: 'CASE001',
    authorId: 'MEN001',
    authorName: 'Dr. Kavita Sharma',
    content:
      'Initial meeting completed. Student is motivated but struggling with foundational concepts. Recommended attendance in all remaining classes and enrollment in peer tutoring program.',
    createdAt: '2026-10-08T16:00:00Z',
    type: 'meeting-summary',
  },
  {
    id: 'NOTE002',
    caseId: 'CASE001',
    authorId: 'MEN001',
    authorName: 'Dr. Kavita Sharma',
    content:
      'Connected student with Priya Patel (STU002) for peer tutoring. First session scheduled for Oct 12.',
    createdAt: '2026-10-09T10:00:00Z',
    type: 'note',
  },
  {
    id: 'NOTE003',
    caseId: 'CASE002',
    authorId: 'FAC001',
    authorName: 'Dr. Amit Verma',
    content:
      'Remedial sessions scheduled. Will cover supervised learning basics, decision trees, and model evaluation.',
    createdAt: '2026-10-09T14:00:00Z',
    type: 'note',
  },
];

// Helper functions
export const getCasesByStudent = (studentId: string): SupportCase[] => {
  return initialCases.filter((c) => c.studentId === studentId);
};

export const getCasesByMentor = (mentorId: string): SupportCase[] => {
  return initialCases.filter((c) => c.assignedTo === mentorId);
};

export const getTasksByCase = (caseId: string): FollowUpTask[] => {
  return initialTasks.filter((t) => t.caseId === caseId);
};

export const getMeetingsByCase = (caseId: string): MeetingRecord[] => {
  return initialMeetings.filter((m) => m.caseId === caseId);
};

export const getNotesByCase = (caseId: string): CaseNote[] => {
  return initialCaseNotes.filter((n) => n.caseId === caseId);
};
