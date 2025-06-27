import React from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessButtonProps {
  canProcess: boolean;
  isProcessing: boolean;
  onProcess: () => void;
}

export const ProcessButton: React.FC<ProcessButtonProps> = ({
  canProcess,
  isProcessing,
  onProcess,
}) => {
  return (
    <button
      onClick={onProcess}
      disabled={!canProcess}
      className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
        canProcess
          ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
          : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
      }`}
    >
      {isProcessing ? (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 size={20} className="animate-spin" />
          <span>Processing...</span>
        </div>
      ) : (
        'Process Files'
      )}
    </button>
  );
};