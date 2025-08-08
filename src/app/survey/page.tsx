'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Footer from '@/components/footer';
import { 
  Home, 
  Users, 
  MapPin, 
  DollarSign, 
  AlertTriangle, 
  Shield, 
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

export default function SurveyPage() {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState({
    // Section 1: Living Situation
    peopleCount: '',
    livingArrangement: '',
    livingArrangementOther: '',
    reasonsForCoLiving: [],
    reasonsForCoLivingOther: '',
    roommateDuration: '',
    
    // Section 2: Location & Financial
    cityCountry: '',
    housingAffordability: '',
    idealRentRange: '',
    openToRelocating: '',
    
    // Section 3: Pain Points
    frustratingAspects: [],
    hadDisagreement: '',
    disagreementReason: '',
    currentSplittingMethod: '',
    splittingApp: '',
    trustLevel: '',
    
    // Section 4: Tools & Accountability
    triedApp: '',
    appExperience: '',
    openToLightweightApp: '',
    whatWouldMakeYouUse: '',
    agreeOnHouseRules: '',
    useDigitalContract: '',
    neutralAppTracking: '',
    
    // Section 5: Willingness to Pay
    willingToPay: '',
    institutionalSupport: '',
    
    // Section 6: Roommate Matching
    foundRoommateAlone: '',
    howFoundRoommate: [],
    howFoundRoommateOther: '',
    roommateFindingExperience: '',
    importantFactors: [],
    importantFactorsOther: '',
    useMatchingApp: '',
    payForMatching: '',
    badExperience: '',
    
    // Section 7: Demographics
    ageGroup: '',
    occupation: '',
    occupationOther: '',
    educationLevel: '',
    householdIncome: '',
    livingSituation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showValidationDialog, setShowValidationDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to form section when section changes
  useEffect(() => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[] || []), value]
        : (prev[field] as string[] || []).filter(item => item !== value)
    }));
  };

  const submitToGoogleSheets = async () => {
    // Validate that at least some required fields are filled
    const requiredFields = [
      'peopleCount',
      'livingArrangement', 
      'cityCountry',
      'housingAffordability',
      'idealRentRange'
    ];
    
    const hasRequiredData = requiredFields.some(field => {
      const value = formData[field];
      return value && value.trim() !== '';
    });
    
    if (!hasRequiredData) {
      setShowValidationDialog(true);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit survey');
      }

      setShowSuccess(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setErrorMessage(error instanceof Error ? error.message : 'There was an error submitting your survey. Please try again.');
      setShowErrorDialog(true);
    }
  };

  const sections = [
    {
      id: 1,
      title: "Your Living Situation",
      icon: Home,
      color: "bg-green-500",
      questions: [
        {
          id: "peopleCount",
          type: "radio",
          question: "How many people do you currently live with?",
          options: [
            "Just me",
            "1 roommate", 
            "2–3 roommates",
            "More than 3"
          ]
        },
        {
          id: "livingArrangement",
          type: "radio",
          question: "What best describes your living arrangement?",
          options: [
            "College dorm",
            "Shared apartment/house",
            "Renting a room in someone's home",
            "Co-living space",
            "Other"
          ],
          hasOther: true,
          otherField: "livingArrangementOther"
        },
        {
          id: "reasonsForCoLiving",
          type: "checkbox",
          question: "Why are you living with roommates right now? (Choose all that apply)",
          options: [
            "Financial reasons",
            "Social preference / I like co-living",
            "University housing / student dorm",
            "Temporary situation (short-term lease)",
            "Just moved to a new city",
            "Other"
          ],
          hasOther: true,
          otherField: "reasonsForCoLivingOther"
        },
        {
          id: "roommateDuration",
          type: "radio",
          question: "How long have you lived with roommates?",
          options: [
            "Less than 3 months",
            "3–12 months",
            "Over 1 year",
            "Never"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Location & Financial Fit",
      icon: MapPin,
      color: "bg-blue-500",
      questions: [
        {
          id: "cityCountry",
          type: "text",
          question: "What city and country do you currently live in?"
        },
        {
          id: "housingAffordability",
          type: "radio",
          question: "How would you describe housing affordability in your area?",
          options: [
            "Very affordable",
            "Manageable, but I have to budget",
            "Expensive",
            "Extremely unaffordable"
          ]
        },
        {
          id: "idealRentRange",
          type: "radio",
          question: "What is your ideal monthly rent range (your share)?",
          options: [
            "Under $100",
            "$100–$250",
            "$250–$500",
            "$500–$750",
            "$750+"
          ]
        },
        {
          id: "openToRelocating",
          type: "radio",
          question: "Would you be open to relocating if you found better roommates or housing?",
          options: [
            "Yes",
            "Maybe, within the same city",
            "No, I'm staying put for now"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "The Pain Points of Co-Living",
      icon: AlertTriangle,
      color: "bg-yellow-500",
      questions: [
        {
          id: "frustratingAspects",
          type: "checkbox",
          question: "What's the most frustrating part of living with roommates? (Select all that apply)",
          options: [
            "Splitting bills fairly",
            "Chore distribution",
            "Cleaning habits",
            "Noise or personal boundaries",
            "Forgetting shared responsibilities",
            "Communication issues",
            "Different lifestyles/schedules",
            "None / No big issues"
          ]
        },
        {
          id: "hadDisagreement",
          type: "radio",
          question: "Have you ever had a serious disagreement with a roommate?",
          options: ["Yes", "No"],
          conditional: {
            field: "disagreementReason",
            showWhen: "Yes",
            type: "text",
            question: "What caused it?"
          }
        },
        {
          id: "currentSplittingMethod",
          type: "radio",
          question: "How do you currently split bills or tasks?",
          options: [
            "Manually (verbal agreements)",
            "Group chat (WhatsApp, Telegram, etc.)",
            "Shared spreadsheet / doc",
            "An app",
            "We don't really split anything"
          ],
          conditional: {
            field: "splittingApp",
            showWhen: "An app",
            type: "text",
            question: "Which app? (name it)"
          }
        },
        {
          id: "trustLevel",
          type: "radio",
          question: "Do you trust your roommates to stick to agreed duties or payments?",
          options: [
            "Always",
            "Most of the time",
            "Rarely",
            "Never"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Tools, Accountability & Contracts",
      icon: Shield,
      color: "bg-red-500",
      questions: [
        {
          id: "triedApp",
          type: "radio",
          question: "Have you ever tried an app or tool to manage shared living?",
          options: ["Yes", "No"],
          conditional: {
            field: "appExperience",
            showWhen: "Yes",
            type: "text",
            question: "Which one? And how was it?"
          }
        },
        {
          id: "openToLightweightApp",
          type: "radio",
          question: "Would you be open to using a lightweight app that helps you and your roommates manage bills, chores, and shared agreements?",
          options: [
            "Yes, sounds useful",
            "Maybe, depends on how easy it is",
            "No, I wouldn't use it"
          ]
        },
        {
          id: "whatWouldMakeYouUse",
          type: "text",
          question: "What would make you actually use a roommate app consistently?"
        },
        {
          id: "agreeOnHouseRules",
          type: "radio",
          question: "Would it help if you and your roommates agreed on shared \"house rules\" when moving in?",
          options: ["Yes, absolutely", "Maybe", "No"]
        },
        {
          id: "useDigitalContract",
          type: "radio",
          question: "Would you use a digital \"roommate contract\" template to avoid future conflict?",
          options: [
            "Yes, that would be great",
            "Maybe, if it's simple",
            "No, I'd rather not"
          ]
        },
        {
          id: "neutralAppTracking",
          type: "radio",
          question: "If a neutral app kept track of who's done chores, paid bills, etc., would that reduce tension?",
          options: ["Yes", "Maybe", "No"]
        }
      ]
    },
    {
      id: 5,
      title: "Willingness to Pay / Institutional Support",
      icon: DollarSign,
      color: "bg-purple-500",
      questions: [
        {
          id: "willingToPay",
          type: "radio",
          question: "Would you be willing to pay a small amount (like $1–$2/month) to avoid roommate conflict and track responsibilities?",
          options: ["Yes, definitely", "Maybe", "No way"]
        },
        {
          id: "institutionalSupport",
          type: "radio",
          question: "If your landlord, university, or property manager offered this tool for free, would you use it?",
          options: ["Yes", "Maybe", "No"]
        }
      ]
    },
    {
      id: 6,
      title: "Roommate Matching Insights",
      icon: Users,
      color: "bg-indigo-500",
      questions: [
        {
          id: "foundRoommateAlone",
          type: "radio",
          question: "Have you ever had to find a roommate on your own (not assigned by school/landlord)?",
          options: [
            "Yes",
            "No",
            "Not yet, but I will soon"
          ]
        },
        {
          id: "howFoundRoommate",
          type: "checkbox",
          question: "If yes, how did you find your roommate(s)? (Select all that apply)",
          options: [
            "Social media (WhatsApp, FB, Telegram, etc.)",
            "Apps or websites (e.g. Facebook Marketplace, Craigslist)",
            "Word of mouth",
            "Roommate matching platforms",
            "I was assigned randomly",
            "Other"
          ],
          hasOther: true,
          otherField: "howFoundRoommateOther"
        },
        {
          id: "roommateFindingExperience",
          type: "radio",
          question: "How would you rate your experience finding a roommate?",
          options: [
            "⭐ Awful – I settled out of desperation",
            "⭐⭐ Bad – Hard to find someone compatible",
            "⭐⭐⭐ Okay – Took effort, but worked out",
            "⭐⭐⭐⭐ Good – Decent experience",
            "⭐⭐⭐⭐⭐ Great – Easy and smooth"
          ]
        },
        {
          id: "importantFactors",
          type: "checkbox",
          question: "What factors matter most to you when choosing a roommate? (Pick up to 3)",
          options: [
            "Cleanliness",
            "Quiet vs social personality",
            "Sleep schedule",
            "Occupation/school compatibility",
            "Smoking/drinking habits",
            "Shared interests",
            "Pet ownership",
            "Gender",
            "Religion or culture",
            "Budget compatibility",
            "Other"
          ],
          hasOther: true,
          otherField: "importantFactorsOther",
          maxSelections: 3
        },
        {
          id: "useMatchingApp",
          type: "radio",
          question: "Would you use an app that matches you with roommates based on compatibility (like a \"Tinder for Roommates\")?",
          options: [
            "Yes – That sounds awesome",
            "Maybe – If it had good filters and safety",
            "No – I'd rather use my own networks"
          ]
        },
        {
          id: "payForMatching",
          type: "radio",
          question: "Would you pay for premium roommate matching if it helped you avoid a bad living situation?",
          options: [
            "Yes – Up to $5–$10",
            "Maybe – Only if I'm desperate",
            "No – I'd never pay for that"
          ]
        },
        {
          id: "badExperience",
          type: "text",
          question: "Optional: Have you ever had a bad roommate experience from a random match? What happened?"
        }
      ]
    },
    {
      id: 7,
      title: "Demographics (Optional)",
      icon: Heart,
      color: "bg-gray-500",
      questions: [
        {
          id: "ageGroup",
          type: "radio",
          question: "Age group",
          options: [
            "Under 18",
            "18–24",
            "25–34",
            "35+"
          ]
        },
        {
          id: "occupation",
          type: "radio",
          question: "Occupation",
          options: [
            "Student",
            "Employed full-time",
            "Part-time",
            "Unemployed",
            "Other"
          ],
          hasOther: true,
          otherField: "occupationOther"
        },
        {
          id: "educationLevel",
          type: "radio",
          question: "What is your highest level of education?",
          options: [
            "High school or equivalent",
            "Some college",
            "Bachelor's degree",
            "Master's degree",
            "Doctorate or professional degree",
            "Other"
          ]
        },
        {
          id: "householdIncome",
          type: "radio",
          question: "What is your approximate household income range?",
          options: [
            "Under $25,000",
            "$25,000 - $50,000",
            "$50,000 - $75,000",
            "$75,000 - $100,000",
            "$100,000 - $150,000",
            "Over $150,000",
            "Prefer not to say"
          ]
        },
        {
          id: "livingSituation",
          type: "radio",
          question: "How would you describe your current living situation?",
          options: [
            "Very satisfied",
            "Somewhat satisfied",
            "Neutral",
            "Somewhat dissatisfied",
            "Very dissatisfied"
          ]
        }
      ]
    }
  ];

  const currentSectionData = sections.find(s => s.id === currentSection);

  // Define required fields
  const requiredFields = [
    'peopleCount',
    'livingArrangement', 
    'cityCountry',
    'housingAffordability',
    'idealRentRange'
  ];

  const renderQuestion = (question: any) => {
    const value = formData[question.id as keyof typeof formData];
    
    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-2">
            <Label htmlFor={question.id} className="text-base font-medium">
              {question.question}
              {requiredFields.includes(question.id) && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {question.id === 'badExperience' || question.id === 'whatWouldMakeYouUse' ? (
              <Textarea
                id={question.id}
                value={value as string}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                placeholder="Tell us more..."
                className="min-h-[100px]"
              />
            ) : (
              <Input
                id={question.id}
                value={value as string}
                onChange={(e) => handleInputChange(question.id, e.target.value)}
                placeholder="Your answer..."
              />
            )}
          </div>
        );
      
      case 'radio':
        return (
          <div className="space-y-3">
            <Label className="text-base font-medium">
              {question.question}
              {requiredFields.includes(question.id) && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <RadioGroup
              value={value as string}
              onValueChange={(val) => handleInputChange(question.id, val)}
            >
              {question.options.map((option: string) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                  <Label htmlFor={`${question.id}-${option}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {question.hasOther && value === 'Other' && (
              <div className="mt-3">
                <Input
                  value={formData[question.otherField as keyof typeof formData] as string}
                  onChange={(e) => handleInputChange(question.otherField, e.target.value)}
                  placeholder="Please specify..."
                />
              </div>
            )}
            {question.conditional && value === question.conditional.showWhen && (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <Label className="text-base font-medium">
                  {question.conditional.question}
                </Label>
                {question.conditional.type === 'text' ? (
                  <Input
                    value={formData[question.conditional.field as keyof typeof formData] as string}
                    onChange={(e) => handleInputChange(question.conditional.field, e.target.value)}
                    placeholder="Your answer..."
                    className="mt-2"
                  />
                ) : (
                  <Textarea
                    value={formData[question.conditional.field as keyof typeof formData] as string}
                    onChange={(e) => handleInputChange(question.conditional.field, e.target.value)}
                    placeholder="Tell us more..."
                    className="mt-2 min-h-[100px]"
                  />
                )}
              </div>
            )}
          </div>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-3">
            <Label className="text-base font-medium">
              {question.question}
              {requiredFields.includes(question.id) && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <div className="space-y-2">
              {question.options.map((option: string) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${question.id}-${option}`}
                    checked={(value as string[] || []).includes(option)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(question.id, option, checked as boolean)
                    }
                    disabled={
                      question.maxSelections && 
                      (value as string[] || []).length >= question.maxSelections &&
                      !(value as string[] || []).includes(option)
                    }
                  />
                  <Label htmlFor={`${question.id}-${option}`} className="text-sm">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
            {question.hasOther && (
              <div className="mt-3">
                <Input
                  value={formData[question.otherField as keyof typeof formData] as string}
                  onChange={(e) => handleInputChange(question.otherField, e.target.value)}
                  placeholder="Other: Please specify..."
                />
              </div>
            )}
            {question.maxSelections && (
              <p className="text-xs text-slate-500 mt-2">
                Maximum {question.maxSelections} selections allowed
              </p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto pt-32 pb-20 px-4">
          <Card className="text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-black mb-4">
              Thank You for Your Feedback!
            </h1>
            <p className="text-slate-600 mb-6">
              Your responses will help us build better tools for shared living. 
              We'll be in touch with updates about RoomEase.
            </p>
            <Button asChild>
              <a href="/download">
                Try RoomEase Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Twitter-style Header */}
      <div className="relative">
        {/* Banner */}
        <div className="h-48 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            {/* SVG Pattern Background */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-400"/>
                </pattern>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" className="text-slate-500"/>
                </pattern>
                <pattern id="waves" width="40" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 Q 10 0 20 10 Q 30 20 40 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-600"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)"/>
              <rect width="100%" height="100%" fill="url(#dots)"/>
              <rect width="100%" height="100%" fill="url(#waves)"/>
            </svg>
            
            {/* Floating Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-slate-600 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute top-12 right-12 w-12 h-12 bg-slate-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-8 left-1/4 w-8 h-8 bg-slate-700 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-slate-600 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-8 left-1/3 w-6 h-6 bg-slate-500 transform rotate-45 opacity-20"></div>
            <div className="absolute bottom-12 right-1/3 w-4 h-4 bg-slate-600 transform rotate-45 opacity-25"></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
          </div>
        </div>
        
        {/* Logo overlapping banner and content */}
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-lg">
            <Home className="w-12 h-12 text-white" />
          </div>
        </div>
        
        {/* Follow button */}
        <div className="absolute top-4 right-4">
          <Button 
            className="bg-black text-white hover:bg-slate-800"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'RoomEase Survey',
                  text: 'Help us build better tools for shared living!',
                  url: window.location.href
                });
              } else {
                // Fallback for browsers that don't support Web Share API
                navigator.clipboard.writeText(window.location.href);
                alert('Survey link copied to clipboard!');
              }
            }}
          >
            Share Survey
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto pt-20 pb-20 px-4">
        {/* Profile info */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <h1 className="text-2xl font-bold text-black">RoomEase</h1>
            <Badge className="bg-orange-500 text-white">Verified</Badge>
          </div>
          <p className="text-slate-600">@roomease</p>
          <p className="text-slate-600 mt-2">
            "Bringing Harmony to Shared Living with Vision and Precision"
          </p>
          <div className="flex space-x-6 mt-4 text-sm text-slate-500">
            <span>🏠 Household Management</span>
            <span>👥 Roommate Matching</span>
            <span>💰 Bill Splitting</span>
          </div>
        </div>

        {/* Survey Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-600">
              Section {currentSection} of {sections.length}
            </span>
            <span className="text-sm text-slate-600">
              {Math.round((currentSection / sections.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentSection / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Section */}
        <Card className="mb-8" ref={formSectionRef}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-10 h-10 ${currentSectionData?.color} rounded-lg flex items-center justify-center`}>
                {currentSectionData?.icon && <currentSectionData.icon className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h2 className="text-xl font-bold text-black">
                  {currentSectionData?.title}
                </h2>
                <p className="text-sm text-slate-600">
                  Section {currentSection} of {sections.length}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {currentSectionData?.questions.map((question, index) => (
                <div key={index} className="border-b border-slate-200 pb-6 last:border-b-0">
                  {renderQuestion(question)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentSection(Math.max(1, currentSection - 1))}
            disabled={currentSection === 1}
          >
            Previous
          </Button>
          
          {currentSection < sections.length ? (
            <Button
              onClick={() => setCurrentSection(currentSection + 1)}
              className="bg-black hover:bg-slate-800 text-white"
            >
              Next Section
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={submitToGoogleSheets}
              disabled={isSubmitting}
              className="bg-black hover:bg-slate-800 text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Survey'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Section Navigation */}
        <div className="mt-8">
          <h3 className="text-sm font-medium text-slate-600 mb-3">Jump to Section:</h3>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={currentSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentSection(section.id)}
                className={currentSection === section.id ? "bg-black text-white" : ""}
              >
                {section.id}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Validation Dialog */}
      <Dialog open={showValidationDialog} onOpenChange={setShowValidationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Please Complete Required Fields
            </DialogTitle>
            <DialogDescription>
              Please fill in at least the basic information (living situation and location) before submitting the survey.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowValidationDialog(false)}>
              Got it
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error Dialog */}
      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Submission Error
            </DialogTitle>
            <DialogDescription>
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowErrorDialog(false)}>
              Try Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 