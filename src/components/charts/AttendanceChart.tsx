import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface AttendanceChartProps {
  data: Array<{
    subject: string;
    percentage: number;
  }>;
  className?: string;
}

export const AttendanceChart: React.FC<AttendanceChartProps> = ({
  data,
  className = '',
}) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="subject"
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
            formatter={(value: number) => [`${value.toFixed(1)}%`, 'Attendance']}
          />
          <Legend />
          <Bar
            dataKey="percentage"
            fill="#1e40af"
            radius={[4, 4, 0, 0]}
            name="Attendance %"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
