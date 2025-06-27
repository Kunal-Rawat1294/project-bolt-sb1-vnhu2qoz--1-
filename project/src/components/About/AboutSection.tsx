import React from 'react';
import { Shield, Zap, Heart, FileText, Scissors, Archive, RotateCw, Lock, Unlock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose BlendPDF?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We've built the most comprehensive, secure, and user-friendly PDF toolkit available anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Your Security is Our Blueprint
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All processing happens directly on your computer, within your browser. This is known as 
                <strong> client-side processing</strong>. Your files never leave your local machine, 
                eliminating risk and ensuring absolute confidentiality.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Lightning Fast Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                No more waiting for uploads or downloads. Our client-side approach means instant processing 
                and immediate results. Your productivity is our priority.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Built with Love
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature is carefully crafted with user experience in mind. We believe powerful tools 
                should be simple to use and accessible to everyone.
              </p>
            </div>
          </div>

          {/* SEO Article Content */}
          <article className="prose prose-lg dark:prose-invert mx-auto max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Complete Guide to PDF Management: Everything You Need to Know About BlendPDF Tools
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                In today's digital landscape, the Portable Document Format (PDF) has become the universal standard for document sharing and preservation. Whether you're a business professional, student, researcher, or casual user, you've likely encountered situations where you need to <strong>merge PDF</strong> files, <strong>split PDF</strong> documents, <strong>compress PDF</strong> files for easier sharing, or perform other essential PDF operations. This is where <strong>BlendPDF</strong> emerges as your comprehensive solution for all PDF-related tasks.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                BlendPDF represents a revolutionary approach to PDF management, offering a complete suite of <strong>free online PDF tools</strong> that prioritize your privacy, security, and convenience. Unlike traditional online PDF services that require uploading your sensitive documents to remote servers, BlendPDF processes everything directly in your browser using advanced client-side technology.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-red-500 mr-3" />
                Merge PDF: Combining Multiple Documents Seamlessly
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                One of the most frequently requested PDF operations is the ability to <strong>merge PDF</strong> files into a single, cohesive document. Whether you're consolidating reports, combining chapters of a book, or merging invoices for accounting purposes, BlendPDF's merge functionality provides an intuitive and powerful solution.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Our <strong>merge PDF</strong> tool supports unlimited file combinations, allowing you to drag and drop multiple PDF documents and arrange them in your desired order. The process maintains the original quality and formatting of your documents while creating a seamless merged result. This is particularly valuable for businesses that need to combine multiple contracts, presentations, or reports into comprehensive packages.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The merge process is lightning-fast because everything happens locally in your browser. There's no waiting for uploads, no file size restrictions based on server limitations, and no concerns about your confidential documents being stored on external servers. Simply select your files, arrange them as needed, and download your merged PDF instantly.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Scissors className="w-6 h-6 text-red-500 mr-3" />
                Split PDF: Extracting Specific Pages with Precision
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Sometimes you need only specific pages from a larger PDF document. Our <strong>split PDF</strong> tool offers flexible page extraction capabilities that go far beyond simple page-by-page splitting. You can specify complex page ranges using intuitive syntax like "1-5, 8, 12-15" to extract exactly the pages you need.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                This <strong>split PDF</strong> functionality is invaluable for researchers who need to extract specific chapters from academic papers, students who want to share particular sections of textbooks, or professionals who need to distribute only relevant pages from comprehensive reports. The tool preserves all original formatting, links, and metadata from the selected pages.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The splitting process is designed for maximum flexibility. Whether you need a single page, multiple non-consecutive pages, or complex ranges, BlendPDF handles it all with ease. The resulting PDF maintains professional quality and can be immediately used for sharing, printing, or further processing.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Archive className="w-6 h-6 text-red-500 mr-3" />
                Compress PDF: Optimizing File Sizes Without Compromising Quality
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Large PDF files can be problematic for email attachments, web uploads, or storage limitations. Our <strong>compress PDF</strong> tool addresses this challenge by intelligently reducing file sizes while maintaining visual quality. The compression algorithm analyzes your document and applies optimal settings for images, fonts, and other elements.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The <strong>compress PDF</strong> feature offers adjustable quality settings, allowing you to balance file size reduction with visual fidelity based on your specific needs. For documents destined for web sharing, you might choose higher compression, while documents for printing might require lower compression to maintain crisp text and images.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                What sets BlendPDF's compression apart is its intelligent approach. The tool analyzes each document individually and applies appropriate compression techniques. Images are optimized using advanced algorithms, redundant data is removed, and the overall file structure is streamlined without affecting the document's functionality or appearance.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <RotateCw className="w-6 h-6 text-red-500 mr-3" />
                Advanced PDF Operations: Rotate, Organize, and Extract
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Beyond basic merge and split operations, BlendPDF offers sophisticated tools for comprehensive PDF management. The <strong>rotate PDF</strong> function allows you to correct document orientation issues, whether you're dealing with scanned documents that were captured at the wrong angle or pages that need to be rotated for better readability.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Our organize PDF tool provides visual page management, allowing you to reorder pages through an intuitive drag-and-drop interface. This is particularly useful for documents that have been scanned out of order or when you need to restructure content for better flow. You can see thumbnail previews of each page, making it easy to arrange them correctly.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The extract images feature is invaluable for users who need to pull graphics, photos, or diagrams from PDF documents. Whether you're creating presentations, building image libraries, or repurposing visual content, this tool extracts all images while maintaining their original quality and resolution.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 text-red-500 mr-3" />
                PDF Security: Protect and Unlock Your Documents
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Document security is paramount in today's digital environment. BlendPDF provides comprehensive security tools including the ability to <strong>protect PDF</strong> files with passwords and <strong>unlock PDF</strong> documents when you have the appropriate credentials. These security features ensure your sensitive documents remain confidential while still being accessible to authorized users.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The <strong>protect PDF</strong> functionality allows you to add password protection to any document, making it inaccessible without the correct credentials. This is essential for confidential business documents, personal records, or any content that requires restricted access. The encryption is applied using industry-standard security protocols.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Conversely, the <strong>unlock PDF</strong> tool helps you access password-protected documents when you have the legitimate right to do so. This is particularly useful when you've forgotten the password to your own documents or when you need to access legacy files with outdated security settings.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                The BlendPDF Advantage: Why Client-Side Processing Matters
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                What truly distinguishes BlendPDF from other <strong>online PDF tools</strong> is our commitment to client-side processing. This means that all PDF operations occur directly within your web browser, using your computer's processing power rather than uploading files to remote servers. This approach offers several critical advantages that make BlendPDF the preferred choice for privacy-conscious users and organizations.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                First and foremost, client-side processing ensures complete privacy and security. Your documents never leave your local machine, eliminating the risk of data breaches, unauthorized access, or accidental exposure of sensitive information. This is particularly important for businesses handling confidential contracts, healthcare organizations managing patient records, or individuals processing personal financial documents.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Additionally, client-side processing delivers superior performance. There's no waiting for file uploads or downloads, no queuing behind other users' requests, and no dependency on server availability. Your PDF operations complete as quickly as your computer can process them, often resulting in near-instantaneous results for most common tasks.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                The approach also eliminates file size restrictions that plague many online services. Since processing happens locally, you're only limited by your device's capabilities rather than arbitrary server-imposed limits. This means you can work with large documents, high-resolution images, and complex layouts without compromise.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Applications and Use Cases
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                BlendPDF serves a diverse range of professional applications across various industries. Legal professionals use our tools to <strong>merge PDF</strong> contracts and exhibits, <strong>split PDF</strong> case files for specific proceedings, and <strong>protect PDF</strong> sensitive legal documents. The ability to process documents locally is particularly valuable in legal contexts where confidentiality is paramount.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Educational institutions and researchers benefit from BlendPDF's comprehensive toolkit for managing academic documents. Teachers can <strong>split PDF</strong> textbooks to share specific chapters, researchers can <strong>merge PDF</strong> papers for literature reviews, and students can <strong>compress PDF</strong> assignments for easier submission. The tools support the collaborative nature of academic work while maintaining document integrity.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Healthcare organizations rely on BlendPDF for managing patient records, research documents, and administrative paperwork. The client-side processing ensures HIPAA compliance by keeping sensitive medical information on local devices rather than transmitting it to external servers. This makes BlendPDF an ideal solution for healthcare professionals who need powerful PDF tools without compromising patient privacy.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Small businesses and entrepreneurs find BlendPDF invaluable for managing invoices, contracts, proposals, and marketing materials. The ability to quickly <strong>merge PDF</strong> invoices for accounting, <strong>compress PDF</strong> proposals for email delivery, and <strong>organize PDF</strong> marketing materials for presentations streamlines business operations without requiring expensive software licenses.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Excellence and Innovation
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                BlendPDF leverages cutting-edge web technologies to deliver desktop-quality PDF processing directly in your browser. Our tools are built using advanced JavaScript libraries and WebAssembly components that provide the computational power necessary for complex PDF operations. This technical foundation ensures reliable, consistent results across different devices and operating systems.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The platform supports all modern web browsers and automatically adapts to your device's capabilities. Whether you're using a high-powered desktop computer or a mobile device, BlendPDF optimizes its performance to deliver the best possible experience. The responsive design ensures that all tools remain fully functional across different screen sizes and input methods.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Continuous innovation drives BlendPDF's development. We regularly update our algorithms to improve processing speed, enhance compatibility with different PDF formats, and add new features based on user feedback. This commitment to improvement ensures that BlendPDF remains at the forefront of online PDF tool technology.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Getting Started with BlendPDF: A User-Friendly Experience
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Using BlendPDF is remarkably straightforward, regardless of your technical expertise. The intuitive interface guides you through each process step-by-step, from file selection to final download. Simply choose your desired tool, upload your PDF files using drag-and-drop or file selection, configure any necessary options, and process your documents with a single click.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The platform provides real-time feedback throughout the processing workflow. You'll see progress indicators for longer operations, preview thumbnails for visual tools like organize PDF, and clear success messages when operations complete. Error handling is robust and user-friendly, providing helpful guidance if any issues arise during processing.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                BlendPDF requires no software installation, account creation, or subscription fees. Simply visit the website and start using any tool immediately. This accessibility makes it perfect for occasional users who need quick PDF solutions as well as power users who require regular document processing capabilities.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                The Future of PDF Management
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                As digital document management continues to evolve, BlendPDF remains committed to providing the most advanced, secure, and user-friendly PDF tools available. Our vision extends beyond simple file manipulation to comprehensive document workflow solutions that empower users to work more efficiently and securely with their PDF documents.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                The combination of powerful functionality, uncompromising security, and exceptional user experience makes BlendPDF the definitive choice for anyone who works with PDF documents. Whether you need to <strong>merge PDF</strong> files for a presentation, <strong>split PDF</strong> documents for distribution, <strong>compress PDF</strong> files for storage, or perform any other PDF operation, BlendPDF provides the tools you need with the security and convenience you deserve.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Experience the difference that truly free, secure, and powerful PDF tools can make in your workflow. Join millions of users who have discovered the BlendPDF advantage and revolutionize how you work with PDF documents today.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};