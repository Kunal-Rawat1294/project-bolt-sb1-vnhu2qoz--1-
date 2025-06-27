import { ReactNode } from 'react';

export interface ToolOption {
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

export interface ToolDefinition {
  title: string;
  description: string;
  icon: ReactNode;
  acceptedTypes: string[];
  multiple: boolean;
  options?: ToolOption[];
  process: (files: File[], options?: Record<string, any>) => Promise<string>;
}