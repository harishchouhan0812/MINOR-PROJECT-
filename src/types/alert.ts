export interface Alert {
  id: string;
  studentId: string;
  reasonCode: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'new' | 'acknowledged' | 'under-review' | 'assigned' | 'resolved' | 'dismissed';
  createdAt: string;
  createdBy: string; // system or user ID
  acknowledgedAt: string | null;
  acknowledgedBy: string | null;
  assignedTo: string | null;
  resolvedAt: string | null;
  dismissalReason: string | null;
  relatedPredictionId?: string;
  metadata?: Record<string, any>;
}

export type AlertReasonCode =
  | 'low-attendance'
  | 'poor-assessment-performance'
  | 'multiple-missed-assignments'
  | 'declining-grades'
  | 'high-risk-prediction'
  | 'no-recent-submissions'
  | 'irregular-attendance-pattern';
