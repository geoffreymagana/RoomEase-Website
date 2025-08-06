"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Home, Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black group-hover:text-slate-800 transition-colors">
                Cookie Policy
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Cookie Policy</h1>
          <p className="text-slate-600">Last updated: August 6, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-slate-600">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your experience better by remembering your preferences and how you use RoomEase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-slate-600">We use cookies for several purposes:</p>
            <ul className="list-disc pl-6 mt-4 text-slate-600">
              <li>Authentication: To remember your login status</li>
              <li>Preferences: To save your settings and customize your experience</li>
              <li>Analytics: To understand how visitors use our website</li>
              <li>Security: To help protect your data and RoomEase's services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Essential Cookies:</strong> Required for basic site functionality</p>
              <p><strong>Preference Cookies:</strong> Remember your settings and preferences</p>
              <p><strong>Analytics Cookies:</strong> Help us improve our services</p>
              <p><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-slate-600">
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "options" or "preferences" menu of your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Questions about our cookie practices?</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
