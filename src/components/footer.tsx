import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold">RoomEase</span>
            </div>
            <p className="text-slate-400">
              Making shared living harmonious and effortless.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/#features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/security" className="hover:text-white transition-colors cursor-pointer">Security</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors cursor-pointer">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/help" className="hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 RoomEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 