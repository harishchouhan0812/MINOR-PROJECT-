import { useState, useMemo } from 'react';

export interface FilterConfig<T> {
  searchFields?: (keyof T)[];
  filterFunctions?: Record<string, (item: T, value: any) => boolean>;
}

export function useFilters<T>(items: T[], config: FilterConfig<T> = {}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, any>>({});

  const filteredItems = useMemo(() => {
    let result = items;

    // Apply search
    if (searchQuery && config.searchFields) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) =>
        config.searchFields!.some((field) => {
          const value = item[field];
          return String(value).toLowerCase().includes(query);
        })
      );
    }

    // Apply custom filters
    if (config.filterFunctions) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== '' && config.filterFunctions![key]) {
          result = result.filter((item) => config.filterFunctions![key](item, value));
        }
      });
    }

    return result;
  }, [items, searchQuery, filters, config]);

  const updateFilter = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilters({});
  };

  return {
    filteredItems,
    searchQuery,
    setSearchQuery,
    filters,
    updateFilter,
    clearFilters,
  };
}
