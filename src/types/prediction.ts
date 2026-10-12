export interface FeatureContribution {
  featureName: string;
  displayName: string;
  contribution: number; // SHAP value or similar
  currentValue: string | number;
  impact: 'positive' | 'negative' | 'neutral';
}

export interface PredictionDemo {
  id: string;
  studentId: string;
  subjectId: string;
  target: string; // e.g., "Risk of failing course by end of semester"
  predictionDate: string;
  predictionHorizon: string; // e.g., "End of Semester (Dec 2026)"
  probability: number; // 0 to 1
  riskLevel: 'low' | 'medium' | 'high';
  modelVersion: string;
  contributingFeatures: FeatureContribution[];
  uncertaintyNotice: string;
  dataFreshness: string;
  confidence: number; // 0 to 1
}

export interface ModelInfo {
  version: string;
  algorithm: 'logistic-regression' | 'decision-tree' | 'random-forest' | 'svm';
  trainedOn: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  rocAuc: number;
}
