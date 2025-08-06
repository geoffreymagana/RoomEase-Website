'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Footer from '@/components/footer';
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  CreditCard,
  ArrowRight,
  Crown,
  Home
} from 'lucide-react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: "Free",
      price: 0,
      annualPrice: 0,
      description: "Perfect for small households getting started",
      features: [
        "Up to 3 roommates",
        "Basic chore tracking",
        "Simple bill splitting",
        "Shopping lists",
        "Basic messaging"
      ],
      popular: false,
      cta: "Get Started Free",
      href: "/join"
    },
    {
      name: "Pro",
      price: 9,
      annualPrice: 7,
      description: "Best for growing households and serious roommates",
      features: [
        "Up to 8 roommates",
        "Advanced chore tracking",
        "AI-powered bill categorization",
        "Receipt scanning",
        "Advanced analytics",
        "Priority support",
        "Custom household rules",
        "Trust score tracking"
      ],
      popular: true,
      cta: "Start Free Trial",
      href: "/join"
    },
    {
      name: "Enterprise",
      price: 19,
      annualPrice: 15,
      description: "For large households and property managers",
      features: [
        "Unlimited roommates",
        "Multi-household management",
        "Advanced AI features",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "Advanced reporting",
        "API access"
      ],
      popular: false,
      cta: "Contact Sales",
      href: "/contact"
    }
  ];

  const currentPrice = (plan: any) => isAnnual ? plan.annualPrice : plan.price;

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
                  <Crown className="w-5 h-5 text-white" />
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
              <Link href="/about" className="text-slate-600 hover:text-black transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-black border border-slate-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/join">
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
            <Zap className="w-4 h-4 mr-2" />
            Simple, Transparent Pricing
          </Badge>
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-black mb-6"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.2s'
            }}
          >
            Choose Your
            <span className="text-slate-600"> Perfect Plan</span>
          </h1>
          
          <p 
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.4s'
            }}
          >
            Start free and upgrade as your household grows. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div 
            className="flex items-center justify-center space-x-4 mb-12"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.8s ease-out 0.6s'
            }}
          >
            <span className={`text-sm ${!isAnnual ? 'text-black' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-black' : 'bg-slate-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-black' : 'text-slate-500'}`}>
              Annual
              <Badge className="ml-2 bg-green-100 text-green-700">Save 20%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 ${
                  plan.popular 
                    ? 'border-2 border-black shadow-xl scale-105' 
                    : 'border-0 shadow-lg'
                } bg-white`}
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.2}s`
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-black">
                      ${currentPrice(plan)}
                    </span>
                    <span className="text-slate-500 ml-2">
                      /{isAnnual ? 'month' : 'month'}
                    </span>
                  </div>
                  {isAnnual && plan.price > 0 && (
                    <p className="text-sm text-slate-500 line-through">
                      ${plan.price}/month
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={plan.href} className="block mt-6">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-black hover:bg-slate-800 text-white' 
                          : 'bg-slate-900 hover:bg-black text-white'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about RoomEase pricing.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What happens if I cancel?",
                answer: "You can cancel anytime. Your data is safe and you can reactivate your account whenever you want."
              },
              {
                question: "Do you offer student discounts?",
                answer: "Yes! Students get 50% off all paid plans with a valid .edu email address."
              }
            ].map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
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
            <Link href="/join">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black bg-transparent">
                Contact Sales
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