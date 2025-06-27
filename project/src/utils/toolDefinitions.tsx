import React from 'react';
import { 
  FileText, 
  Scissors, 
  Archive, 
  RotateCw,
  Image,
  Shuffle,
  Lock,
  Unlock,
  Wrench
} from 'lucide-react';
import { ToolDefinition } from '../types/tools';
import { processPdf } from './pdfProcessor';

export const toolDefinitions: Record<string, ToolDefinition> = {
  'merge-pdf': {
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one document.',
    icon: <FileText />,
    acceptedTypes: ['.pdf'],
    multiple: true,
    process: (files) => processPdf.merge(files),
  },

  'split-pdf': {
    title: 'Split PDF',
    description: 'Extract a range of pages from a PDF.',
    icon: <Scissors />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    options: [
      {
        type: 'text',
        label: 'Page range (e.g., 1-3, 5, 8-10)',
        key: 'pageRange',
        placeholder: 'e.g., 1-3, 5, 8-10',
        defaultValue: '1-3',
      },
    ],
    process: (files, options) => processPdf.split(files, options),
  },

  'compress-pdf': {
    title: 'Compress PDF',
    description: 'Reduce PDF file size by optimizing quality.',
    icon: <Archive />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    options: [
      {
        type: 'range',
        label: 'Compression Quality',
        key: 'quality',
        min: 0.1,
        max: 1.0,
        step: 0.1,
        defaultValue: 0.7,
      },
    ],
    process: (files, options) => processPdf.compress(files, options),
  },

  'organize-pdf': {
    title: 'Organize PDF',
    description: 'Reorder, rotate, or delete pages visually.',
    icon: <Shuffle />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    process: (files) => processPdf.organize(files),
  },

  'extract-images': {
    title: 'Extract Images',
    description: 'Extract all images contained in a PDF.',
    icon: <Image />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    process: (files) => processPdf.extractImages(files),
  },

  'rotate-pdf': {
    title: 'Rotate PDF',
    description: 'Rotate all pages in a PDF document.',
    icon: <RotateCw />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    options: [
      {
        type: 'select',
        label: 'Rotation Angle',
        key: 'angle',
        defaultValue: '90',
        options: [
          { value: '90', label: '90° Clockwise' },
          { value: '180', label: '180°' },
          { value: '270', label: '270° Clockwise' },
        ],
      },
    ],
    process: (files, options) => processPdf.rotate(files, options),
  },

  'unlock-pdf': {
    title: 'Unlock PDF',
    description: 'Remove password protection from a PDF.',
    icon: <Unlock />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    options: [
      {
        type: 'password',
        label: 'PDF Password',
        key: 'password',
        placeholder: 'Enter the PDF password',
      },
    ],
    process: (files, options) => processPdf.unlock(files, options),
  },

  'protect-pdf': {
    title: 'Protect PDF',
    description: 'Add password protection to your PDF file.',
    icon: <Lock />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    options: [
      {
        type: 'password',
        label: 'New Password',
        key: 'password',
        placeholder: 'Enter a strong password',
      },
    ],
    process: (files, options) => processPdf.protect(files, options),
  },

  'repair-pdf': {
    title: 'Repair PDF',
    description: 'Attempt to recover data from corrupted PDF.',
    icon: <Wrench />,
    acceptedTypes: ['.pdf'],
    multiple: false,
    process: (files) => processPdf.repair(files),
  },
};