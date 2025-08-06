"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Home, Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-black group-hover:text-slate-800 transition-colors">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: August 6, 2025</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing and using RoomEase, you accept and agree to be bound by the terms and conditions outlined in this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
            <p className="text-slate-600">
              RoomEase provides a platform for roommate management and household organization. Users must be at least 18 years old to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-slate-600">
              You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
            <p className="text-slate-600">
              Your use of RoomEase is also governed by our Privacy Policy. Please review our Privacy Policy, which outlines how we collect and use your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
            <p className="text-slate-600">
              RoomEase reserves the right to modify these terms at any time. We will notify users of any material changes via email or through the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p className="text-slate-600">
              We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Have questions about our terms?</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
