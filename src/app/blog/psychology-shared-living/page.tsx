"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight, Brain } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import AudioPlayer from "@/components/audio-player";

export default function PsychologySharedLivingPage() {
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
              { label: "Psychology of Shared Living", href: "/blog/psychology-shared-living" }
            ]} 
          />

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-700 border border-purple-200">
              Psychology
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              The Psychology of Shared Living
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Dr. Emily Rodriguez</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 8, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-16">
              Understanding the psychological dynamics of shared living can help create healthier, 
              more harmonious living situations. Let's explore the key psychological principles at play.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">The Social Psychology of Shared Spaces</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Living with others involves complex social dynamics that affect our daily interactions 
                and overall well-being.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-4">Territory and Personal Space</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Physical Boundaries:</strong> Need for personal territory</li>
                    <li className="text-slate-600"><strong>Psychological Space:</strong> Mental need for privacy</li>
                    <li className="text-slate-600"><strong>Shared Areas:</strong> Negotiating common spaces</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-4">Group Dynamics</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Social Roles:</strong> Natural group positions</li>
                    <li className="text-slate-600"><strong>Power Balance:</strong> Decision-making dynamics</li>
                    <li className="text-slate-600"><strong>Group Norms:</strong> Establishing shared rules</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Common Psychological Challenges</h2>
            <div className="space-y-6 mb-16">
              <div className="bg-slate-50 p-6 rounded-lg space-y-6">
                <h3 className="font-semibold text-slate-800">Key Issues to Address:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Personal Challenges</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                      <li>Privacy needs</li>
                      <li>Boundary setting</li>
                      <li>Alone time balance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Group Challenges</h4>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600">
                      <li>Conflict resolution</li>
                      <li>Shared responsibility</li>
                      <li>Communication barriers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 my-16">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                <Brain className="inline-block w-6 h-6 mr-2" />
                Building Emotional Intelligence
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-slate-600">
                  Developing these key emotional skills can significantly improve shared living:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li className="text-slate-600"><strong>Self-awareness:</strong> Understanding your own needs and triggers</li>
                  <li className="text-slate-600"><strong>Empathy:</strong> Seeing situations from others' perspectives</li>
                  <li className="text-slate-600"><strong>Communication:</strong> Expressing needs clearly and respectfully</li>
                  <li className="text-slate-600"><strong>Adaptability:</strong> Being flexible in different situations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Practical Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">Daily Practices</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Morning Routines:</strong> Respect different schedules</li>
                  <li className="text-slate-600"><strong>Shared Meals:</strong> Build community when possible</li>
                  <li className="text-slate-600"><strong>Quiet Time:</strong> Establish peaceful periods</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-4">Conflict Resolution</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Active Listening:</strong> Focus on understanding</li>
                  <li className="text-slate-600"><strong>Compromise:</strong> Find middle ground</li>
                  <li className="text-slate-600"><strong>Solutions:</strong> Focus on outcomes</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-xl my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Using Technology Wisely</h2>
              <p className="text-lg text-slate-600 mb-6">
                RoomEase helps address psychological aspects of shared living through:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="text-slate-600"><strong>Clear Communication:</strong> Structured channels for different topics</li>
                <li className="text-slate-600"><strong>Fair Systems:</strong> Equitable distribution of responsibilities</li>
                <li className="text-slate-600"><strong>Conflict Prevention:</strong> Automated reminders and tracking</li>
                <li className="text-slate-600"><strong>Harmony Building:</strong> Tools for positive interaction</li>
              </ul>
            </div>

            <div className="border-t border-b border-slate-200 py-12 my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Conclusion</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Understanding the psychology of shared living helps create more harmonious living situations. 
                By applying these principles and using tools like RoomEase, roommates can build stronger 
                relationships and more positive living environments.
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
        title="The Psychology of Shared Living"
        content={`
          Understanding the psychological dynamics of shared living can significantly improve your roommate experience.
          
          Living with others involves complex social dynamics that affect our daily interactions.
          Key aspects include territory and personal space, group dynamics, and emotional intelligence.
          
          We'll explore common challenges like privacy needs, boundary setting, and conflict resolution.
          Learn practical techniques for building better relationships with your roommates.
          
          Discover how technology like RoomEase can help address psychological aspects of shared living
          through clear communication channels and fair systems.
        `}
      />

      <Footer />
    </div>
  );
}
