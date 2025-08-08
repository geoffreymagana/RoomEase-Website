import Link from 'next/link';
import { 
  Home,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Github,
  MessageSquare
} from 'lucide-react';

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
            <p className="text-slate-400 mb-6">
              Making shared living harmonious and effortless.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/RoomEaseApp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/RoomEaseApp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/RoomEaseApp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/RoomEase" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@RoomEaseApp" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://github.com/RoomEase" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/#features" className="hover:text-white transition-colors cursor-pointer">Features</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors cursor-pointer">Integrations</Link></li>
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
              <li><Link href="/survey" className="hover:text-white transition-colors cursor-pointer flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Take Our Survey
              </Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p>&copy; 2025 RoomEase. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 