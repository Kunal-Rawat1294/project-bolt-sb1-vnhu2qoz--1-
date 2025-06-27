import React from 'react';

interface ToolOption {
  type: 'text' | 'number' | 'range' | 'select' | 'password';
  label: string;
  key: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
  defaultValue?: any;
}

interface ToolOptionsProps {
  options: ToolOption[];
  values: Record<string, any>;
  onChange: (values: Record<string, any>) => void;
}

export const ToolOptions: React.FC<ToolOptionsProps> = ({ options, values, onChange }) => {
  const handleChange = (key: string, value: any) => {
    onChange({ ...values, [key]: value });
  };

  return (
    <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Options</h3>
      
      {options.map((option) => (
        <div key={option.key} className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {option.label}
          </label>
          
          {option.type === 'text' && (
            <input
              type="text"
              value={values[option.key] || option.defaultValue || ''}
              onChange={(e) => handleChange(option.key, e.target.value)}
              placeholder={option.placeholder}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          )}
          
          {option.type === 'password' && (
            <input
              type="password"
              value={values[option.key] || option.defaultValue || ''}
              onChange={(e) => handleChange(option.key, e.target.value)}
              placeholder={option.placeholder}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          )}
          
          {option.type === 'number' && (
            <input
              type="number"
              value={values[option.key] || option.defaultValue || ''}
              onChange={(e) => handleChange(option.key, parseFloat(e.target.value))}
              min={option.min}
              max={option.max}
              step={option.step}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          )}
          
          {option.type === 'range' && (
            <div className="space-y-2">
              <input
                type="range"
                value={values[option.key] || option.defaultValue || option.min}
                onChange={(e) => handleChange(option.key, parseFloat(e.target.value))}
                min={option.min}
                max={option.max}
                step={option.step}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Current: {values[option.key] || option.defaultValue || option.min}
              </div>
            </div>
          )}
          
          {option.type === 'select' && (
            <select
              value={values[option.key] || option.defaultValue || ''}
              onChange={(e) => handleChange(option.key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {option.options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );
};