import { Alert } from '../types';

export const initialAlerts: Alert[] = [
  {
    id: 'ALT001',
    studentId: 'STU005',
    reasonCode: 'high-risk-prediction',
    description: 'High risk of failing Machine Learning (82% probability)',
    severity: 'high',
    status: 'new',
    createdAt: '2026-10-01T09:00:00Z',
    createdBy: 'system',
    acknowledgedAt: null,
    acknowledgedBy: null,
    assignedTo: null,
    resolvedAt: null,
    dismissalReason: null,
    relatedPredictionId: 'PRED002',
  },
  {
    id: 'ALT002',
    studentId: 'STU005',
    reasonCode: 'low-attendance',
    description: 'Attendance in DBMS below 60% (currently 50%)',
    severity: 'high',
    status: 'new',
    createdAt: '2026-10-02T10:30:00Z',
    createdBy: 'system',
    acknowledgedAt: null,
    acknowledgedBy: null,
    assignedTo: null,
    resolvedAt: null,
    dismissalReason: null,
  },
  {
    id: 'ALT003',
    studentId: 'STU003',
    reasonCode: 'poor-assessment-performance',
    description: 'Midterm score in Machine Learning below 50% (44%)',
    severity: 'medium',
    status: 'acknowledged',
    createdAt: '2026-09-26T14:00:00Z',
    createdBy: 'system',
    acknowledgedAt: '2026-09-27T08:30:00Z',
    acknowledgedBy: 'FAC001',
    assignedTo: null,
    resolvedAt: null,
    dismissalReason: null,
  },
  {
    id: 'ALT004',
    studentId: 'STU003',
    reasonCode: 'declining-grades',
    description: 'Performance declining over recent assessments',
    severity: 'medium',
    status: 'under-review',
    createdAt: '2026-10-03T11:00:00Z',
    createdBy: 'system',
    acknowledgedAt: '2026-10-03T15:00:00Z',
    acknowledgedBy: 'FAC001',
    assignedTo: 'MEN001',
    resolvedAt: null,
    dismissalReason: null,
    relatedPredictionId: 'PRED001',
  },
  {
    id: 'ALT005',
    studentId: 'STU005',
    reasonCode: 'multiple-missed-assignments',
    description: 'Failed to submit 2 assignments in Machine Learning',
    severity: 'high',
    status: 'new',
    createdAt: '2026-10-04T09:00:00Z',
    createdBy: 'FAC001',
    acknowledgedAt: null,
    acknowledgedBy: null,
    assignedTo: null,
    resolvedAt: null,
    dismissalReason: null,
  },
  {
    id: 'ALT006',
    studentId: 'STU007',
    reasonCode: 'low-attendance',
    description: 'Attendance in Software Engineering below 75% (72%)',
    severity: 'medium',
    status: 'dismissed',
    createdAt: '2026-09-20T10:00:00Z',
    createdBy: 'system',
    acknowledgedAt: '2026-09-21T09:00:00Z',
    acknowledgedBy: 'FAC002',
    assignedTo: null,
    resolvedAt: '2026-09-25T14:00:00Z',
    dismissalReason: 'Student provided valid medical certificates for absences',
  },
];

// Helper functions
export const getAlertsByStudent = (studentId: string): Alert[] => {
  return initialAlerts.filter((alert) => alert.studentId === studentId);
};

export const getAlertsByStatus = (status: Alert['status']): Alert[] => {
  return initialAlerts.filter((alert) => alert.status === status);
};

export const getNewAlerts = (): Alert[] => {
  return initialAlerts.filter((alert) => alert.status === 'new');
};

export const getActiveAlerts = (): Alert[] => {
  return initialAlerts.filter(
    (alert) =>
      alert.status !== 'resolved' && alert.status !== 'dismissed'
  );
};
