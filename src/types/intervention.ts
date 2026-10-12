export interface SupportCase {
  id: string;
  studentId: string;
  alertId: string | null;
  createdBy: string;
  assignedTo: string;
  interventionType: 'mentoring' | 'remedial-session' | 'faculty-consultation' | 'study-plan' | 'counseling' | 'peer-tutoring';
  title: string;
  description: string;
  dueDate: string;
  status: 'open' | 'in-progress' | 'follow-up-needed' | 'completed' | 'closed';
  priority: 'low' | 'medium' | 'high';
  outcome: string | null;
  createdAt: string;
  updatedAt: string;
  closedAt: string | null;
  notes: CaseNote[];
}

export interface CaseNote {
  id: string;
  caseId: string;
  authorId: string;
  authorName: string;
  content: string;
  createdAt: string;
  type: 'note' | 'status-update' | 'meeting-summary';
}

export interface FollowUpTask {
  id: string;
  caseId: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedToName: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  completedAt: string | null;
  notes: string | null;
  createdAt: string;
}

export interface MeetingRecord {
  id: string;
  caseId: string;
  studentId: string;
  conductedBy: string;
  conductedByName: string;
  meetingDate: string;
  duration: number; // in minutes
  type: 'one-on-one' | 'group' | 'virtual' | 'phone';
  summary: string;
  actionItems: string[];
  nextMeetingDate?: string;
}
