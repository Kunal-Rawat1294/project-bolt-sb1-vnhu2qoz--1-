import { useState } from 'react';

export const useProcessing = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingText, setProcessingText] = useState('Processing...');

  const startProcessing = (text: string = 'Processing...') => {
    setProcessingText(text);
    setIsProcessing(true);
  };

  const stopProcessing = () => {
    setIsProcessing(false);
  };

  return {
    isProcessing,
    processingText,
    startProcessing,
    stopProcessing,
  };
};