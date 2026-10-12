import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const HODModelEvaluation = () => (
  <div>
    <PageHeader title="Model Evaluation" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">ML Model Performance</CardContent></Card>
  </div>
);
export default HODModelEvaluation;
