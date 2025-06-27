import { useState } from 'react';
import { toolDefinitions } from '../utils/toolDefinitions';
import { ToolDefinition } from '../types/tools';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTool, setCurrentTool] = useState<ToolDefinition | null>(null);

  const openModal = (toolId: string) => {
    const tool = toolDefinitions[toolId];
    if (tool) {
      setCurrentTool(tool);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTool(null);
  };

  return {
    isModalOpen,
    currentTool,
    openModal,
    closeModal,
  };
};