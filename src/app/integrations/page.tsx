"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { ToasterProvider } from "@/components/toaster-provider";
import {
  Plug,
  Wallet,
  ShoppingCart,
  Calendar,
  Bell,
  Brain,
  ChevronRight,
  LightbulbIcon,
  KeyIcon,
  ShoppingBag,
  Utensils,
  List,
  ChefHat,
  CalendarDays,
  HomeIcon,
  MessageSquare,
  Mail,
  Bot,
  Menu,
  Home,
  X,
} from "lucide-react";
import { useState } from "react";

const integrationSections = [
  {
    id: "finance",
    icon: Wallet,
    title: "Finance & Bills",
    color: "text-green-500",
    integrations: [
      {
        title: "Mpesa & DPO",
        description:
          "Track and split rent, utilities, shopping, and any shared expenses via Kenya's most trusted payment platforms. Smart notifications ensure you never have to chase payments.",
        icon: Wallet,
      },
      {
        title: "KPLC Token Checker",
        description:
          "Running low on electricity? RoomEase auto-checks your token status and notifies everyone in the house—so you're never left in the dark.",
        icon: LightbulbIcon,
        badge: "Kenya Only",
      },
      {
        title: "1Password",
        description:
          "Share secure household logins and critical info like Wi-Fi passwords, DStv accounts, or caretaker contacts. Everyone stays in the loop—safely.",
        icon: KeyIcon,
      },
    ],
  },
  {
    id: "shopping",
    icon: ShoppingCart,
    title: "Shopping & Meals",
    color: "text-blue-500",
    integrations: [
      {
        title: "Uber Eats & Glovo",
        description:
          "Order meals as a house, track delivery ETAs, and fairly assign who's paying or picking up next. Ideal for nights in or busy weeks.",
        icon: Utensils,
      },
      {
        title: "Jumia & Carrefour",
        description:
          "Link your shared shopping wishlist with trusted vendors. Know what needs restocking—groceries, cleaning supplies, or electronics—before it runs out.",
        icon: ShoppingBag,
        badge: "Wishlist Sync",
      },
      {
        title: "Open Food Facts",
        description:
          "Built-in nutrition insights and dietary info for ingredients. Plan healthy meals, track allergens, and cater to everyone's food needs effortlessly.",
        icon: List,
      },
      {
        title: "Custom Recipe Assistant",
        description:
          "Stuck on what to cook with 3 eggs and a tomato? Our AI can suggest creative, tasty recipes based on what's already in your pantry.",
        icon: ChefHat,
        badge: "AI-Powered",
      },
    ],
  },
  {
    id: "scheduling",
    icon: Calendar,
    title: "Scheduling & Planning",
    color: "text-purple-500",
    integrations: [
      {
        title: "Google Calendar",
        description:
          "Sync chores, rent due dates, shared events, cooking turns, and cleaning schedules—straight into everyone's calendar.",
        icon: Calendar,
      },
      {
        title: "iCal Integration",
        description:
          "RoomEase supports universal iCal sync. Whether you use Apple Calendar, Fantastical, or Thunderbird, your house schedule follows you.",
        icon: CalendarDays,
      },
      {
        title: "Home Assistant",
        description:
          "Smart home users can automate tasks: get notified when someone gets home, auto-adjust cleaning schedules based on presence, or trigger reminders with motion sensors.",
        icon: HomeIcon,
        badge: "Optional Setup",
      },
    ],
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Productivity & Notifications",
    color: "text-orange-500",
    integrations: [
      {
        title: "WhatsApp Alerts",
        description:
          "Get notified in real-time when it's your turn to do dishes, pay rent, or respond to a roommate's task comment—right where you chat.",
        icon: MessageSquare,
      },
      {
        title: "SMS & Email Notifications",
        description:
          "Prefer texts? We've got you. RoomEase sends important alerts via multiple channels so no one's left out.",
        icon: Mail,
      },
      {
        title: "Push Notifications",
        description:
          "Timely nudges for chores, bills, and events—sent directly to your phone via RoomEase's smart push system.",
        icon: Bell,
      },
    ],
  },
  {
    id: "ai",
    icon: Brain,
    title: "Intelligence Built-In",
    color: "text-indigo-500",
    integrations: [
      {
        title: "ChatGPT (OpenAI)",
        description:
          "Help resolve roommate disputes politely, suggest meals based on your fridge contents, auto-fill rotating rosters fairly, remind you of expiring perishables, draft chore reminder messages, and more.",
        icon: Bot,
      },
    ],
  },
];

export default function IntegrationsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:20px_20px] opacity-50"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Plug className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                Integrations
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#features" className="text-slate-600 hover:text-black transition-colors">
                Features
              </Link>
              <Link href="/#testimonials" className="text-slate-600 hover:text-black transition-colors">
                Testimonials
              </Link>
              <Link href="/pricing" className="text-slate-600 hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-black transition-colors">
                About
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-slate-600 hover:text-black border border-slate-300"
                asChild
              >
                <Link href="/login">
                  Sign In
                </Link>
              </Button>
              <Button 
                className="bg-black hover:bg-slate-800 text-white"
                asChild
              >
                <Link href="/download">
                  Get Started
                </Link>
              </Button>
            </div>
            <button
              className="md:hidden p-2 text-slate-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/" className="text-slate-600 hover:text-black transition-colors py-2">
                  Home
                </Link>
                <Link href="/#features" className="text-slate-600 hover:text-black transition-colors py-2">
                  Features
                </Link>
                <Link href="/#testimonials" className="text-slate-600 hover:text-black transition-colors py-2">
                  Testimonials
                </Link>
                <Link href="/pricing" className="text-slate-600 hover:text-black transition-colors py-2">
                  Pricing
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-black transition-colors py-2">
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-slate-600 hover:text-black border border-slate-300"
                    asChild
                  >
                    <Link href="/login">
                      Sign In
                    </Link>
                  </Button>
                  <Button 
                    className="w-full justify-center bg-black hover:bg-slate-800 text-white"
                    asChild
                  >
                    <Link href="/download">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-slate-100 text-slate-700 border border-slate-200">
              <Plug className="w-4 h-4 mr-2" />
              Growing Ecosystem
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Smart Integrations
              <br />
              <span className="text-slate-600">Seamless Co-Living</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              RoomEase works hand-in-hand with services you already use.
              </p>
              Making shared living smoother, smarter, and more
              connected.
              <br></br>No complicated setups. Just harmony.
            
          </div>
        </div>
      </section>

      {/* Integration Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {integrationSections.map((section) => (
            <div key={section.id} className="mb-20 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <section.icon className={`w-8 h-8 ${section.color}`} />
                <h2 className="text-2xl sm:text-3xl font-bold text-black">
                  {section.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.integrations.map((integration, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center ${section.color}`}
                        >
                          <integration.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-black">
                              {integration.title}
                            </h3>
                            {integration.badge && (
                              <Badge variant="outline" className="text-xs">
                                {integration.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-slate-600">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to suggest an integration?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            We're always adding new integrations. Let us know what you'd love to
            connect RoomEase with next.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base sm:text-lg px-8 py-6"
            asChild
          >
            <Link href="/contact">
              <span className="flex items-center">
                Share Your Ideas
                <ChevronRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
