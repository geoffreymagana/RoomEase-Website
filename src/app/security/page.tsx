'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Database, 
  CheckCircle,
  ArrowRight,
  Zap,
  Users,
  Globe,
  Home
} from 'lucide-react';

export default function SecurityPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All your data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure login processes protect your account."
    },
    {
      icon: Eye,
      title: "Privacy Controls",
      description: "Granular privacy settings let you control who sees what information."
    },
    {
      icon: Key,
      title: "Access Management",
      description: "Role-based permissions ensure only authorized users can access sensitive data."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "GDPR and CCPA compliant data handling with regular security audits."
    },
    {
      icon: Users,
      title: "Secure Sharing",
      description: "Safe sharing of financial information with roommates using encrypted channels."
    }
  ];

  const complianceItems = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "CCPA Compliant",
    "Regular Security Audits",
    "Penetration Testing",
    "Data Encryption at Rest"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                RoomEase
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="text-slate-600 hover:text-black">
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
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-Grade Security
            </Badge>
            
            <h1 
              className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Your data is
              <br />
              <span className="text-green-600">protected</span>
            </h1>
            
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              We take security seriously. Your financial data, personal information, and household details are protected with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Security Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Multiple layers of protection to keep your data safe and secure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We meet the highest standards for data protection and privacy compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {complianceItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s ease-out ${index * 0.1}s`
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-green-600 text-white p-8">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Shield className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">SOC 2 Type II</h3>
                    <p className="text-green-100 mb-6">
                      Certified for security, availability, and confidentiality
                    </p>
                    <Badge className="bg-white text-green-600 border-0">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Certified
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
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
            Join thousands of households who trust RoomEase with their data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 