'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Home, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag,
  Search,
  FileText
} from 'lucide-react';

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogPosts = [
    {
      title: "10 Essential Tips for First-Time Roommates",
      excerpt: "Moving in with roommates for the first time? Here are the key things you need to know to make it work.",
      author: "RoomEase Team",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Roommate Tips",
      image: "🏠",
      featured: true
    },
    {
      title: "How to Split Bills Fairly with Roommates",
      excerpt: "The ultimate guide to dividing expenses without the drama. Learn the best practices for bill splitting.",
      author: "Sarah Kim",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "Financial Management",
      image: "💰"
    },
    {
      title: "Creating a Chore Schedule That Actually Works",
      excerpt: "Stop arguing about who does what. Here's how to create a chore system that everyone will follow.",
      author: "Marcus Chen",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Household Management",
      image: "🧹"
    },
    {
      title: "The Psychology of Shared Living",
      excerpt: "Understanding the dynamics of living with others and how to maintain healthy relationships.",
      author: "Dr. Emily Rodriguez",
      date: "March 8, 2025",
      readTime: "8 min read",
      category: "Psychology",
      image: "🧠"
    },
    {
      title: "Budget-Friendly Decorating for Shared Spaces",
      excerpt: "Transform your shared living space without breaking the bank or causing conflicts.",
      author: "Alex Thompson",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Lifestyle",
      image: "🎨"
    },
    {
      title: "Digital Tools Every Modern Household Needs",
      excerpt: "From bill splitting to grocery lists, discover the apps that make shared living easier.",
      author: "RoomEase Team",
      date: "March 3, 2025",
      readTime: "6 min read",
      category: "Technology",
      image: "📱"
    }
  ];

  const categories = [
    "All",
    "Roommate Tips",
    "Financial Management", 
    "Household Management",
    "Psychology",
    "Lifestyle",
    "Technology"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
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
              <Calendar className="w-4 h-4 mr-2" />
              Latest Insights
            </Badge>
            
            <h1 
              className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              RoomEase
              <br />
              <span className="text-blue-600">Blog</span>
            </h1>
            
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              Tips, insights, and stories about making shared living work better for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Featured Article
            </h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <Card 
              key={index}
              className="border-0 shadow-xl bg-white overflow-hidden"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-700 border border-blue-200">
                      {post.category}
                    </Badge>
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {post.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{post.readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-black hover:bg-slate-800 text-white" asChild>
                      <Link href="/blog/first-time-roommates">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center p-8 lg:p-12">
                    <div className="text-8xl">{post.image}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover insights and tips for better shared living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
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
                  <div className="text-4xl mb-4">{post.image}</div>
                  <Badge className="mb-3 bg-slate-100 text-slate-700 border border-slate-200">
                    {post.category}
                  </Badge>
                  <Link 
                    href={(() => {
                      switch(post.title) {
                        case "How to Split Bills Fairly with Roommates":
                          return "/blog/split-bills-fairly";
                        case "Creating a Chore Schedule That Actually Works":
                          return "/blog/chore-schedule";
                        case "The Psychology of Shared Living":
                          return "/blog/psychology-shared-living";
                        case "Budget-Friendly Decorating for Shared Spaces":
                          return "/blog/budget-decorating";
                        case "Digital Tools Every Modern Household Needs":
                          return "/blog/digital-tools";
                        default:
                          return "#";
                      }
                    })()}
                    className="block"
                  >
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">{post.readTime}</span>
                    </div>
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
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest tips and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Subscribe to Newsletter
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