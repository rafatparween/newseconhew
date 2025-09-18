// "use client"

// import React from "react";
// import { FaTools, FaBookReader, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

// const AboutPage = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
//           About Hewlett Printers Solution

//         </h1>
//         <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Your trusted guide for solving printer problems with clear, step-by-step solutions.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-12 mb-16">
//         <div>
//           <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
//             <p className="text-gray-700 mb-6">
//               Hewlett Printers Solution
//  is an independent platform dedicated to helping users resolve everyday printer issues through easy-to-understand troubleshooting guides and how-to articles.
//             </p>
//             <p className="text-gray-700">
//               We provide clear, step-by-step information for all major printer brands, including HP, Canon, Epson, Brother, and more.
//             </p>
//           </div>
//         </div>
        
//         <div>
//           <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-semibold text-blue-800 mb-4">What We Offer</h2>
//             <p className="text-gray-700 mb-6">
//               Whether you're facing connectivity problems, ink cartridge errors, setup challenges, or offline issues, our articles aim to help you identify the cause and apply effective solutions.
//             </p>
//             <p className="text-gray-700">
//               We focus on common printer problems and provide solutions that work for most users.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
//         <div className="p-8 md:p-12">
//           <h2 className="text-2xl font-semibold text-blue-800 mb-6">Important Note</h2>
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
//             <p className="text-yellow-700">
//               We do not offer live technical support, remote repair services, or hardware sales. All content is purely for educational and informational purposes to help users troubleshoot on their own.
//             </p>
//           </div>
//           <p className="text-gray-700">
//             Our goal is to empower you with knowledge so you can solve printer issues confidently without needing to wait for professional support.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaTools />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Practical Solutions</h3>
//           <p className="text-gray-600">
//             Step-by-step guides for real-world printer problems
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaBookReader />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Easy to Follow</h3>
//           <p className="text-gray-600">
//             Clear instructions anyone can understand
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaShieldAlt />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Safe Methods</h3>
//           <p className="text-gray-600">
//             Tested solutions that won't harm your device
//           </p>
//         </div>
        
//         <div className="bg-white p-6 rounded-lg shadow-sm text-center">
//           <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//             <FaHandsHelping />
//           </div>
//           <h3 className="text-xl font-semibold mb-2">Brand Coverage</h3>
//           <p className="text-gray-600">
//             Help for all major printer manufacturers
//           </p>
//         </div>
//       </div>

//       <div className="bg-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help With Your Printer?</h2>
//         <p className="text-xl mb-6 max-w-3xl mx-auto">
//           Browse our collection of troubleshooting guides and how-to articles to find the solution you need.
//         </p>
//         <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition duration-300">
//           Explore Articles
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;




import Head from 'next/head';
import Link from 'next/link';
import { 
  Printer, 
  Users, 
  Target, 
  BookOpen, 
  Mail, 
  MapPin, 
  Phone, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <Head>
        <title>About Us | Hewlett Printers Solution</title>
        <meta name="description" content="Learn about Hewlett Printers Solution and our mission to simplify printer troubleshooting" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-700 font-bold text-xl">
            <Printer className="mr-2" size={28} />
            Hewlett Printers Solution
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/about" className="text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission to simplify printer troubleshooting and support
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mb-20">
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
              <div className="flex items-start mb-8">
                <Users className="text-blue-600 mr-4 mt-1" size={28} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
                  <p className="text-gray-700 mb-6">
                    At Hewlett Printers Solution, we are dedicated to helping individuals and businesses keep their printers running smoothly. We provide informational content, setup guides, and troubleshooting steps for a wide range of printer models.
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <Target className="text-blue-600 mr-4 mt-1" size={28} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                  <p className="text-gray-700">
                    Our goal is simple: to make printer setup and problem-solving easy, safe, and stress-free. Whether you are installing a new device, fixing a common error, or learning how to maintain your printer, our content is designed to provide clear, step-by-step instructions.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                  <Shield className="mr-2" size={20} />
                  Important Note
                </h3>
                <p className="text-blue-700">
                  We are not a manufacturer or authorized service center. Instead, we focus on providing reliable content and resources to help users solve common printer issues on their own.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Our Expertise</h2>
              <p className="mb-6">
                With years of experience in IT and technical content, our team ensures that the guides are accurate, up to date, and easy to understand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-1">100+</div>
                  <div className="text-blue-100">Printer Models Covered</div>
                </div>
                <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                  <div className="text-3xl font-bold mb-1">5+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Mail className="mr-2 text-blue-600" size={24} />
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-gray-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-700">Location</h3>
                    <p className="text-gray-600">Los Angeles, California United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gray-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">support@hewlettprintersolution.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gray-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-700">Phone</h3>
                    <p className="text-gray-600">+(1) 888-291-3869</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
              >
                Contact Us
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <BookOpen className="mr-2 text-blue-600" size={24} />
                Helpful Resources
              </h2>
              
              <div className="space-y-4">
                <Link href="/troubleshooting" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle size={18} className="mr-3" />
                  Troubleshooting Guides
                </Link>
                
                <Link href="/setup" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle size={18} className="mr-3" />
                  Printer Setup Tutorials
                </Link>
                
                <Link href="/maintenance" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle size={18} className="mr-3" />
                  Maintenance Tips
                </Link>
                
                <Link href="/drivers" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle size={18} className="mr-3" />
                  Driver Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Terms of Service</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg font-medium text-gray-800 mb-6">
              Welcome to Hewlett Printers Solution. By accessing or using our website, you agree to the following terms:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  1. Informational Purpose Only
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Our website provides guides, tutorials, and informational content related to printer setup and troubleshooting.</li>
                  <li>We do not sell hardware, software, or direct technical support services.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  2. No Official Affiliation
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We are an independent content provider and are not affiliated with any printer brand, manufacturer, or third-party company.</li>
                  <li>All brand names and logos mentioned are the property of their respective owners and are used for educational reference purposes only.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  3. Use of Content
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The information provided is intended for personal and educational use.</li>
                  <li>We strive to ensure accuracy but do not guarantee that every solution will work for every device or situation.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  4. Limitation of Liability
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hewlett Printers Solution will not be held responsible for any loss, damage, or technical issues that may occur from following the guides.</li>
                  <li>Users should proceed carefully and consult the official manufacturer's support if necessary.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  5. User Responsibility
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>By using this site, you acknowledge that you are responsible for applying the information provided at your own discretion.</li>
                  <li>For hardware defects or warranty issues, please contact the official brand support directly.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  6. Changes to Terms
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We may update these Terms of Service at any time. Continued use of our site indicates acceptance of the updated terms.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Printer className="mr-2" size={24} />
                <span className="font-semibold text-xl">Hewlett Printers Solution</span>
              </div>
              <p className="text-gray-400">
                Making printer troubleshooting simple and accessible for everyone.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/troubleshooting" className="text-gray-400 hover:text-white transition-colors">Troubleshooting Guides</Link></li>
                <li><Link href="/setup" className="text-gray-400 hover:text-white transition-colors">Setup Tutorials</Link></li>
                <li><Link href="/drivers" className="text-gray-400 hover:text-white transition-colors">Driver Downloads</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1" />
                  <span>San Francisco, California</span>
                </li>
                <li className="flex items-start">
                  <Mail size={18} className="mr-2 mt-1" />
                  <span>support@hewlettprinters.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="mr-2 mt-1" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hewlett Printers Solution. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
    <Footer/>
    </>
  );
}