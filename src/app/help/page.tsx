'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Home, 
  HelpCircle, 
  Search, 
  ArrowRight,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function HelpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{
    faqs: typeof faqs;
    categories: typeof helpCategories;
  }>({ faqs: [], categories: [] });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqs = [
    {
      question: "How do I invite roommates to my household?",
      answer: "Go to your household settings and click 'Invite Roommates'. You'll get a unique invitation code that you can share with your roommates. They can use this code to join your household."
    },
    {
      question: "How does bill splitting work?",
      answer: "Add bills to your household and specify who owes what. RoomEase will automatically calculate splits and send reminders. You can also set up recurring bills for rent, utilities, etc."
    },
    {
      question: "Can I track chores and assign them to roommates?",
      answer: "Yes! Create chore lists and assign them to specific roommates. You can set due dates, mark them as complete, and track who's doing their fair share."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption and never store your actual banking credentials. All data is encrypted in transit and at rest."
    },
    {
      question: "How do I change my payment method?",
      answer: "Go to Settings > Payment Methods to add, edit, or remove payment options. You can link multiple cards or bank accounts."
    },
    {
      question: "What if I have a dispute with my roommates?",
      answer: "RoomEase includes a dispute resolution system. You can flag issues, provide evidence, and we'll help mediate fair solutions."
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "New to RoomEase? Learn the basics and set up your household.",
      articles: ["Creating Your Household", "Inviting Roommates", "Setting Up Bills"]
    },
    {
      icon: MessageCircle,
      title: "Bills & Payments",
      description: "Everything you need to know about splitting and paying bills.",
      articles: ["Adding Bills", "Payment Methods", "Splitting Expenses"]
    },
    {
      icon: HelpCircle,
      title: "Chores & Tasks",
      description: "Manage household chores and keep everyone accountable.",
      articles: ["Creating Chore Lists", "Assigning Tasks", "Tracking Progress"]
    },
    {
      icon: Search,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them quickly.",
      articles: ["Login Problems", "Payment Issues", "Sync Problems"]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "support@roomease.com"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for urgent issues",
      action: "+254 742 663 614"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      action: "Available 9AM-6PM EAT"
    }
  ];

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults({ faqs: [], categories: [] });
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Search in FAQs
    const filteredFaqs = faqs.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );

    // Search in categories
    const filteredCategories = helpCategories.filter(category => 
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.articles.some(article => article.toLowerCase().includes(query))
    );

    setSearchResults({ faqs: filteredFaqs, categories: filteredCategories });
  }, [searchQuery]);

  const displayFaqs = searchQuery.trim() === '' ? faqs : searchResults.faqs;
  const displayCategories = searchQuery.trim() === '' ? helpCategories : searchResults.categories;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
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
              className="mb-6 bg-orange-100 text-orange-700 border border-orange-200"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out'
              }}
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              How Can We Help?
            </Badge>
            
            <h1 
              className="text-6xl md:text-8xl font-bold text-black mb-6 leading-tight"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              Help Center
            </h1>
            
            <p 
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.4s'
              }}
            >
              Find answers to common questions and get the support you need to make shared living easier.
            </p>

            {/* Search Bar */}
            <div 
              className="max-w-md mx-auto"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.8s ease-out 0.6s'
              }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              {searchQuery.trim() !== '' && (
                <p className="text-sm text-slate-500 mt-2">
                  Found {displayFaqs.length} FAQ{displayFaqs.length !== 1 ? 's' : ''} and {displayCategories.length} categor{displayCategories.length !== 1 ? 'ies' : 'y'}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results or Help Categories */}
      {searchQuery.trim() !== '' ? (
        <>
          {/* Search Results */}
          {displayFaqs.length > 0 && (
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Search Results - FAQs
                </h2>
                <p className="text-xl text-slate-600">
                  Found {displayFaqs.length} FAQ{displayFaqs.length !== 1 ? 's' : ''} matching "{searchQuery}"
                </p>
              </div>
              
              <div className="space-y-4">
                {displayFaqs.map((faq, index) => (
                  <Card 
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                  >
                    <CardContent className="p-6">
                      <button
                        className="w-full flex items-center justify-between text-left"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <h3 className="text-lg font-semibold text-black pr-4">
                          {faq.question}
                        </h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <p className="text-slate-600 mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          )}

          {displayCategories.length > 0 && (
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Search Results - Categories
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Found {displayCategories.length} categor{displayCategories.length !== 1 ? 'ies' : 'y'} matching "{searchQuery}"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayCategories.map((category, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-1">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="text-sm text-slate-600 hover:text-orange-600 transition-colors">
                            {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          )}

          {displayFaqs.length === 0 && displayCategories.length === 0 && (
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-black mb-4">
                  No Results Found
                </h2>
                <p className="text-xl text-slate-600 mb-8">
                  No help articles found for "{searchQuery}". Try a different search term or browse our categories below.
                </p>
                <Button 
                  onClick={() => setSearchQuery('')}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Clear Search
                </Button>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Help Categories */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Help Categories
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Find the help you need by category.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayCategories.map((category, index) => (
                  <Card 
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white cursor-pointer"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s ease-out ${index * 0.1}s`
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      <ul className="space-y-1">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="text-sm text-slate-600 hover:text-orange-600 transition-colors">
                            {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-slate-600">
                  Quick answers to the most common questions.
                </p>
              </div>
              
              <div className="space-y-4">
                {displayFaqs.map((faq, index) => (
                  <Card 
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                    style={{
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      opacity: isVisible ? 1 : 0,
                      transition: `all 0.6s ease-out ${index * 0.1}s`
                    }}
                  >
                    <CardContent className="p-6">
                      <button
                        className="w-full flex items-center justify-between text-left"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <h3 className="text-lg font-semibold text-black pr-4">
                          {faq.question}
                        </h3>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        )}
                      </button>
                      {openFaq === index && (
                        <p className="text-slate-600 mt-4 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of RoomEase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
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
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {method.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {method.description}
                  </p>
                  <p className="text-orange-600 font-medium">
                    {method.action}
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
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of households already using RoomEase.
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