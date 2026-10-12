import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PerformanceChartProps {
  data: Array<{
    name: string;
    marks: number;
    average?: number;
  }>;
  className?: string;
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data,
  className = '',
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            domain={[0, 100]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="marks"
            stroke="#1e40af"
            strokeWidth={2}
            dot={{ fill: '#1e40af', r: 4 }}
            name="Your Score"
          />
          {data.some((d) => d.average !== undefined) && (
            <Line
              type="monotone"
              dataKey="average"
              stroke="#14b8a6"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#14b8a6', r: 4 }}
              name="Class Average"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
