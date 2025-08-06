'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Users, 
  Heart, 
  Zap, 
  Shield, 
  Target, 
  Award,
  ArrowRight,
  Star,
  Globe,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Home
} from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Harmony First",
      description: "We believe shared living should bring people together, not drive them apart."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Every feature is designed to build trust and maintain clear communication."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We use AI and modern technology to solve age-old roommate problems."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building a community of people who believe in better shared living."
    }
  ];

  const team = [
    {
      name: "Geoffrey Magana",
      role: "CEO & Co-founder",
      bio: "Former roommate who experienced firsthand the pain of managing shared expenses and chores.",
      avatar: "👨‍💼"
    },
    {
      name: "Martin Thairu",
      role: "CTO & Co-founder",
      bio: "AI engineer passionate about using technology to solve real human problems.",
      avatar: "👩‍💻"
    },
    {
      name: "Abigael Kimani",
      role: "Head of Product",
      bio: "Product designer focused on creating intuitive experiences for complex social dynamics.",
      avatar: "👨‍🎨"
    },
    {
      name: "Sandra Njeri",
      role: "Head of Growth",
      bio: "Growth marketer who believes in building products that people actually love to use.",
      avatar: "👩‍💼"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Households" },
    { number: "50,000+", label: "Roommates Connected" },
    { number: "1M+", label: "Chores Completed" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-black">
                  RoomEase
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/#features" className="text-slate-600 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-black transition-colors">
                Pricing
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-black border border-slate-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/download">
                <Button className="bg-black hover:bg-slate-800 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge 
            className="mb-6 bg-slate-100 text-slate-700 border border-slate-200"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.6s ease-out'
            }}
          >
            <Heart className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-black mb-6"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            Building
            <span className="text-slate-600"> Better</span>
            <br />
            Roommate Relationships
          </h1>
          
          <p 
            className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            RoomEase was born from a simple observation: shared living doesn't have to be complicated. 
            We're on a mission to make household management effortless, fair, and even enjoyable.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-4xl font-bold text-black mb-6"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s ease-out'
                }}
              >
                Our Mission
              </h2>
              <p 
                className="text-lg text-slate-600 mb-6 leading-relaxed"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                We believe that shared living should be a source of joy, not stress. 
                Our mission is to eliminate the friction that comes with managing a household 
                and replace it with tools that bring people together.
              </p>
              <p 
                className="text-lg text-slate-600 mb-8 leading-relaxed"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s ease-out 0.4s'
                }}
              >
                By combining AI-powered insights with thoughtful design, we're creating 
                the first platform that truly understands the dynamics of shared living 
                and helps roommates build stronger relationships.
              </p>
              <div 
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isVisible ? 1 : 0,
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                <Link href="/careers">
                  <Button size="lg" className="bg-black hover:bg-slate-800 text-white">
                    Join Our Mission
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div 
              className="relative"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              <div className="bg-black rounded-2xl p-8 text-white">
                <div className="text-center">
                  <Target className="w-16 h-16 mx-auto mb-4 text-slate-300" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-slate-300 leading-relaxed">
                    A world where every shared living space is harmonious, 
                    where roommates become friends, and where household 
                    management is effortless and fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The passionate people behind RoomEase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to join the movement?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Be part of the revolution in shared living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent">
                Get in Touch
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