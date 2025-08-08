"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import AudioPlayer from "@/components/audio-player";

export default function FirstTimeRoommatesPage() {
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
              { label: "First-Time Roommates Guide", href: "/blog/first-time-roommates" }
            ]} 
          />

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border border-blue-200">
              Roommate Tips
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              10 Essential Tips for First-Time Roommates
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>RoomEase Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-16">
              Moving in with roommates for the first time is an exciting yet challenging experience. 
              Here's your comprehensive guide to making it work smoothly from day one.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">1. Set Clear Expectations Early</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Before you even move in, have an open discussion about everyone's schedules, habits, and preferences.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                <p className="font-medium text-slate-800">Key points to establish:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Quiet Hours:</strong> Define specific times for studying and sleeping</li>
                  <li className="text-slate-600"><strong>Guest Policies:</strong> Set clear rules about visitors and overnight stays</li>
                  <li className="text-slate-600"><strong>Shared Spaces:</strong> Establish guidelines for common area usage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">2. Create a Fair Financial System</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                A clear financial system prevents misunderstandings and ensures everyone contributes fairly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Shared Expenses</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Regular Bills:</strong> Rent, utilities</li>
                    <li className="text-slate-600"><strong>Supplies:</strong> Cleaning, kitchen items</li>
                    <li className="text-slate-600"><strong>Optional:</strong> Groceries, subscriptions</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">RoomEase Features</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Automatic Splitting:</strong> Fair division</li>
                    <li className="text-slate-600"><strong>Payment Tracking:</strong> Real-time updates</li>
                    <li className="text-slate-600"><strong>Expense History:</strong> Clear records</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">3. Establish a Cleaning Schedule</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                A well-organized cleaning system keeps your space tidy and prevents conflicts.
              </p>
              <div className="pl-6 border-l-4 border-blue-200 space-y-4">
                <p className="font-medium text-slate-800">Essential Components:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Task Rotation:</strong> Fair distribution of responsibilities</li>
                  <li className="text-slate-600"><strong>Clear Standards:</strong> Defined expectations for each task</li>
                  <li className="text-slate-600"><strong>Timeline:</strong> Set schedule for daily/weekly tasks</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <p className="font-medium text-blue-800">💡 Pro Tip</p>
                <p className="text-slate-600 mt-2">
                  Use RoomEase's cleaning checklist feature to track completion and maintain consistent standards.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">4. Respect Privacy and Personal Space</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                In shared living, personal boundaries are essential for harmony.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-slate-800">Key Privacy Guidelines:</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Personal Rooms:</strong> Always knock and wait for permission</li>
                  <li className="text-slate-600"><strong>Borrowing Items:</strong> Ask before using others' belongings</li>
                  <li className="text-slate-600"><strong>Personal Time:</strong> Respect study and rest periods</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">5. Communicate Effectively</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Good communication is the foundation of successful shared living.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Communication Tips</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Address Early:</strong> Don't let issues fester</li>
                    <li className="text-slate-600"><strong>Use "I" Statements:</strong> Express feelings constructively</li>
                    <li className="text-slate-600"><strong>Stay Open:</strong> Be receptive to feedback</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Regular Check-ins</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>House Meetings:</strong> Schedule regular discussions</li>
                    <li className="text-slate-600"><strong>Digital Updates:</strong> Use RoomEase's chat features</li>
                    <li className="text-slate-600"><strong>Feedback Sessions:</strong> Review and adjust rules</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">6. Plan for Shared Items</h2>
            <div className="space-y-6 mb-16">
              <div className="bg-slate-50 p-6 rounded-lg space-y-6">
                <h3 className="font-semibold text-slate-800">Common Items to Consider:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Furniture</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                      <li>Living room seating</li>
                      <li>Dining table</li>
                      <li>Storage units</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Appliances</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                      <li>Microwave</li>
                      <li>Coffee maker</li>
                      <li>Vacuum cleaner</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Supplies</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                      <li>Cleaning products</li>
                      <li>Paper goods</li>
                      <li>Basic tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Final Tips for Success</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Common Areas</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Clean as You Go:</strong> Maintain shared spaces</li>
                    <li className="text-slate-600"><strong>Noise Awareness:</strong> Respect quiet hours</li>
                    <li className="text-slate-600"><strong>Fair Usage:</strong> Share common areas equally</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Guest Protocol</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Advanced Notice:</strong> Inform about visitors</li>
                    <li className="text-slate-600"><strong>Time Limits:</strong> Set overnight stay policies</li>
                    <li className="text-slate-600"><strong>Common Areas:</strong> Respect shared spaces</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 my-16">
              <h3 className="text-2xl font-bold text-black mb-6">💡 Pro Tip: Digital Organization</h3>
              <p className="text-lg text-slate-600 mb-6">
                Make the most of RoomEase's features to keep everything organized:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="text-slate-600"><strong>Task Management:</strong> Track shared responsibilities</li>
                <li className="text-slate-600"><strong>Expense Tracking:</strong> Manage shared costs</li>
                <li className="text-slate-600"><strong>Communication Hub:</strong> Keep everyone in the loop</li>
                <li className="text-slate-600"><strong>Document Storage:</strong> Save agreements and guidelines</li>
              </ul>
            </div>

            <div className="border-t border-b border-slate-200 py-12 my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Conclusion</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Success in shared living comes down to three key elements:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="text-slate-600"><strong>Mutual Respect:</strong> Consideration for everyone's needs and preferences</li>
                <li className="text-slate-600"><strong>Clear Communication:</strong> Open, honest dialogue about expectations and concerns</li>
                <li className="text-slate-600"><strong>Organization:</strong> Using tools like RoomEase to maintain structure and clarity</li>
              </ul>
              <p className="text-lg text-slate-600 mt-6">
                By following these guidelines and utilizing RoomEase's features, you can create a harmonious living environment that works for everyone.
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
        title="10 Essential Tips for First-Time Roommates"
        content={`
          Welcome to RoomEase's guide for first-time roommates.

          Moving in with roommates for the first time is an exciting yet challenging experience.
          Let's explore 10 essential tips to make your shared living experience successful.

          Tip number 1: Set Clear Expectations Early.
          Before moving in, schedule a meeting to discuss everyone's schedules, habits, and preferences.
          Focus on quiet hours, guest policies, and shared space usage.

          Tip number 2: Create a Fair Financial System.
          Establish how you'll handle shared expenses like rent and utilities.
          RoomEase's bill-splitting feature can automate this process for transparency.

          Tip number 3: Establish a Cleaning Schedule.
          Create a rotating schedule with clear task assignments.
          Define what "clean" means for each area to avoid misunderstandings.

          Tip number 4: Respect Privacy and Personal Space.
          Always knock before entering private rooms.
          Ask permission before borrowing personal items.

          Tip number 5: Communicate Effectively.
          Address issues promptly and use "I" statements when discussing concerns.
          Regular house meetings can help maintain open communication.

          Remember, RoomEase is here to help make your shared living experience smoother.
          Download our app to access all these features and more.

          For additional tips and resources, visit our website at RoomEase.com
        `}
      />

      <Footer />
    </div>
  );
}
