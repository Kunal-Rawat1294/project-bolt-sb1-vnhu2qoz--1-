import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  text?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ text = 'Processing...' }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-4">
        <Loader2 size={48} className="animate-spin text-red-500" />
        <p className="text-lg font-medium text-gray-900 dark:text-white">{text}</p>
      </div>
    </div>
  );
};