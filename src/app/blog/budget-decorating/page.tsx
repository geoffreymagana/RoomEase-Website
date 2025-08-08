"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import { FileText, Calendar, Clock, User, ArrowRight, Palette, Home, Heart } from "lucide-react";
import Breadcrumbs from "@/components/breadcrumbs";
import AudioPlayer from "@/components/audio-player";

export default function BudgetDecoratingPage() {
  const content = `
    Transform your shared living space without breaking the bank or causing conflicts.
    
    Budget-friendly decorating for shared spaces requires creativity, compromise, and smart planning.
    Let's explore how to create a beautiful, functional space that everyone loves.
    
    The key is finding affordable solutions that work for everyone's style and budget.
    From DIY projects to thrift store finds, there are countless ways to decorate on a budget.
    
    Communication is essential when decorating shared spaces. Everyone should feel heard and represented.
    RoomEase can help facilitate these discussions and track shared purchases.
    
    Remember, the goal is to create a space that feels like home for everyone while staying within budget.
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
              { label: "Budget-Friendly Decorating for Shared Spaces", href: "/blog/budget-decorating" }
            ]} 
          />

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-700 border border-green-200">
              Lifestyle
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Budget-Friendly Decorating for Shared Spaces
            </h1>
            <div className="flex items-center justify-center space-x-6 text-slate-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Alex Thompson</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>March 5, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>4 min read</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-16">
              Transform your shared living space without breaking the bank or causing conflicts. 
              Here's your guide to creating a beautiful, functional space that everyone loves.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">The Art of Shared Decorating</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Decorating a shared space requires a delicate balance of individual expression and collective harmony. 
                The key is finding affordable solutions that work for everyone's style and budget.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-4">Why Budget-Friendly Matters</h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Financial Fairness:</strong> Everyone can contribute equally</li>
                  <li className="text-slate-600"><strong>Reduced Pressure:</strong> Less stress about expensive purchases</li>
                  <li className="text-slate-600"><strong>Creative Solutions:</strong> Forces you to think outside the box</li>
                  <li className="text-slate-600"><strong>Easy Updates:</strong> Affordable to change as tastes evolve</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Planning Your Decorating Project</h2>
            
            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">1. Establish a Budget</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Before you start shopping, set clear financial boundaries that work for everyone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Budget Categories</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Furniture:</strong> 40% of total budget</li>
                    <li className="text-slate-600"><strong>Decor:</strong> 30% of total budget</li>
                    <li className="text-slate-600"><strong>Lighting:</strong> 20% of total budget</li>
                    <li className="text-slate-600"><strong>Miscellaneous:</strong> 10% of total budget</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Cost-Splitting Options</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Equal Split:</strong> Everyone pays the same</li>
                    <li className="text-slate-600"><strong>Usage-Based:</strong> Pay for what you use most</li>
                    <li className="text-slate-600"><strong>Room-Based:</strong> Pay for your personal space</li>
                    <li className="text-slate-600"><strong>Contribution-Based:</strong> Pay what you can afford</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">2. Define Your Style</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Create a cohesive design that reflects everyone's tastes and preferences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Style Quiz</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">Minimalist</li>
                    <li className="text-slate-600">Bohemian</li>
                    <li className="text-slate-600">Modern</li>
                    <li className="text-slate-600">Traditional</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Color Palette</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">Neutral tones</li>
                    <li className="text-slate-600">Bold accents</li>
                    <li className="text-slate-600">Monochromatic</li>
                    <li className="text-slate-600">Mixed patterns</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Materials</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li className="text-slate-600">Natural wood</li>
                    <li className="text-slate-600">Metal accents</li>
                    <li className="text-slate-600">Textured fabrics</li>
                    <li className="text-slate-600">Mixed media</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Budget-Friendly Shopping Strategies</h2>
            
            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">1. Thrift Store Treasures</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Second-hand stores are goldmines for unique, affordable pieces.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-4">What to Look For</h4>
                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-slate-600"><strong>Furniture:</strong> Solid wood pieces that can be refinished</li>
                  <li className="text-slate-600"><strong>Artwork:</strong> Frames and canvases for DIY projects</li>
                  <li className="text-slate-600"><strong>Textiles:</strong> Curtains, rugs, and throw pillows</li>
                  <li className="text-slate-600"><strong>Accessories:</strong> Vases, lamps, and decorative items</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">2. DIY Projects</h3>
            <div className="space-y-6 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Easy DIY Ideas</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Wall Art:</strong> Create your own canvas paintings</li>
                    <li className="text-slate-600"><strong>Planters:</strong> Upcycle containers for plants</li>
                    <li className="text-slate-600"><strong>Shelving:</strong> Build simple wooden shelves</li>
                    <li className="text-slate-600"><strong>Lighting:</strong> Make custom lampshades</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Materials Needed</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Basic Tools:</strong> Hammer, screwdriver, paint brushes</li>
                    <li className="text-slate-600"><strong>Supplies:</strong> Paint, fabric, glue, hardware</li>
                    <li className="text-slate-600"><strong>Safety:</strong> Gloves, masks, proper ventilation</li>
                    <li className="text-slate-600"><strong>Space:</strong> Designated work area</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-black mt-12 mb-6">3. Online Marketplaces</h3>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                Digital platforms offer great deals on both new and used items.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Best Platforms</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Facebook Marketplace:</strong> Local deals and furniture</li>
                    <li className="text-slate-600"><strong>Craigslist:</strong> Wide variety of items</li>
                    <li className="text-slate-600"><strong>eBay:</strong> Unique vintage pieces</li>
                    <li className="text-slate-600"><strong>OfferUp:</strong> Mobile-friendly local sales</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-4">Shopping Tips</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Research Prices:</strong> Know what things are worth</li>
                    <li className="text-slate-600"><strong>Negotiate:</strong> Don't be afraid to haggle</li>
                    <li className="text-slate-600"><strong>Inspect Items:</strong> Check condition before buying</li>
                    <li className="text-slate-600"><strong>Meet Safely:</strong> Use public meeting spots</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-slate-50 p-8 rounded-xl my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Room-by-Room Decorating Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Living Room</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Seating:</strong> Comfortable, durable furniture</li>
                    <li className="text-slate-600"><strong>Storage:</strong> Multi-functional pieces</li>
                    <li className="text-slate-600"><strong>Lighting:</strong> Mix of ambient and task lighting</li>
                    <li className="text-slate-600"><strong>Decor:</strong> Plants, artwork, throw pillows</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Kitchen</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Storage:</strong> Organize with baskets and containers</li>
                    <li className="text-slate-600"><strong>Lighting:</strong> Under-cabinet and pendant lights</li>
                    <li className="text-slate-600"><strong>Accessories:</strong> Colorful dish towels and rugs</li>
                    <li className="text-slate-600"><strong>Plants:</strong> Herbs and small potted plants</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8 my-16">
              <h3 className="text-2xl font-bold text-black mb-6">💡 Pro Tip: Use RoomEase for Decorating Projects</h3>
              <p className="text-lg text-slate-600 mb-6">
                RoomEase can help coordinate your decorating projects:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li className="text-slate-600"><strong>Budget Tracking:</strong> Monitor shared decorating expenses</li>
                <li className="text-slate-600"><strong>Task Management:</strong> Assign DIY projects and shopping trips</li>
                <li className="text-slate-600"><strong>Communication:</strong> Discuss style preferences and decisions</li>
                <li className="text-slate-600"><strong>Inventory:</strong> Track shared decorative items and furniture</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8">Handling Decorating Conflicts</h2>
            <div className="space-y-6 mb-16">
              <p className="text-lg text-slate-600">
                When roommates have different tastes, compromise and communication are key.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Conflict Resolution</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Vote on Major Items:</strong> Everyone gets a say</li>
                    <li className="text-slate-600"><strong>Rotate Personal Space:</strong> Let each person choose one area</li>
                    <li className="text-slate-600"><strong>Set Time Limits:</strong> Agree on temporary vs. permanent</li>
                    <li className="text-slate-600"><strong>Document Decisions:</strong> Keep records of agreements</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-4">Compromise Strategies</h3>
                  <ul className="list-disc pl-6 space-y-3">
                    <li className="text-slate-600"><strong>Neutral Base:</strong> Start with neutral colors and styles</li>
                    <li className="text-slate-600"><strong>Personal Touches:</strong> Allow individual expression in bedrooms</li>
                    <li className="text-slate-600"><strong>Seasonal Changes:</strong> Rotate decor with seasons</li>
                    <li className="text-slate-600"><strong>Budget Limits:</strong> Set spending caps for individual items</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-slate-200 py-12 my-16">
              <h2 className="text-3xl font-bold text-black mb-8">Conclusion</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Budget-friendly decorating for shared spaces is all about creativity, compromise, and smart planning. 
                By working together and using the right tools, you can create a beautiful space that everyone loves 
                without breaking the bank.
              </p>
              <p className="text-lg text-slate-600">
                Remember, the goal isn't to create a magazine-worthy space, but to build a home that feels 
                comfortable and welcoming for everyone who lives there.
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
        title="Budget-Friendly Decorating for Shared Spaces"
        content={content}
      />

      <Footer />
    </div>
  );
} 