"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import AudioPlayer from "@/components/audio-player";

export default function ChoreSchedulePage() {
  const content = `
    Creating a chore schedule that works for everyone can be challenging, 
    but with the right approach and tools, it's absolutely achievable. 
    Let's explore how to create and maintain a cleaning system that everyone will follow.
    
    First, assess the cleaning needs of your space. Every home is different, 
    and the frequency of tasks will vary. Start by listing all necessary chores 
    and their ideal frequency.
    
    Next, consider everyone's schedules and preferences. Some people prefer 
    cleaning in the morning, others in the evening. Some might be more
    skilled at certain tasks than others.
    
    Then, use RoomEase's smart scheduling feature to create a balanced rotation 
    that works for everyone. The app will help you track completion and send 
    gentle reminders when tasks are due.
  `;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Creating a Chore Schedule That Works", href: "/blog/chore-schedule" }
  ];

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
          <Breadcrumbs items={breadcrumbItems} />

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border border-blue-200">
              Household Management
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Creating a Chore Schedule That Actually Works
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Marcus Chen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 10, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 mb-12">
              Stop arguing about who does what. Here's how to create a chore system that everyone will follow.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">
              Understanding Chore Management
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              The key to a successful chore schedule isn't just about dividing tasks—it's about creating a system that respects everyone's time, preferences, and capabilities.
            </p>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">
              1. Assess Your Space
            </h3>
            <ul className="list-disc pl-6 space-y-4 mb-12">
              <li className="text-slate-600">List all areas that need regular cleaning</li>
              <li className="text-slate-600">Determine cleaning frequency for each area</li>
              <li className="text-slate-600">Identify special cleaning needs or preferences</li>
            </ul>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">
              2. Consider Individual Schedules
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Take into account:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-12">
              <li className="text-slate-600">Work/study schedules</li>
              <li className="text-slate-600">Personal preferences (morning vs evening cleaning)</li>
              <li className="text-slate-600">Physical limitations or health considerations</li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-8 my-12">
              <h4 className="text-xl font-semibold text-black mb-4">
                Pro Tip: Use RoomEase's Smart Scheduling
              </h4>
              <p className="text-slate-600">
                Our app can automatically generate balanced schedules based on everyone's availability and preferences, making it easier to maintain a fair distribution of tasks.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">
              Creating the Perfect Schedule
            </h2>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">
              1. List All Tasks
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-semibold mb-4">Daily Tasks</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-slate-600">Dishes</li>
                  <li className="text-slate-600">Quick kitchen wipe</li>
                  <li className="text-slate-600">Sweep high-traffic areas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Weekly Tasks</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="text-slate-600">Bathroom cleaning</li>
                  <li className="text-slate-600">Vacuum/mop floors</li>
                  <li className="text-slate-600">Laundry</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">
              2. Establish a Rotation System
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Create a fair rotation that:
            </p>
            <ol className="list-decimal pl-6 space-y-4 mb-12">
              <li className="text-slate-600">Alternates between preferred and less-preferred tasks</li>
              <li className="text-slate-600">Balances workload across the week</li>
              <li className="text-slate-600">Includes flexibility for schedule changes</li>
            </ol>

            <div className="bg-slate-100 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-semibold text-black mb-6">
                Common Challenges and Solutions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-black mb-2">Challenge: Uneven Participation</h4>
                  <p className="text-slate-600">Solution: Use RoomEase's accountability features to track completion and send automatic reminders</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Challenge: Quality Standards</h4>
                  <p className="text-slate-600">Solution: Create clear checklists for each task within the app</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Challenge: Schedule Conflicts</h4>
                  <p className="text-slate-600">Solution: Enable task swapping through the app's built-in trading feature</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">
              Using Technology to Your Advantage
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              RoomEase provides several features to make chore management easier:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-12">
              <li className="text-slate-600">Smart scheduling algorithm</li>
              <li className="text-slate-600">Automatic reminders</li>
              <li className="text-slate-600">Task completion tracking</li>
              <li className="text-slate-600">Photo verification option</li>
              <li className="text-slate-600">In-app communication</li>
            </ul>

            <div className="my-12 border-t border-b border-slate-200 py-12">
              <h2 className="text-3xl font-bold text-black mb-8">
                Conclusion
              </h2>
              <p className="text-lg text-slate-600">
                A successful chore schedule requires the right combination of planning, flexibility, and tools. 
                With RoomEase, you can create and maintain a system that works for everyone, leading to a 
                cleaner, more harmonious living environment.
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
        title="Creating a Chore Schedule That Actually Works"
        content={content}
      />

      <Footer />
    </div>
  );
}
