import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Button,
  Alert,
} from '../../components/ui';
import { PageHeader, SyntheticDataLabel } from '../../components/shared';
import { ArrowLeft, AlertTriangle, Info, TrendingUp, TrendingDown } from 'lucide-react';
import {
  getPredictionById,
  getStudentById,
  subjects,
  modelInfo,
} from '../../data';
import { formatDate, formatPercentage } from '../../utils';

export const PredictionExplanation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const prediction = getPredictionById(id!);
  const student = prediction ? getStudentById(prediction.studentId) : null;
  const subject = prediction ? subjects.find((s) => s.id === prediction.subjectId) : null;

  if (!prediction || !student) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Prediction not found</p>
      </div>
    );
  }

  // Sort features by absolute contribution
  const sortedFeatures = [...prediction.contributingFeatures].sort(
    (a, b) => Math.abs(b.contribution) - Math.abs(a.contribution)
  );

  const maxContribution = Math.max(
    ...prediction.contributingFeatures.map((f) => Math.abs(f.contribution))
  );

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
        leftIcon={<ArrowLeft size={16} />}
        className="mb-4"
      >
        Back
      </Button>

      <PageHeader
        title="Prediction Explanation"
        description="Detailed breakdown of model prediction and contributing factors"
        action={<SyntheticDataLabel />}
      />

      {/* Warning Banner */}
      <Alert variant="warning" className="mb-6">
        <AlertTriangle size={20} />
        <div>
          <strong>Illustrative Example</strong>
          <p className="mt-1">
            This prediction is generated using a Random Forest model with synthetic data
            for demonstration purposes. In production, predictions should be validated
            and used alongside human judgment.
          </p>
        </div>
      </Alert>

      {/* Student & Subject Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm text-gray-600">Name</dt>
                <dd className="text-lg font-medium text-gray-900">{student.displayName}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Student ID</dt>
                <dd className="font-medium text-gray-900">{student.id}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Department</dt>
                <dd className="font-medium text-gray-900">
                  {student.department} - Semester {student.semester}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Current CGPA</dt>
                <dd className="font-medium text-gray-900">{student.cgpa?.toFixed(2)}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prediction Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-3">
              <div>
                <dt className="text-sm text-gray-600">Subject</dt>
                <dd className="text-lg font-medium text-gray-900">{subject?.name}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Target</dt>
                <dd className="text-sm text-gray-900">{prediction.target}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Prediction Date</dt>
                <dd className="font-medium text-gray-900">
                  {formatDate(prediction.predictionDate)}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Horizon</dt>
                <dd className="font-medium text-gray-900">{prediction.predictionHorizon}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Risk Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Predicted Probability</p>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPercentage(prediction.probability * 100, 0)}
                </span>
                <Badge
                  variant={
                    prediction.riskLevel === 'high'
                      ? 'error'
                      : prediction.riskLevel === 'medium'
                      ? 'warning'
                      : 'success'
                  }
                  className="text-base"
                >
                  {prediction.riskLevel.toUpperCase()} RISK
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-2">Model Confidence</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatPercentage(prediction.confidence * 100, 0)}
              </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full ${
                prediction.riskLevel === 'high'
                  ? 'bg-red-500'
                  : prediction.riskLevel === 'medium'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${prediction.probability * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Feature Contributions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Feature Contributions (SHAP Values)</CardTitle>
          <p className="text-sm text-gray-600 mt-1">
            Shows how each feature contributes to the prediction. Longer bars indicate
            stronger influence.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedFeatures.map((feature, index) => {
              const isNegative = feature.contribution < 0;
              const barWidth = (Math.abs(feature.contribution) / maxContribution) * 100;

              return (
                <div key={feature.featureName}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isNegative ? (
                        <TrendingDown className="text-red-600" size={18} />
                      ) : (
                        <TrendingUp className="text-green-600" size={18} />
                      )}
                      <span className="font-medium text-gray-900">
                        {feature.displayName}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">
                        Current: <strong>{feature.currentValue}</strong>
                      </span>
                      <span
                        className={`text-sm font-semibold ${
                          isNegative ? 'text-red-600' : 'text-green-600'
                        }`}
                      >
                        {isNegative ? '' : '+'}
                        {feature.contribution.toFixed(3)}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gray-100 rounded">
                    <div
                      className={`absolute h-8 rounded ${
                        isNegative ? 'bg-red-200 right-0' : 'bg-green-200 left-0'
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                    <div
                      className={`absolute top-0 bottom-0 w-0.5 bg-gray-400 left-1/2 transform -translate-x-1/2`}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {isNegative
                      ? 'Increases risk of poor performance'
                      : 'Decreases risk of poor performance'}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Model Information */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Model Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-600">Algorithm</p>
              <p className="font-medium text-gray-900 capitalize">
                {modelInfo.algorithm.replace('-', ' ')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Version</p>
              <p className="font-medium text-gray-900">{prediction.modelVersion}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Accuracy</p>
              <p className="font-medium text-gray-900">
                {formatPercentage(modelInfo.accuracy * 100, 1)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">ROC-AUC</p>
              <p className="font-medium text-gray-900">{modelInfo.rocAuc.toFixed(3)}</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Performance Metrics</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500">Precision</p>
                <p className="font-medium text-gray-900">
                  {formatPercentage(modelInfo.precision * 100, 1)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Recall</p>
                <p className="font-medium text-gray-900">
                  {formatPercentage(modelInfo.recall * 100, 1)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">F1-Score</p>
                <p className="font-medium text-gray-900">
                  {formatPercentage(modelInfo.f1Score * 100, 1)}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Limitations & Uncertainty */}
      <Card>
        <CardHeader>
          <CardTitle>Important Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert variant="info">
              <Info size={20} />
              <div>
                <strong>Data Freshness</strong>
                <p className="mt-1">{prediction.dataFreshness}</p>
              </div>
            </Alert>

            <Alert variant="warning">
              <AlertTriangle size={20} />
              <div>
                <strong>Uncertainty Notice</strong>
                <p className="mt-1">{prediction.uncertaintyNotice}</p>
              </div>
            </Alert>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Responsible Use Guidelines
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>Predictions are probabilistic, not deterministic</li>
                <li>Should be used to guide support, not make final decisions</li>
                <li>Require human review and contextual understanding</li>
                <li>May not account for recent changes or external factors</li>
                <li>Part of a broader academic support strategy</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
