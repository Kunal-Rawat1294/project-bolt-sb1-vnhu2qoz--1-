import React from 'react';
import { ToolCard } from './ToolCard';
import { toolDefinitions } from '../../utils/toolDefinitions';

interface ToolsSectionProps {
  onToolSelect: (toolId: string) => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ onToolSelect }) => {
  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Advertisement Placeholder */}
        <div className="max-w-4xl mx-auto mb-16 p-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center text-gray-500 dark:text-gray-400">
          <p className="text-lg">Advertisement Space 728x90</p>
          <p className="text-sm mt-2">Help us keep BlendPDF free by supporting our sponsors</p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            All PDF Tools
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our comprehensive suite of PDF tools. Each tool is designed to be simple, fast, and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(toolDefinitions).map(([toolId, tool]) => (
            <ToolCard
              key={toolId}
              tool={tool}
              onClick={() => onToolSelect(toolId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};