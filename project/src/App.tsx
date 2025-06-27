import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ToolsSection } from './components/Tools/ToolsSection';
import { AboutSection } from './components/About/AboutSection';
import { Footer } from './components/Footer/Footer';
import { ToolModal } from './components/Modal/ToolModal';
import { LoadingOverlay } from './components/UI/LoadingOverlay';
import { useTheme } from './hooks/useTheme';
import { useModal } from './hooks/useModal';
import { useProcessing } from './hooks/useProcessing';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isModalOpen, currentTool, openModal, closeModal } = useModal();
  const { isProcessing, processingText } = useProcessing();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <ToolsSection onToolSelect={openModal} />
        <AboutSection />
      </main>
      <Footer onToolSelect={openModal} />
      
      {isModalOpen && currentTool && (
        <ToolModal
          tool={currentTool}
          onClose={closeModal}
        />
      )}
      
      {isProcessing && (
        <LoadingOverlay text={processingText} />
      )}
    </div>
  );
}

export default App;