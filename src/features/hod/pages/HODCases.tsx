import React from 'react';
import { PageHeader, SyntheticDataLabel } from '../../../components/shared';
import { Card, CardContent } from '../../../components/ui';
const HODCases = () => (
  <div>
    <PageHeader title="Support Cases" action={<SyntheticDataLabel />} />
    <Card><CardContent className="py-12 text-center text-gray-500">Case Statistics</CardContent></Card>
  </div>
);
export default HODCases;
