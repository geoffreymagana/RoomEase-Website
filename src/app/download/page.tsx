'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import SurveyModal from '@/components/survey-modal';
import { ToasterProvider } from '@/components/toaster-provider';
import { 
  Home, 
  Download,
  Smartphone,
  Monitor,
  ArrowLeft,
  CheckCircle,
  Star
} from 'lucide-react';

export default function DownloadPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadOptions = [
    {
      platform: "Windows",
      icon: Monitor,
      description: "Download RoomEase for Windows desktop",
      features: ["Full desktop experience", "Offline mode", "Advanced features"],
      downloadUrl: "#",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      platform: "Android",
      icon: Smartphone,
      description: "Get RoomEase on Google Play Store",
      features: ["Mobile optimized", "Push notifications", "Camera integration"],
      downloadUrl: "#",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      platform: "iOS",
      icon: Smartphone,
      description: "Download from Apple App Store",
      features: ["iOS optimized", "iCloud sync", "Apple Watch support"],
      downloadUrl: "#",
      color: "bg-black",
      hoverColor: "hover:bg-gray-800"
    }
  ];

  const features = [
    "Real-time bill splitting",
    "Chore tracking & reminders",
    "Shopping list management",
    "Secure payment processing",
    "Push notifications",
    "Offline mode support"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                RoomEase
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-slate-600 hover:text-black">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            <Badge 
              className="mb-6 bg-green-100 text-green-700 border border-green-200"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out'
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download RoomEase
            </Badge>
            
            <h1 
              className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Get RoomEase
              <br />
              <span className="text-green-600">on your device</span>
            </h1>
            
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              Choose your platform and start managing your shared living space with ease.
            </p>
          </div>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Choose Your Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Download RoomEase for your preferred platform and start organizing your household.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadOptions.map((option, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${option.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {option.platform}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  {/* Platform-specific content */}
                  {option.platform === "Windows" && (
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48">
                          <path fill="#0077d4" d="M7,6h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1V7	C6,6.448,6.448,6,7,6z"></path>
                          <path fill="#0077d4" d="M25.042,21.958V7c0-0.552,0.448-1,1-1H41c0.552,0,1,0.448,1,1v14.958	c0,0.552-0.448,1-1,1H26.042C25.489,22.958,25.042,22.511,25.042,21.958z"></path>
                          <path fill="#0077d4" d="M7,25h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1V26	C6,25.448,6.448,25,7,25z"></path>
                          <path fill="#0077d4" d="M25,41V26c0-0.552,0.448-1,1-1h15c0.552,0,1,0.448,1,1v15c0,0.552-0.448,1-1,1H26	C25.448,42,25,41.552,25,41z"></path>
                        </svg>
                      </div>
                      <Button size="lg" className={`w-full ${option.color} ${option.hoverColor} text-white`}>
                        <Download className="w-5 h-5 mr-2" />
                        Download for Windows
                      </Button>
                    </div>
                  )}
                  
                  {option.platform === "Android" && (
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48">
                          <linearGradient id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1" x1="18.102" x2="25.297" y1="3.244" y2="34.74" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#35ab4a"></stop><stop offset=".297" stopColor="#31a145"></stop><stop offset=".798" stopColor="#288739"></stop><stop offset="1" stopColor="#237a33"></stop></linearGradient>
                          <path fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)" d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"></path>
                          <linearGradient id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2" x1="19.158" x2="21.194" y1="23.862" y2="66.931" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f14e5d"></stop><stop offset=".499" stopColor="#ea3d4f"></stop><stop offset="1" stopColor="#e12138"></stop></linearGradient>
                          <path fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)" d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"></path>
                          <linearGradient id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3" x1="32.943" x2="36.541" y1="14.899" y2="43.612" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd844"></stop><stop offset=".519" stopColor="#ffc63f"></stop><stop offset="1" stopColor="#ffb03a"></stop></linearGradient>
                          <path fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)" d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"></path>
                          <linearGradient id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4" x1="13.853" x2="15.572" y1="5.901" y2="42.811" gradientUnits="userSpaceOnUse"><stop offset=".003" stopColor="#0090e6"></stop><stop offset="1" stopColor="#0065a0"></stop></linearGradient>
                          <path fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)" d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"></path>
                        </svg>
                      </div>
                      <Button size="lg" className={`w-full ${option.color} ${option.hoverColor} text-white`}>
                        Get on Google Play
                      </Button>
                    </div>
                  )}
                  
                  {option.platform === "iOS" && (
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 48 48">
                          <linearGradient id="OpwYZ9nhL01h2sErtedzua_4PbFeZOKAc61_gr1" x1="24" x2="24" y1="4.617" y2="40.096" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33bef0"></stop><stop offset="1" stopColor="#0a85d9"></stop></linearGradient>
                          <path fill="url(#OpwYZ9nhL01h2sErtedzua_4PbFeZOKAc61_gr1)" d="M33.9,6H14.1C9.626,6,6,9.626,6,14.1v19.8c0,4.473,3.626,8.1,8.1,8.1h19.8	c4.474,0,8.1-3.627,8.1-8.1V14.1C42,9.626,38.374,6,33.9,6z"></path>
                          <path d="M12.3,30.977c-1.378,0-2.5-1.114-2.5-2.484c0-1.37,1.122-2.484,2.5-2.484h3.798l4.869-8.309	l-1.423-2.429c-0.338-0.578-0.431-1.251-0.262-1.897c0.169-0.646,0.58-1.188,1.156-1.524c0.384-0.224,0.82-0.342,1.262-0.342	c0.885,0,1.712,0.474,2.158,1.237l0.007,0.012l0.006-0.011c0.445-0.763,1.272-1.237,2.158-1.237c0.443,0,0.879,0.119,1.263,0.343	c1.19,0.698,1.59,2.233,0.892,3.422l-6.291,10.736h3.328l0.293,0.295c0.222,0.223,0.425,0.476,0.623,0.774l0.197,0.33	c0.489,0.911,0.598,1.918,0.319,2.854l-0.211,0.714H12.3z" opacity=".05"></path>
                          <path d="M12.3,30.477c-1.103,0-2-0.89-2-1.984c0-1.094,0.897-1.984,2-1.984h4.084l5.162-8.809l-1.572-2.682	c-0.27-0.461-0.345-1-0.209-1.518c0.135-0.517,0.463-0.95,0.924-1.219c0.307-0.179,0.656-0.274,1.01-0.274	c0.708,0,1.37,0.379,1.727,0.989l0.438,0.749l0.438-0.748c0.356-0.61,1.018-0.989,1.726-0.989c0.354,0,0.703,0.095,1.01,0.274	c0.952,0.559,1.271,1.787,0.713,2.738L21.02,26.509h3.992l0.146,0.147c0.198,0.199,0.381,0.427,0.56,0.698l0.185,0.31	c0.418,0.781,0.511,1.646,0.27,2.456l-0.106,0.357H12.3z" opacity=".07"></path>
                          <path fill="#fff" d="M25.302,27.63c-0.148-0.224-0.312-0.434-0.498-0.621h-4.656l7.173-12.242	c0.419-0.715,0.179-1.634-0.535-2.053c-0.716-0.419-1.635-0.179-2.052,0.536l-0.87,1.484l-0.87-1.485	c-0.418-0.715-1.337-0.954-2.052-0.536c-0.715,0.418-0.955,1.337-0.536,2.052l1.72,2.935l-5.455,9.309H12.3	c-0.829,0-1.5,0.665-1.5,1.484c0,0.819,0.671,1.484,1.5,1.484h13.394c0.194-0.653,0.141-1.382-0.221-2.058L25.302,27.63z"></path>
                          <path d="M14.5,36.179c-0.443,0-0.879-0.119-1.263-0.344c-0.576-0.338-0.986-0.88-1.155-1.526	c-0.168-0.646-0.075-1.32,0.263-1.896l0.713-1.218l0.44-0.088C13.859,31.036,14.196,31,14.528,31l0.118,0.001	c1.081,0.032,2.06,0.494,2.766,1.3l0.476,0.542l-1.229,2.1C16.211,35.706,15.385,36.179,14.5,36.179z" opacity=".05"></path>
                          <path d="M14.5,35.679c-0.354,0-0.704-0.095-1.01-0.275c-0.46-0.27-0.789-0.704-0.924-1.221	s-0.061-1.056,0.21-1.517l0.6-1.024l0.22-0.044c0.329-0.066,0.634-0.098,0.932-0.098l0.112,0.001	c0.933,0.028,1.783,0.429,2.396,1.129l0.238,0.271l-1.047,1.789C15.87,35.3,15.208,35.679,14.5,35.679z" opacity=".07"></path>
                          <path fill="#fff" d="M14.626,32.002c-0.317-0.009-0.628,0.026-0.932,0.087l-0.487,0.831	c-0.419,0.715-0.179,1.634,0.536,2.053c0.238,0.14,0.5,0.206,0.757,0.206c0.515,0,1.017-0.266,1.295-0.741l0.865-1.477	c-0.487-0.556-1.19-0.934-2.03-0.959H14.626z"></path>
                          <path d="M33.229,36.179c-0.885,0-1.712-0.474-2.158-1.236l-6.027-10.285l-0.017-0.052	c-0.417-1.289-0.335-2.618,0.214-3.793l1.669-2.858l4.72,8.055h4.07c1.378,0,2.5,1.114,2.5,2.484c0,1.37-1.122,2.484-2.5,2.484	h-1.159l0.842,1.437c0.338,0.576,0.431,1.249,0.263,1.896s-0.579,1.188-1.155,1.526C34.109,36.06,33.673,36.179,33.229,36.179z" opacity=".05"></path>
                          <path d="M33.229,35.679c-0.708,0-1.37-0.378-1.727-0.988l-6-10.238l-0.017-0.052	c-0.361-1.118-0.288-2.317,0.208-3.376l1.216-2.081l4.433,7.565H35.7c1.103,0,2,0.89,2,1.984c0,1.094-0.897,1.984-2,1.984h-2.031	l1.283,2.19c0.271,0.461,0.345,1,0.21,1.517s-0.463,0.951-0.924,1.221C33.933,35.584,33.584,35.679,33.229,35.679z" opacity=".07"></path>
                          <path fill="#fff" d="M35.7,27.009h-4.643l-4.147-7.076l-0.763,1.303c-0.444,0.95-0.504,2.024-0.185,3.011l5.972,10.191	c0.279,0.476,0.78,0.741,1.295,0.741c0.257,0,0.519-0.066,0.757-0.206c0.715-0.419,0.954-1.338,0.535-2.053l-1.725-2.943H35.7	c0.829,0,1.5-0.665,1.5-1.484C37.2,27.674,36.529,27.009,35.7,27.009z"></path>
                        </svg>
                      </div>
                      <Button size="lg" className={`w-full ${option.color} ${option.hoverColor} text-white`}>
                        Get on Apple Store
                      </Button>
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-sm text-slate-600">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose RoomEase?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed specifically for shared living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of households already using RoomEase to create harmony in shared living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Download Now
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={() => setShowSurveyModal(true)}
            >
              Take Our Survey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <ToasterProvider />
      
      {/* Survey Modal */}
      <SurveyModal 
        isOpen={showSurveyModal}
        onClose={() => setShowSurveyModal(false)}
      />
    </div>
  );
} 