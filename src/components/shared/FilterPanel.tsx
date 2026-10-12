import React from 'react';
import { Card } from '../ui/Card';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

export interface FilterOption {
  key: string;
  label: string;
  options: { value: string; label: string }[];
}

interface FilterPanelProps {
  filters: FilterOption[];
  values: Record<string, string>;
  onChange: (key: string, value: string) => void;
  onClear: () => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  values,
  onChange,
  onClear,
  className = '',
}) => {
  const hasActiveFilters = Object.values(values).some((v) => v !== '');

  return (
    <Card className={className} padding="sm">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => (
          <div key={filter.key} className="min-w-[180px]">
            <Select
              options={filter.options}
              value={values[filter.key] || ''}
              onChange={(e) => onChange(filter.key, e.target.value)}
              placeholder={filter.label}
            />
          </div>
        ))}
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClear} leftIcon={<X size={16} />}>
            Clear filters
          </Button>
        )}
      </div>
    </Card>
  );
};
