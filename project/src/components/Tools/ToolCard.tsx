import React from 'react';
import { ToolDefinition } from '../../types/tools';

interface ToolCardProps {
  tool: ToolDefinition;
  onClick: () => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-105"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 text-red-500 group-hover:text-red-600 transition-colors duration-300 group-hover:scale-110 transform">
          {tool.icon}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
          {tool.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {tool.description}
        </p>
      </div>
    </div>
  );
};