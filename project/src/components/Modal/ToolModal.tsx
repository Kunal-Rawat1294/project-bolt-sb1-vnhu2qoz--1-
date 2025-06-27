import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ToolDefinition } from '../../types/tools';
import { FileUpload } from './FileUpload';
import { FileList } from './FileList';
import { ToolOptions } from './ToolOptions';
import { ProcessButton } from './ProcessButton';
import { OutputArea } from './OutputArea';

interface ToolModalProps {
  tool: ToolDefinition;
  onClose: () => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [options, setOptions] = useState<Record<string, any>>({});
  const [output, setOutput] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFilesChange = (newFiles: File[]) => {
    if (tool.multiple) {
      setFiles(prev => [...prev, ...newFiles]);
    } else {
      setFiles(newFiles.slice(0, 1));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (!tool.process || files.length === 0) return;

    setIsProcessing(true);
    try {
      const result = await tool.process(files, options);
      setOutput(result);
    } catch (error) {
      console.error('Processing error:', error);
      alert('An error occurred while processing your files. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const canProcess = files.length > 0 && !isProcessing;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] mx-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 text-red-500">
              {tool.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {tool.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {files.length === 0 ? (
            <FileUpload
              tool={tool}
              onFilesChange={handleFilesChange}
            />
          ) : (
            <div className="space-y-6">
              <FileList
                files={files}
                onRemoveFile={handleRemoveFile}
              />
              
              {tool.multiple && (
                <FileUpload
                  tool={tool}
                  onFilesChange={handleFilesChange}
                  isAddMore
                />
              )}

              {tool.options && (
                <ToolOptions
                  options={tool.options}
                  values={options}
                  onChange={setOptions}
                />
              )}

              {output && (
                <OutputArea output={output} />
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {files.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <ProcessButton
              canProcess={canProcess}
              isProcessing={isProcessing}
              onProcess={handleProcess}
            />
          </div>
        )}
      </div>
    </div>
  );
};