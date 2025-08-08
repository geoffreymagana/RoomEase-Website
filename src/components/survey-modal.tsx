'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Users, 
  MapPin, 
  DollarSign, 
  AlertTriangle, 
  Shield, 
  Heart,
  ArrowRight,
  X,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartSurvey = () => {
    // Open the survey in a new tab instead of trying to render it in the modal
    window.open('/survey', '_blank');
    onClose();
  };

  const handleClose = () => {
    setShowSurvey(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-black">
              Help Us Build RoomEase
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-black mb-4">
              Share Your Experience
            </h2>
            <p className="text-slate-600 mb-6">
              We're building tools to make shared living better. 
              Your feedback will help us understand the real challenges 
              and create solutions that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Home className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Living Situation</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Tell us about your current living arrangement and why you chose co-living.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Location & Budget</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Help us understand your location, rent range, and financial considerations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Pain Points</h3>
                </div>
                <p className="text-sm text-slate-600">
                  What frustrates you most about living with roommates? We want to know.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-black">Tools & Solutions</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Would you use apps to manage shared living? What would make them work?
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-4">
            <h3 className="font-semibold text-black mb-2">What You'll Get:</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Early access to RoomEase features</li>
              <li>• Influence the future of shared living tools</li>
              <li>• Help others avoid common roommate conflicts</li>
              <li>• Contribute to better matching algorithms</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={handleStartSurvey}
              className="bg-black hover:bg-slate-800 text-white"
            >
              Start Survey
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 