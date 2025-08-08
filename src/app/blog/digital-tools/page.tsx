"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight, Smartphone, CreditCard, ShoppingCart, MessageSquare } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import AudioPlayer from "@/components/audio-player";

export default function DigitalToolsPage() {
  const content = `
    Digital tools have revolutionized how we manage shared living spaces. 
    From bill splitting to grocery lists, discover the apps that make shared living easier.
    
    The right digital tools can transform your household management experience. 
    Let's explore the essential apps and platforms that every modern household needs.
    
    RoomEase stands out as a comprehensive solution that combines multiple tools into one platform.
    From task management to financial tracking, it covers all aspects of shared living.
    
    Other valuable tools include digital payment platforms, shared calendar apps, 
    and communication tools that keep everyone connected and organized.
    
    The key is choosing tools that work well together and fit your household's specific needs.
    Start with the basics and gradually add more sophisticated solutions as needed.
  `;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/blog" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black group-hover:text-slate-800 transition-colors">
                Blog
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Digital Tools Every Modern Household Needs", href: "/blog/digital-tools" }
            ]} 
          />

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border border-blue-200">
              Technology
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Digital Tools Every Modern Household Needs
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>RoomEase Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 3, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-16">
              From bill splitting to grocery lists, discover the apps that make shared living easier 
              and more organized than ever before.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">The Digital Revolution in Shared Living</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Technology has transformed how we manage shared spaces. The right digital tools can 
                eliminate common conflicts and create a more harmonious living environment.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-4">Why Digital Tools Matter</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Transparency:</strong> Everyone can see what's happening</li>
                  <li className="text-slate-600"><strong>Automation:</strong> Reduce manual tracking and reminders</li>
                  <li className="text-slate-600"><strong>Communication:</strong> Clear channels for household discussions</li>
                  <li className="text-slate-600"><strong>Organization:</strong> Centralized information and schedules</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Essential Digital Tools for Shared Living</h2>
            
            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">1. Household Management Apps</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Comprehensive platforms like RoomEase combine multiple functions into one seamless experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">RoomEase Features</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600">Chore tracking and rotation</li>
                    <li className="text-slate-600">Bill splitting and payment tracking</li>
                    <li className="text-slate-600">Shopping lists and inventory</li>
                    <li className="text-slate-600">Household communication</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Benefits</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600">All-in-one solution</li>
                    <li className="text-slate-600">Real-time updates</li>
                    <li className="text-slate-600">Mobile accessibility</li>
                    <li className="text-slate-600">Data backup and security</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">2. Financial Management Tools</h3>
            <div className="space-y-6 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Digital Payment Platforms</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Venmo/PayPal:</strong> Quick money transfers</li>
                    <li className="text-slate-600"><strong>Splitwise:</strong> Expense tracking</li>
                    <li className="text-slate-600"><strong>Banking Apps:</strong> Direct transfers</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Budgeting Apps</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Mint:</strong> Overall financial tracking</li>
                    <li className="text-slate-600"><strong>YNAB:</strong> Detailed budgeting</li>
                    <li className="text-slate-600"><strong>PocketGuard:</strong> Spending insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">3. Communication Platforms</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Effective communication is the foundation of successful shared living.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Messaging Apps</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">WhatsApp</li>
                    <li className="text-slate-600">Telegram</li>
                    <li className="text-slate-600">Slack</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Video Calls</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">Zoom</li>
                    <li className="text-slate-600">Google Meet</li>
                    <li className="text-slate-600">FaceTime</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Shared Calendars</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">Google Calendar</li>
                    <li className="text-slate-600">Apple Calendar</li>
                    <li className="text-slate-600">Outlook</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">4. Shopping and Inventory Apps</h3>
            <div className="space-y-6 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Grocery Shopping</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>OurGroceries:</strong> Shared shopping lists</li>
                    <li className="text-slate-600"><strong>AnyList:</strong> Recipe and list management</li>
                    <li className="text-slate-600"><strong>Instacart:</strong> Grocery delivery</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Inventory Management</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Sortly:</strong> Item organization</li>
                    <li className="text-slate-600"><strong>Home Inventory:</strong> Asset tracking</li>
                    <li className="text-slate-600"><strong>RoomEase:</strong> Shared item management</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Choosing the Right Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Consider Your Needs</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Household Size:</strong> More people need better organization</li>
                    <li className="text-slate-600"><strong>Budget:</strong> Free vs. premium features</li>
                    <li className="text-slate-600"><strong>Tech Comfort:</strong> Choose user-friendly options</li>
                    <li className="text-slate-600"><strong>Integration:</strong> Tools that work together</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Implementation Tips</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Start Simple:</strong> Don't overwhelm everyone</li>
                    <li className="text-slate-600"><strong>Train Together:</strong> Ensure everyone can use the tools</li>
                    <li className="text-slate-600"><strong>Be Consistent:</strong> Use the same tools regularly</li>
                    <li className="text-slate-600"><strong>Review Regularly:</strong> Adjust based on what works</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 my-16">
              <h3 className="text-2xl font-bold text-black mb-6">💡 Pro Tip: The RoomEase Advantage</h3>
              <p className="text-lg text-slate-600 mb-6">
                While individual apps are great, RoomEase provides a comprehensive solution that:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="text-slate-600"><strong>Reduces App Overload:</strong> One platform for multiple needs</li>
                <li className="text-slate-600"><strong>Ensures Consistency:</strong> Everyone uses the same system</li>
                <li className="text-slate-600"><strong>Improves Accountability:</strong> Built-in tracking and reminders</li>
                <li className="text-slate-600"><strong>Simplifies Onboarding:</strong> New roommates can easily join</li>
              </ul>
            </div>

            <div className="border-t border-b border-slate-200 py-12 my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Conclusion</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The right digital tools can transform your shared living experience from chaotic to harmonious. 
                Start with the essentials and gradually build your digital toolkit based on your household's needs.
              </p>
              <p className="text-lg text-slate-600">
                Remember, the goal isn't to use every app available, but to find the tools that work best 
                for your specific situation and make shared living easier for everyone involved.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/download">
                Try RoomEase Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </article>
      </main>

      <AudioPlayer 
        title="Digital Tools Every Modern Household Needs"
        content={content}
      />

      <Footer />
    </div>
  );
} 