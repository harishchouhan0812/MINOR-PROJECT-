import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SyntheticDataLabelProps {
  className?: string;
  text?: string;
}

export const SyntheticDataLabel: React.FC<SyntheticDataLabelProps> = ({
  className = '',
  text = 'Demonstration Data',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded ${className}`}
      title="This is synthetic data for demonstration purposes only"
    >
      <AlertCircle size={12} />
      <span>{text}</span>
    </div>
  );
};
