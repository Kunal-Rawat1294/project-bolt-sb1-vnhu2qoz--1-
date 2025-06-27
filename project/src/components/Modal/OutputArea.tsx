import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

interface OutputAreaProps {
  output: string;
}

export const OutputArea: React.FC<OutputAreaProps> = ({ output }) => {
  return (
    <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
        <CheckCircle size={20} />
        <h3 className="text-lg font-semibold">Processing Complete!</h3>
      </div>
      
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
        <div dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
};