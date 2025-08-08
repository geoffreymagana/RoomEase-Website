'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { ToasterProvider } from '@/components/toaster-provider';
import SurveyModal from '@/components/survey-modal';
import { 
  Home, 
  Users, 
  CreditCard, 
  CheckCircle, 
  ShoppingCart, 
  MessageSquare,
  Star,
  ArrowRight,
  Play,
  ChevronRight,
  Zap,
  Shield,
  Heart,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Home,
      title: "Smart Dashboard",
      description: "Get a personalized overview of your household at a glance"
    },
    {
      icon: Users,
      title: "Roommate Management",
      description: "Invite roommates with unique codes and manage your household"
    },
    {
      icon: CreditCard,
      title: "Bill Splitting",
      description: "Split bills flexibly with multiple payment options"
    },
    {
      icon: CheckCircle,
      title: "Chore Tracking",
      description: "Assign, track, and validate chores with trust scoring"
    },
    {
      icon: ShoppingCart,
      title: "Shopping Lists",
      description: "Collaborative shopping with receipt tracking"
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Stay connected with your roommates with end-to-end encrypted messaging"
    }
  ];

  const testimonials = [
    {
      name: "Sandra Njeri",
      role: "Student",
      content: "RoomEase has completely transformed how we manage our apartment. No more awkward money conversations!",
      rating: 5
    },
    {
      name: "Martin Thairu",
      role: "Professional",
      content: "The chore tracking feature is brilliant. Everyone knows what they need to do and when.",
      rating: 5
    },
    {
      name: "Abigael Kimani",
      role: "Graduate Student",
      content: "Finally, a roommate app that actually works! The bill splitting is so intuitive.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="currentColor" className="text-slate-300"/>
            </pattern>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-slate-200"/>
            </pattern>
            <pattern id="hexagons" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 15 0 L 30 8.66 L 30 21.65 L 15 30 L 0 21.65 L 0 8.66 Z" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-slate-100"/>
            </pattern>
            <pattern id="waves" width="40" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 Q 10 5 20 10 Q 30 15 40 10" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-slate-200"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)"/>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"/>
          <rect width="100%" height="100%" fill="url(#hexagons)"/>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                RoomEase
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-slate-600 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="/#testimonials" className="text-slate-600 hover:text-black transition-colors">
                Testimonials
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-black transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-slate-600 hover:text-black border border-slate-300"
                asChild
              >
                <Link href="/login">
                  Sign In
                </Link>
              </Button>
              <Button 
                className="bg-black hover:bg-slate-800 text-white"
                asChild
              >
                <Link href="/download">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="text-slate-600 hover:text-black transition-colors py-2">
                  Home
                </Link>
                <Link href="/#features" className="text-slate-600 hover:text-black transition-colors py-2">
                  Features
                </Link>
                <Link href="/#testimonials" className="text-slate-600 hover:text-black transition-colors py-2">
                  Testimonials
                </Link>
                <Link href="/pricing" className="text-slate-600 hover:text-black transition-colors py-2">
                  Pricing
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-black transition-colors py-2">
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-slate-600 hover:text-black border border-slate-300"
                    asChild
                  >
                    <Link href="/login">
                      Sign In
                    </Link>
                  </Button>
                  <Button 
                    className="w-full justify-center bg-black hover:bg-slate-800 text-white"
                    asChild
                  >
                    <Link href="/download">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative z-10">
            <Badge 
              className="mb-6 bg-slate-100 text-slate-700 border border-slate-200"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out'
              }}
            >
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Household Management
            </Badge>
            
            <h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold text-black mb-6 leading-tight px-4"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Simplify shared living
              <br />
              <span className="text-slate-600">with RoomEase</span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              Manage bills, chores, and roommates effortlessly. <br className="hidden sm:block" />
              No more sticky notes everywhere.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4 w-full sm:w-auto"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <Button 
                size="lg" 
                className="bg-black hover:bg-slate-800 text-white text-lg px-8 py-4"
                onClick={() => setShowSurveyModal(true)}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div 
              className="flex flex-row flex-wrap justify-center gap-8 text-sm text-slate-500"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.8s'
              }}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Loved by 10k+ households</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements - Better Positioned */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* Left Column - Top to Bottom */}
          
          {/* Sticky Note 1 - Top Left */}
          <div 
            className="absolute top-24 left-8 transform rotate-12"
            style={{
              transform: isVisible ? 'translateY(0) rotate(12deg)' : 'translateY(50px) rotate(12deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1s'
            }}
          >
            <div className="bg-yellow-200 p-4 shadow-lg border border-yellow-300 relative w-44 h-44" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">📌</div>
              <p className="text-sm font-medium text-yellow-800 font-architects-daughter italic mt-4">"Rent due tomorrow! Split Ksh 20,000"</p>
            </div>
          </div>

          jsx{/* Integrations Card - Bottom Center */}
