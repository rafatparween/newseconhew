

// 'use client';

// const Disclaimer = () => {
//     return (
//         <div className="bg-white text-gray-800 px-4 md:px-20 py-10 md:py-20">
//             <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-blue-900">Disclaimer</h1>

//             {/* New Disclaimer Text */}
//             <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-900 p-6 mb-10 rounded-md">
//                 <p className="mb-4">
//                     <strong>Hewlett Printers Solution

// </strong> is an independent informational website and is not affiliated with or endorsed by any printer manufacturers, including but not limited to HP (Hewlett-Packard), Epson, Canon, Brother, or Lexmark.
//                 </p>
//                 <p className="mb-4">
//                     All brand names, trademarks, logos, and product images are the property of their respective owners and are used strictly for informational and reference purposes only.
//                 </p>
//                 <p>
//                     The troubleshooting guides and content provided on this site are based on general user experiences and known issues. While we strive for accuracy, we do not guarantee that the solutions will resolve your specific problem. For brand-authorized assistance, we recommend contacting the official support channels of your printer manufacturer.
//                 </p>
//             </div>

//             {/* Existing Content */}
//             <div className="space-y-6 text-lg leading-relaxed">
//                 <p>
//                     The information provided by <strong>Hewlett Printers Solution
// </strong> ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
//                 </p>
//                 <p>
//                     Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
//                 </p>
//                 <p>
//                     The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
//                 </p>
//                 <p>
//                     We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Disclaimer;



import Head from 'next/head';
import Link from 'next/link';
import { Printer, Shield, AlertTriangle, FileText, Mail, ArrowLeft } from 'lucide-react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Disclaimer() {
  return (
    <>
    
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Disclaimer | Hewlett Printers Solution</title>
        <meta name="description" content="Disclaimer for Hewlett Printers Solution - Read our terms of use and limitations of liability" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-700 font-bold text-xl">
            <Printer className="mr-2" size={28} />
            Hewlett Printers Solution
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
            <div className="flex items-center">
              <Shield size={40} className="mr-4" />
              <div>
                <h1 className="text-3xl font-bold">Disclaimer</h1>
                <p className="text-blue-100 mt-2">Important information about our content and services</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div className="prose prose-lg text-gray-700 max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <p className="text-blue-800 font-medium">
                  The information provided on Hewlett Printers Solution is for educational and informational purposes only. 
                  We create general troubleshooting guides to help users fix common printer issues such as connectivity errors, 
                  paper jams, and driver problems.
                </p>
              </div>
              
              <div className="flex items-start mb-6">
                <AlertTriangle className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <p>
                  We are an independent information provider and are not affiliated, associated, authorized, endorsed by, 
                  or in any way officially connected with HP, Canon, Epson, Brother, or any other printer manufacturer. 
                  All product names, logos, and brands are the property of their respective owners and are used here only 
                  for identification purposes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p>
                  While we make every effort to provide accurate and up-to-date information, we do not guarantee that all 
                  troubleshooting steps will resolve every issue. Printer problems can vary depending on the device, 
                  operating system, and environment. For complex issues or warranty-related services, we recommend contacting 
                  your printer manufacturer's official support.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-8">
                <p className="font-medium text-red-800">
                  By using this website, you agree that Hewlett Printers Solution is not responsible for any direct or indirect loss, 
                  damage, or inconvenience caused by following the troubleshooting steps provided here.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText size={28} className="mr-3 text-blue-600" />
                Additional Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-lg text-blue-800 mb-3">Professional Advice</h3>
                  <p className="text-gray-700">
                    Our content is created for general guidance only. For critical printing systems, always consult with certified technicians.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-lg text-purple-800 mb-3">External Links</h3>
                  <p className="text-gray-700">
                    We may link to external sites but don't endorse their content. Browse at your own discretion.
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-lg text-green-800 mb-3">Content Updates</h3>
                  <p className="text-gray-700">
                    Information may be updated without notice. While we strive for accuracy, we can't guarantee all content is current.
                  </p>
                </div>
                
                <div className="bg-amber-50 p-5 rounded-xl">
                  <h3 className="font-semibold text-lg text-amber-800 mb-3">User Responsibility</h3>
                  <p className="text-gray-700">
                    You assume all risk when using our guides. Always back up data before attempting troubleshooting.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Box */}
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white">
              <div className="flex items-start">
                <Mail size={24} className="mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Questions about our disclaimer?</h3>
                  <p className="mb-3">Reach out to our legal team for clarification or concerns.</p>
                  <a href="mailto:legal@hewlettprintersolution.com" className="inline-block bg-white text-blue-700 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <div className="flex space-x-6">
                <Link href="/about" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  About Us
                </Link>
                <Link href="/privacy" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      {/* <footer className="bg-gray-800 text-white mt-16 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Printer className="mr-2" size={24} />
              <span className="font-semibold text-xl">Hewlett Printers Solution</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hewlett Printers Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
    <Footer/>
    </>
  );
}