import React from 'react';
import { toolDefinitions } from '../../utils/toolDefinitions';

interface FooterProps {
  onToolSelect: (toolId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onToolSelect }) => {
  const topTools = ['merge-pdf', 'split-pdf', 'compress-pdf', 'organize-pdf'];

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">About BlendPDF</h4>
            <p className="text-gray-300 leading-relaxed">
              Your free, secure, client-side PDF processing toolkit. All tools work directly in your browser. 
              No uploads, no waiting, no compromises.
            </p>
          </div>

          {/* Top Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Top Tools</h4>
            <ul className="space-y-2">
              {topTools.map(toolId => (
                <li key={toolId}>
                  <button
                    onClick={() => onToolSelect(toolId)}
                    className="text-gray-300 hover:text-red-400 transition-colors text-left"
                  >
                    {toolDefinitions[toolId].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-400">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@blendpdf.com" 
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  contact@blendpdf.com
                </a>
              </li>
              <li className="text-gray-300">
                123 Tool Street, Webville
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BlendPDF. All Rights Reserved. Made with ❤️ for PDF lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};