<div 
 className="absolute bottom-0.5 left-1/4 transform -translate-x-1/4 rotate-6"
 style={{
   transform: isVisible ? 'translateY(0) translateX(-50%) rotate(6deg)' : 'translateY(50px) translateX(-50%) rotate(6deg)',
   opacity: isVisible ? 1 : 0,
   transition: 'all 0.8s ease-out 2s'
 }}
          >
            <Card className="w-52 shadow-xl border-0 bg-white">
              <CardContent className="p-4">
                <h3 className="font-semibold text-black mb-3 text-sm">Integrations</h3>
                <div className="relative h-20">
                  <div 
                    className="absolute w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center transform rotate-12"
                    style={{ top: '5px', left: '10px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-8 h-8">
                      <rect width="22" height="22" x="13" y="13" fill="#fff"></rect><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"></polygon><path fill="#1e88e5" d="M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"></path><polygon fill="#fbc02d" points="34,42 14,42 13,38 14,34 34,34 35,38"></polygon><polygon fill="#4caf50" points="38,35 42,34 42,14 38,13 34,14 34,34"></polygon><path fill="#1e88e5" d="M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"></path><polygon fill="#e53935" points="34,34 34,42 42,34"></polygon><path fill="#1565c0" d="M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"></path><path fill="#1565c0" d="M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z"></path>
                    </svg>
                  </div>
                  <div 
                    className="absolute w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center transform -rotate-6"
                    style={{ top: '-12px', right: '20px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-8 h-8">
                      <path fill="#aed580" d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z"></path><path fill="#aed580" d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z"></path><path fill="#fff" fillRule="evenodd" d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z" clipRule="evenodd"></path><path fill="#9b2310" fillRule="evenodd" d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z" clipRule="evenodd"></path><path fill="#e60023" fillRule="evenodd" d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div 
                    className="absolute w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center transform rotate-45"
                    style={{ bottom: '5px', left: '25px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-8 h-8">
                      <path fill="#01579b" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"></path><polygon fill="#40c4ff" points="33.01,14 24.09,35 21.91,35 29.99,16 19.59,16 21.97,19.85 18.81,23 24.6,23 23.7,25 13.99,25 19.43,19.55 16.01,14"></polygon>
                    </svg>
                  </div>
                  <div 
                    className="absolute w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center transform -rotate-20"
                    style={{ bottom: '10px', right: '15px' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" className="w-8 h-8">
                      <path d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 11.667969 15 L 13.023438 15 L 13.023438 20.464844 C 13.023438 21.896844 13.944125 22.832031 15.203125 22.832031 C 16.443125 22.832031 17.40625 21.880078 17.40625 20.455078 L 17.40625 15 L 18.736328 15 L 18.736328 23.888672 L 17.421875 23.888672 L 17.421875 23.041016 C 16.800875 23.683016 15.942781 24.042109 15.050781 24.037109 C 13.138781 24.037109 11.667969 22.643297 11.667969 20.529297 L 11.667969 15 z M 19.933594 15 L 21.216797 15 L 21.216797 18.189453 C 21.826797 17.572453 22.656437 17.227562 23.523438 17.226562 L 23.527344 17.226562 C 23.575344 17.225562 23.624875 17.225562 23.671875 17.226562 C 25.553875 17.266562 27.047813 18.823078 27.007812 20.705078 C 26.968813 22.587078 25.409344 24.081016 23.527344 24.041016 C 22.653344 24.035016 21.816172 23.682547 21.201172 23.060547 L 21.201172 23.888672 L 19.933594 23.888672 L 19.933594 15 z M 30.929688 17.226562 C 32.802688 17.226562 34.1875 18.681953 34.1875 20.626953 L 34.189453 21.046875 L 28.896484 21.046875 C 29.054484 22.115875 29.968828 22.908062 31.048828 22.914062 C 31.794828 22.925062 32.497641 22.570844 32.931641 21.964844 L 33.863281 22.648438 C 33.207281 23.542437 32.158781 24.062016 31.050781 24.041016 C 29.093781 24.041016 27.59375 22.570953 27.59375 20.626953 L 27.59375 20.607422 C 27.58175 18.753422 29.074687 17.238563 30.929688 17.226562 z M 37.871094 17.316406 L 38.332031 17.316406 L 38.332031 18.511719 L 37.796875 18.513672 C 36.955875 18.513672 36.357422 19.171641 36.357422 20.181641 L 36.357422 23.888672 L 35.074219 23.888672 L 35.074219 17.363281 L 36.34375 17.363281 L 36.34375 18.160156 C 36.66275 17.622156 37.246094 17.299406 37.871094 17.316406 z M 30.912109 18.359375 C 29.948109 18.359375 29.152828 19.031344 28.923828 20.027344 L 32.886719 20.027344 C 32.671719 19.031344 31.877109 18.359375 30.912109 18.359375 z M 23.410156 18.373047 C 22.162156 18.379047 21.157109 19.396531 21.162109 20.644531 C 21.168109 21.892531 22.183641 22.897578 23.431641 22.892578 L 23.431641 22.886719 L 23.441406 22.886719 C 24.680406 22.885719 25.683641 21.879625 25.681641 20.640625 L 25.681641 20.621094 C 25.676641 19.375094 24.658156 18.368047 23.410156 18.373047 z M 11.806641 26.111328 L 18.037109 26.111328 L 18.037109 27.636719 L 13.490234 27.636719 L 13.490234 29.802734 L 17.910156 29.802734 L 17.910156 31.275391 L 13.490234 31.275391 L 13.490234 33.476562 L 18.037109 33.476562 L 18.037109 35 L 11.806641 35 L 11.806641 26.111328 z M 27.890625 26.572266 L 29.548828 26.572266 L 29.548828 28.433594 L 31.40625 28.433594 L 31.40625 29.916016 L 29.548828 29.916016 L 29.548828 33.003906 C 29.548828 33.352906 29.788969 33.519531 30.167969 33.519531 L 31.40625 33.519531 L 31.408203 35.003906 L 29.623047 35.003906 C 28.504047 35.003906 27.884766 34.307688 27.884766 33.429688 L 27.884766 29.917969 L 26.630859 29.917969 L 26.630859 28.433594 L 27.890625 28.433594 L 27.890625 26.572266 z M 34.949219 28.261719 C 36.943219 28.261719 37.927578 29.165203 38.017578 30.533203 L 36.369141 30.533203 C 36.217141 29.806203 35.635609 29.595703 34.849609 29.595703 C 34.123609 29.595703 33.730469 29.836469 33.730469 30.230469 C 33.730469 30.533469 33.986734 30.687844 34.802734 30.839844 L 36.210938 31.126953 C 37.540937 31.415953 38.175781 32.081609 38.175781 32.974609 C 38.173781 34.226609 37.101266 35.138672 35.197266 35.138672 C 33.140266 35.138672 32.127719 34.231234 31.886719 32.865234 L 33.542969 32.865234 C 33.753969 33.592234 34.299 33.802734 35.25 33.802734 C 36.008 33.802734 36.476562 33.545719 36.476562 33.136719 C 36.476562 32.879719 36.309453 32.713797 35.689453 32.591797 L 34.117188 32.228516 C 32.680188 31.926516 32.015625 31.305562 32.015625 30.351562 C 32.015625 28.972562 33.226219 28.261719 34.949219 28.261719 z M 22.175781 28.265625 C 22.939781 28.263625 23.679672 28.532391 24.263672 29.025391 L 24.263672 28.433594 L 25.914062 28.433594 L 25.914062 35 L 24.261719 35 L 24.261719 34.378906 C 23.678719 34.871906 22.939781 35.141672 22.175781 35.138672 C 22.127781 35.139672 22.07825 35.139672 22.03125 35.138672 C 20.13325 35.098672 18.627969 33.526906 18.667969 31.628906 C 18.707969 29.730906 20.277781 28.225625 22.175781 28.265625 z M 22.267578 29.705078 C 21.163578 29.717078 20.278016 30.623563 20.291016 31.726562 C 20.303016 32.830562 21.2095 33.716125 22.3125 33.703125 L 22.308594 33.699219 L 22.330078 33.699219 C 23.421078 33.689219 24.297109 32.796078 24.287109 31.705078 L 24.287109 31.681641 C 24.275109 30.576641 23.370578 29.691078 22.267578 29.705078 z"></path>
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Note 2 - Bottom Left */}
          <div 
            className="absolute bottom-32 left-16 transform -rotate-3"
            style={{
              transform: isVisible ? 'translateY(0) rotate(-3deg)' : 'translateY(50px) rotate(-3deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1.4s'
            }}
          >
            <div className="bg-pink-200 p-4 shadow-lg border border-pink-300 relative w-44 h-44" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">📌</div>
              <p className="text-sm font-medium text-pink-800 font-architects-daughter italic mt-4">"Buy groceries: Milk, Bread, Eggs"</p>
            </div>
          </div>

          {/* Right Column - Top to Bottom */}
          
          {/* Today's Chores Card - Top Right */}
          <div 
            className="absolute top-28 right-8 z-10"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1.6s'
            }}
          >
            <Card className="w-60 shadow-xl border-0 bg-white">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-black text-sm">Today's Chores</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Clean kitchen</span>
                    <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Take out trash</span>
                    <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sticky Note 3 - Mid Right */}
          <div 
            className="absolute top-72 right-12 transform -rotate-6"
            style={{
              transform: isVisible ? 'translateY(0) rotate(-6deg)' : 'translateY(50px) rotate(-6deg)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1.2s'
            }}
          >
            <div className="bg-green-200 p-4 shadow-lg border border-green-300 relative w-44 h-44" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl">📌</div>
              <p className="text-sm font-medium text-green-800 font-architects-daughter italic mt-4">"Movie night Friday! Who's bringing snacks?"</p>
            </div>
          </div>

          {/* Bill Due Reminder - Bottom Right */}
          <div 
            className="absolute bottom-28 right-16 z-10"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1.8s'
            }}
          >
            <Card className="w-60 shadow-xl border-0 bg-white">
              <CardContent className="p-4">
                <h3 className="font-semibold text-black mb-3 text-sm">Bill Due</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <div>
                      <p className="text-sm font-medium text-black">Electricity</p>
                      <p className="text-xs text-slate-500">Due in 2 days</p>
                      <p className="text-xs text-slate-500">Ksh. 1,250 per person</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile-friendly floating elements */}
        <div className="absolute inset-0 pointer-events-none hidden">
          {/* Single floating card for smaller screens */}
          <div 
            className="absolute top-32 right-4 z-10"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 1.6s'
            }}
          >
            <Card className="w-48 shadow-xl border-0 bg-white">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black text-sm">Chores</h3>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Kitchen</span>
                    <div className="w-12 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 px-4">
              Everything you need for harmonious living
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              From chore tracking to bill splitting, RoomEase handles all the complexities of shared living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 px-4">
              Loved by roommates everywhere
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              See how RoomEase is transforming shared living experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.2}s`
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your household?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8">
            Join thousands of households already using RoomEase to create harmony in shared living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto text-base sm:text-lg px-4 sm:px-8 py-4"
              asChild
            >
              <Link href="/download">
                <span className="flex items-center justify-center">
                  Start Free Trial
                  <ChevronRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg px-4 sm:px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent"
              asChild
            >
              <Link href="/login">
                <span className="flex items-center justify-center">
                  Sign In
                </span>
              </Link>
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