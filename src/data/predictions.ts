import { PredictionDemo, ModelInfo, FeatureContribution } from '../types';

// Model information (illustrative - for Week 5)
export const modelInfo: ModelInfo = {
  version: 'v1.0.0-rf',
  algorithm: 'random-forest',
  trainedOn: '2026-09-01',
  accuracy: 0.84,
  precision: 0.81,
  recall: 0.78,
  f1Score: 0.79,
  rocAuc: 0.87,
};

// Illustrative predictions - clearly marked as demonstration examples
export const predictions: PredictionDemo[] = [
  {
    id: 'PRED001',
    studentId: 'STU003',
    subjectId: 'SUB001',
    target: 'Risk of failing Machine Learning course by end of semester',
    predictionDate: '2026-10-01',
    predictionHorizon: 'End of Semester (December 2026)',
    probability: 0.68,
    riskLevel: 'medium',
    modelVersion: 'v1.0.0-rf',
    contributingFeatures: [
      {
        featureName: 'attendance_percentage',
        displayName: 'Attendance Percentage',
        contribution: -0.25,
        currentValue: '68%',
        impact: 'negative',
      },
      {
        featureName: 'midterm_score',
        displayName: 'Midterm Exam Score',
        contribution: -0.32,
        currentValue: '44%',
        impact: 'negative',
      },
      {
        featureName: 'assignment_completion',
        displayName: 'Assignment Completion Rate',
        contribution: -0.18,
        currentValue: '66%',
        impact: 'negative',
      },
      {
        featureName: 'quiz_average',
        displayName: 'Quiz Average',
        contribution: -0.12,
        currentValue: '60%',
        impact: 'negative',
      },
      {
        featureName: 'previous_cgpa',
        displayName: 'Previous CGPA',
        contribution: 0.08,
        currentValue: '7.8',
        impact: 'positive',
      },
    ],
    uncertaintyNotice:
      'This is an illustrative prediction based on a Random Forest model. Model predictions are probabilistic and should not be used as the sole basis for academic decisions. Human review is required.',
    dataFreshness: 'Data as of October 1, 2026',
    confidence: 0.75,
  },
  {
    id: 'PRED002',
    studentId: 'STU005',
    subjectId: 'SUB001',
    target: 'Risk of failing Machine Learning course by end of semester',
    predictionDate: '2026-10-01',
    predictionHorizon: 'End of Semester (December 2026)',
    probability: 0.82,
    riskLevel: 'high',
    modelVersion: 'v1.0.0-rf',
    contributingFeatures: [
      {
        featureName: 'attendance_percentage',
        displayName: 'Attendance Percentage',
        contribution: -0.38,
        currentValue: '54%',
        impact: 'negative',
      },
      {
        featureName: 'midterm_score',
        displayName: 'Midterm Exam Score',
        contribution: -0.42,
        currentValue: '36%',
        impact: 'negative',
      },
      {
        featureName: 'assignment_completion',
        displayName: 'Assignment Completion Rate',
        contribution: -0.28,
        currentValue: '50%',
        impact: 'negative',
      },
      {
        featureName: 'quiz_average',
        displayName: 'Quiz Average',
        contribution: -0.22,
        currentValue: '50%',
        impact: 'negative',
      },
      {
        featureName: 'previous_cgpa',
        displayName: 'Previous CGPA',
        contribution: -0.05,
        currentValue: '6.5',
        impact: 'negative',
      },
    ],
    uncertaintyNotice:
      'This is an illustrative prediction based on a Random Forest model. Model predictions are probabilistic and should not be used as the sole basis for academic decisions. Human review is required.',
    dataFreshness: 'Data as of October 1, 2026',
    confidence: 0.82,
  },
  {
    id: 'PRED003',
    studentId: 'STU005',
    subjectId: 'SUB002',
    target: 'Risk of failing DBMS course by end of semester',
    predictionDate: '2026-10-01',
    predictionHorizon: 'End of Semester (December 2026)',
    probability: 0.75,
    riskLevel: 'high',
    modelVersion: 'v1.0.0-rf',
    contributingFeatures: [
      {
        featureName: 'attendance_percentage',
        displayName: 'Attendance Percentage',
        contribution: -0.35,
        currentValue: '50%',
        impact: 'negative',
      },
      {
        featureName: 'lab_completion',
        displayName: 'Lab Work Completion',
        contribution: -0.30,
        currentValue: '55%',
        impact: 'negative',
      },
      {
        featureName: 'assignment_completion',
        displayName: 'Assignment Completion Rate',
        contribution: -0.25,
        currentValue: '60%',
        impact: 'negative',
      },
      {
        featureName: 'quiz_average',
        displayName: 'Quiz Average',
        contribution: -0.15,
        currentValue: '55%',
        impact: 'negative',
      },
    ],
    uncertaintyNotice:
      'This is an illustrative prediction based on a Random Forest model. Model predictions are probabilistic and should not be used as the sole basis for academic decisions. Human review is required.',
    dataFreshness: 'Data as of October 1, 2026',
    confidence: 0.78,
  },
  {
    id: 'PRED004',
    studentId: 'STU001',
    subjectId: 'SUB001',
    target: 'Risk of failing Machine Learning course by end of semester',
    predictionDate: '2026-10-01',
    predictionHorizon: 'End of Semester (December 2026)',
    probability: 0.32,
    riskLevel: 'low',
    modelVersion: 'v1.0.0-rf',
    contributingFeatures: [
      {
        featureName: 'attendance_percentage',
        displayName: 'Attendance Percentage',
        contribution: 0.15,
        currentValue: '85%',
        impact: 'positive',
      },
      {
        featureName: 'midterm_score',
        displayName: 'Midterm Exam Score',
        contribution: 0.10,
        currentValue: '76%',
        impact: 'positive',
      },
      {
        featureName: 'assignment_completion',
        displayName: 'Assignment Completion Rate',
        contribution: 0.12,
        currentValue: '90%',
        impact: 'positive',
      },
      {
        featureName: 'quiz_average',
        displayName: 'Quiz Average',
        contribution: 0.08,
        currentValue: '80%',
        impact: 'positive',
      },
      {
        featureName: 'previous_cgpa',
        displayName: 'Previous CGPA',
        contribution: 0.10,
        currentValue: '8.5',
        impact: 'positive',
      },
    ],
    uncertaintyNotice:
      'This is an illustrative prediction based on a Random Forest model. Model predictions are probabilistic and should not be used as the sole basis for academic decisions. Human review is required.',
    dataFreshness: 'Data as of October 1, 2026',
    confidence: 0.82,
  },
];

// Helper functions
export const getPredictionsByStudent = (studentId: string): PredictionDemo[] => {
  return predictions.filter((pred) => pred.studentId === studentId);
};

export const getPredictionById = (id: string): PredictionDemo | undefined => {
  return predictions.find((pred) => pred.id === id);
};

export const getHighRiskPredictions = (): PredictionDemo[] => {
  return predictions.filter((pred) => pred.riskLevel === 'high');
};
