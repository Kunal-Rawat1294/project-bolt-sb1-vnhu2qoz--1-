import React, { useRef } from 'react';
import { Upload, Plus } from 'lucide-react';
import { ToolDefinition } from '../../types/tools';

interface FileUploadProps {
  tool: ToolDefinition;
  onFilesChange: (files: File[]) => void;
  isAddMore?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({ tool, onFilesChange, isAddMore = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFiles(selectedFiles);
  };

  const handleFiles = (selectedFiles: File[]) => {
    const validFiles = selectedFiles.filter(file => {
      const extension = '.' + file.name.split('.').pop()?.toLowerCase();
      return tool.acceptedTypes.includes(extension);
    });

    if (validFiles.length !== selectedFiles.length) {
      alert(`Please select only ${tool.acceptedTypes.join(', ')} files.`);
    }

    if (validFiles.length > 0) {
      onFilesChange(validFiles);
    }
  };

  if (isAddMore) {
    return (
      <div className="text-center">
        <button
          onClick={handleFileSelect}
          className="inline-flex items-center px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Add More Files
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept={tool.acceptedTypes.join(',')}
          multiple={tool.multiple}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center hover:border-red-400 dark:hover:border-red-500 transition-colors cursor-pointer"
      onClick={handleFileSelect}
    >
      <div className="mb-4">
        <Upload size={48} className="mx-auto text-red-500" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Drag & Drop files here
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        or click to select files
      </p>
      
      <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-colors">
        Choose Files
      </button>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Accepted formats: {tool.acceptedTypes.join(', ')}
        {tool.multiple && ' • Multiple files allowed'}
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept={tool.acceptedTypes.join(',')}
        multiple={tool.multiple}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};