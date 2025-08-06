'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Home, 
  Shield, 
  Lock, 
  Eye, 
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Calendar
} from 'lucide-react';

export default function PrivacyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your personal and financial information is protected with enterprise-grade encryption."
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "All data is encrypted at rest and in transit using industry-standard protocols."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect and how we use it to improve your experience."
    },
    {
      icon: CheckCircle,
      title: "Your Control",
      description: "You have full control over your data and can delete it at any time."
    }
  ];

  const dataCollection = [
    {
      category: "Account Information",
      items: ["Name", "Email address", "Phone number", "Profile picture"]
    },
    {
      category: "Household Data",
      items: ["Household members", "Shared expenses", "Chore assignments", "Payment history"]
    },
    {
      category: "Usage Analytics",
      items: ["App usage patterns", "Feature interactions", "Performance metrics", "Error reports"]
    },
    {
      category: "Technical Data",
      items: ["Device information", "IP address", "Browser type", "App version"]
    }
  ];

  const dataUsage = [
    "Provide and maintain our services",
    "Process payments and transactions",
    "Send important notifications",
    "Improve our products and features",
    "Provide customer support",
    "Ensure security and prevent fraud",
    "Comply with legal obligations"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
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
              className="mb-6 bg-blue-100 text-blue-700 border border-blue-200"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out'
              }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            
            <h1 
              className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Privacy Policy
            </h1>
            
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              We take your privacy seriously. Learn how we protect your data and maintain your trust.
            </p>

            <div 
              className="flex items-center justify-center space-x-4 text-sm text-slate-500"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: March 15, 2025
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Version 2.1
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to protecting your privacy and being transparent about our data practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => (
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
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What Data We Collect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We collect only the data necessary to provide you with the best possible experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataCollection.map((category, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              How We Use Your Data
            </h2>
            <p className="text-xl text-slate-600">
              We use your data responsibly to provide and improve our services.
            </p>
          </div>
          
          <div className="space-y-4">
            {dataUsage.map((usage, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-slate-700">{usage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Data Protection & Security
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                We implement industry-standard security measures to protect your data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">End-to-end encryption for all data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">Regular security audits and penetration testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">GDPR and CCPA compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">SOC 2 Type II certification</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Shield className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Your Data is Safe</h3>
                    <p className="text-blue-100 mb-6">
                      We never sell your personal information to third parties
                    </p>
                    <Badge className="bg-white text-blue-600 border-0">
                      <Lock className="w-4 h-4 mr-2" />
                      Protected
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're here to help with any privacy-related questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="mailto:privacy@roomease.com">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Email Privacy Team
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