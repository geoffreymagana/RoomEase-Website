"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function SplitBillsPage() {
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
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border border-blue-200">
              Financial Management
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              How to Split Bills Fairly with Roommates
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Sarah Kim</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 12, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead">
              One of the biggest challenges in shared living is managing finances fairly. 
              Here's your comprehensive guide to splitting bills without the drama.
            </p>

            <h2>Common Bill-Splitting Methods</h2>
            <p>
              There are several approaches to splitting bills, each with its own advantages:
            </p>
            <ul>
              <li><strong>Equal Split:</strong> Everyone pays the same amount</li>
              <li><strong>Income-Based:</strong> Bills are split proportionally to income</li>
              <li><strong>Usage-Based:</strong> Pay according to actual usage</li>
              <li><strong>Room Size:</strong> Rent split based on square footage</li>
            </ul>

            <h2>Which Bills to Split?</h2>
            <p>
              Common shared expenses typically include:
            </p>
            <ul>
              <li>Rent and security deposits</li>
              <li>Utilities (electricity, water, gas)</li>
              <li>Internet and streaming services</li>
              <li>Cleaning supplies</li>
              <li>Shared groceries (if applicable)</li>
              <li>Common area furnishings</li>
            </ul>

            <h2>Using RoomEase for Bill Management</h2>
            <p>
              RoomEase simplifies bill splitting with features like:
            </p>
            <ul>
              <li>Automated monthly bill tracking</li>
              <li>Multiple splitting methods</li>
              <li>Payment history and reminders</li>
              <li>Digital receipt storage</li>
              <li>Expense categorization</li>
            </ul>

            <h2>Best Practices for Financial Harmony</h2>
            
            <h3>1. Set Clear Payment Deadlines</h3>
            <p>
              Establish when bills are due and when roommates need to contribute their share. 
              RoomEase can help by sending automatic reminders.
            </p>

            <h3>2. Keep Records</h3>
            <p>
              Maintain digital copies of all bills and payment confirmations. 
              This helps prevent disputes and ensures transparency.
            </p>

            <h3>3. Handle Variable Bills Fairly</h3>
            <p>
              For bills that fluctuate monthly, like utilities, decide on a fair way to split them. 
              Consider usage patterns and seasonal changes.
            </p>

            <h3>4. Plan for Irregular Expenses</h3>
            <p>
              Don't forget about occasional costs like maintenance repairs or annual services. 
              Consider creating a shared emergency fund.
            </p>

            <div className="my-8 p-6 bg-blue-50 rounded-lg">
              <h3>Pro Tip: Use Digital Payment Methods</h3>
              <p>
                Set up digital payments through RoomEase to automate the process and maintain a clear record 
                of all transactions. This reduces the chances of late payments and makes tracking easier.
              </p>
            </div>

            <h2>Handling Financial Conflicts</h2>
            <p>
              If disagreements arise:
            </p>
            <ol>
              <li>Review the original agreement</li>
              <li>Discuss concerns openly</li>
              <li>Consider adjusting the system if needed</li>
              <li>Document any changes in writing</li>
              <li>Use RoomEase's dispute resolution features</li>
            </ol>

            <h2>Conclusion</h2>
            <p>
              Successful bill splitting requires clear communication, good organization, and the right tools. 
              With RoomEase's comprehensive financial management features, you can maintain transparency 
              and fairness while avoiding common roommate conflicts over money.
            </p>
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

      <Footer />
    </div>
  );
}
