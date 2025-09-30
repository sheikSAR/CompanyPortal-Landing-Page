import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  Users,
  Zap,
  Target,
  Shield,
  ChevronDown,
  Mail,
  Building,
  User,
} from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Scroll reveal animation
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // University logos for social proof
  const universityLogos = [
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227713/karunya-institute-of-technology-and-sciences-logo_qjcgqo.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227703/national-institute-of-technology-calicut-logo_fh1b65.png", 
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227686/cochin-university-of-science-and-technology-logo_rxlz1a.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227680/national-institute-of-technology-raipur-logo_dhsqey.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227673/jaypee-institute-of-information-technology-logo_aqedqf.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227661/maulana-azad-national-institute-of-technology-logo_ojxiwm.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227648/sastra-university-logo_yqccgo.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227644/university-of-mumbai-logo_ixgbci.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="glass-effect border-b border-white/20 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Button
                variant="outline"
                className="border-slate-300 bg-white/80 text-slate-900 font-bold px-8 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                BroskiesHub
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-bold">
                  333-333-3333
                </span>
              </div>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:to-purple-700">
                Start a Pilot
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative py-20 lg:py-32 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(79, 70, 229, 0.6) 50%, rgba(30, 41, 59, 0.8) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white animate-slide-in-left">
              <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
                TRUSTED BY INNOVATIVE HIRING TEAMS
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 gradient-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Hire Engineers Who Actually Deliver
              </h1>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
                Get a pipeline of top-tier talent who have already proven they can solve your real-world problems.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-blue-100 leading-relaxed">
                      <span className="text-white font-semibold">
                        De-risk Your Hiring:
                      </span>{" "}
                      Make offers based on 45 days of proven performance, not a 45-minute interview.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-blue-100 leading-relaxed">
                      <span className="text-white font-semibold">
                        Save Engineering Hours:
                      </span>{" "}
                      Stop wasting your senior developers' time on endless screening calls. We do the heavy lifting.
                    </span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-blue-100 leading-relaxed">
                      <span className="text-white font-semibold">
                        Access Hidden Gems:
                      </span>{" "}
                      Tap into a national pool of high-potential talent from overlooked Tier-2 and Tier-3 colleges.
                    </span>
                  </div>
                </div>
              </div>
              
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 btn-premium"
              >
                Request My Free Pilot
              </Button>
              
              <p className="mt-6 text-sm text-blue-200 font-medium max-w-md">
                Fill out the form to see how we can build your custom talent pipeline.
              </p>
            </div>

            {/* Right - Lead Capture Form */}
            <div className="animate-slide-in-right">
              <Card className="max-w-lg mx-auto glass-effect border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10">
                <CardHeader className="text-center py-8">
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    Start Your Risk-Free Pilot
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Join innovative companies already transforming their hiring
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="pl-12 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 rounded-xl backdrop-blur-sm"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Work Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-12 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 rounded-xl backdrop-blur-sm"
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                          Company
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <Input
                            type="text"
                            name="company"
                            id="company"
                            required
                            value={formData.company}
                            onChange={handleInputChange}
                            className="pl-12 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 rounded-xl backdrop-blur-sm"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 btn-premium"
                    >
                      Request My Free Pilot
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - University Logos */}
      <section className="py-16 bg-white/50 backdrop-blur-sm scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 font-semibold text-lg mb-8 uppercase tracking-wide">
            TRUSTED BY TALENT FROM TOP UNIVERSITIES
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
            {universityLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center h-16 hover:scale-110 transition-transform duration-300">
                <img
                  src={logo}
                  alt={`University ${index + 1}`}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Your Hiring Process Is Costing You More Than Money
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Resumes lie. Coding tests are gamed. The result? A slow, expensive process that drains your best engineers and still results in bad hires.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm border-l-4 border-red-400 hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    Your senior devs waste 20% of their time on interviews.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm border-l-4 border-orange-400 hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    Nearly 50% of new hires are a poor fit and leave within 18 months.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm border-l-4 border-yellow-400 hover:shadow-md transition-shadow duration-300">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    You're competing for the same 1% of talent from elite colleges, ignoring a vast hidden talent pool.
                  </p>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium">
                Fix My Hiring Process
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Wasted time and resources in traditional hiring"
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-100 to-blue-100 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-16">
            Proven Results That Matter
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-effect border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">85%</h3>
                <p className="text-slate-600 font-medium">Higher retention rate vs traditional hiring</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">70%</h3>
                <p className="text-slate-600 font-medium">Faster time-to-hire process</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">90%</h3>
                <p className="text-slate-600 font-medium">Engineering time saved on screening</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium">
              See Our Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions - Three Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {/* Value Prop 1 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-reveal">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-3xl transform -rotate-3 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Custom talent pipeline"
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                CUSTOM SOLUTIONS
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Custom-Vetted Talent Pipelines
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Stop sifting through generic applicants. We work with you to design a 45-day work simulation based on your tech stack, your challenges, and your culture. Candidates prove they can do the job before you even see a resume.
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium">
                Build My Pipeline
              </Button>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-reveal">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                DATA-DRIVEN INSIGHTS
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Hire Based on Data, Not Gut Feel
              </h3>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Our AI-powered platform analyzes every commit, decision, and solution, generating a "Skill Passport" for each candidate. This deep performance report gives you undeniable proof of their abilities and learning potential.
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium">
                See Sample Report
              </Button>
            </div>
            <div>
              <Card className="glass-effect border border-white/20 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-4">
                    Candidate Skill Passport: Anjali Sharma
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Learning Adaptability</span>
                        <span className="text-sm font-medium text-indigo-600">92%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: '92%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Problem-Solving Efficiency</span>
                        <span className="text-sm font-medium text-cyan-600">88%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out delay-200" 
                          style={{ width: '88%' }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Code Quality</span>
                        <span className="text-sm font-medium text-emerald-600">95%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-1000 ease-out delay-400" 
                          style={{ width: '95%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm text-slate-600">
                      <span className="font-bold text-slate-800">AI Insight:</span> 
                      Anjali demonstrated high learning velocity, quickly mastering the new API after an initial struggle. This indicates resilience and adaptability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Value Prop 3 - Comparison Table */}
          <div className="scroll-reveal">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-green-100 to-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                PROVEN APPROACH
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                A Fundamentally Better Way to Hire
              </h3>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how BroskiesHub stacks up against the old ways.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <div className="min-w-max bg-white rounded-2xl shadow-2xl border border-slate-200">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
                      <th className="p-6 font-bold text-slate-900">Feature</th>
                      <th className="p-6 text-center">
                        <div className="font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                          BroskiesHub
                        </div>
                      </th>
                      <th className="p-6 text-center font-medium text-slate-600">Traditional Recruiters</th>
                      <th className="p-6 text-center font-medium text-slate-600">Job Boards</th>
                      <th className="p-6 text-center font-medium text-slate-600">Coding Platforms</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                      <td className="p-6 font-semibold text-slate-900">Vetting Method</td>
                      <td className="p-6 text-center text-slate-900 font-medium">45-Day Work Simulation</td>
                      <td className="p-6 text-center">Resume Screening</td>
                      <td className="p-6 text-center">Keyword Matching</td>
                      <td className="p-6 text-center">Generic Coding Puzzles</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                      <td className="p-6 font-semibold text-slate-900">Signal Quality</td>
                      <td className="p-6 text-center">
                        <span className="font-bold text-2xl text-green-500">✓✓✓</span>
                        <br />
                        <span className="text-sm text-slate-600">(Proven Performance)</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-red-500">✗</span>
                        <br />
                        <span className="text-sm">(Unreliable)</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-red-500">✗</span>
                        <br />
                        <span className="text-sm">(Irrelevant)</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-yellow-500">✓</span>
                        <br />
                        <span className="text-sm">(Limited Scope)</span>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                      <td className="p-6 font-semibold text-slate-900">Access to Hidden Gems</td>
                      <td className="p-6 text-center">
                        <span className="font-bold text-2xl text-green-500">✓✓✓</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-red-500">✗</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-yellow-500">✓</span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-2xl text-yellow-500">✓</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="p-6 font-semibold text-slate-900">Engineering Time Saved</td>
                      <td className="p-6 text-center text-slate-900 font-bold text-lg">&gt; 80%</td>
                      <td className="p-6 text-center">~ 20%</td>
                      <td className="p-6 text-center">0%</td>
                      <td className="p-6 text-center">~ 50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Your Shortlist in 3 Simple Steps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We make finding proven talent effortless.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 rounded-full"></div>
            
            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl hover:scale-110 transition-transform duration-300 z-10 relative">
                  1
                </div>
              </div>
              <Card className="glass-effect border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Define Your Ideal Hire</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tell us about the role. We'll co-design a custom work simulation that tests for the exact skills you need.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl hover:scale-110 transition-transform duration-300 z-10 relative">
                  2
                </div>
              </div>
              <Card className="glass-effect border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">We Vet at Scale</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We deploy your challenge to our talent pool. Our AI analyzes their work, identifying the top performers.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl hover:scale-110 transition-transform duration-300 z-10 relative">
                  3
                </div>
              </div>
              <Card className="glass-effect border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Conduct Final Interviews</h3>
                  <p className="text-slate-600 leading-relaxed">
                    You receive a shortlist of 3-5 candidates with deep performance data. You just make the final call.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-premium">
              Start My Custom Process
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What is the "Parallel Validation" pilot program?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                It's our risk-free guarantee. We'll build a custom project and vet candidates for one of your open roles. You run your existing hiring process in parallel. You only pay our placement fee if you hire a candidate we sourced. We're confident that our shortlist will outperform your traditional methods, and we're willing to prove it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What is your pricing model?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                We operate on a success-based model. We charge a placement fee of 8% of the candidate's first-year annual CTC, payable only upon a successful hire. There are no upfront costs to start the pilot program.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                How do you handle candidates using GenAI or Stack Overflow?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                We encourage it. Our philosophy is to test for real-world problem-solving, not rote memorization. In the real world, great developers use all the tools at their disposal. Our projects are complex enough that they can only be completed by someone who truly understands the subject, regardless of the tools they use. We see it as a sign of resourcefulness, not cheating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What kind of roles are you best for?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                Our model is ideal for fresher and junior-level (0-2 years experience) technical roles where on-the-job learning ability and problem-solving skills are more critical than prior experience. This includes roles like Software Engineer, Backend/Frontend Developer, Data Analyst, and QA Engineer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                How long does the vetting process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                Our comprehensive 45-day work simulation provides deep insights into candidate performance. While this may seem longer than traditional screening, it eliminates months of back-and-forth interviews and dramatically reduces the risk of bad hires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What if we're not satisfied with the candidates?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                That's the beauty of our Parallel Validation program. If our candidates don't meet your standards, you don't pay anything. We only succeed when you succeed, which is why we're committed to delivering exceptional talent.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Stop Wasting Time on Bad Hires
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Your next top performer is waiting in a Tier-2 city, ready to prove their skills. Let us find them for you. Start a risk-free pilot today and get a shortlist of proven candidates in weeks, not months.
              </p>
              <Button className="bg-white text-indigo-900 font-bold px-12 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                Claim My Risk-Free Pilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-50 to-blue-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <span className="text-2xl font-bold text-slate-900">BroskiesHub</span>
              </div>
              <p className="text-slate-600 max-w-md leading-relaxed mb-6">
                Transforming how companies hire technical talent through proven performance validation.
              </p>
              <p className="text-sm text-slate-500">
                © 2025 BroskiesHub Technologies Pvt. Ltd. All rights reserved.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Company</h3>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Success Stories</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">For Job Seekers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors duration-200">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-slate-600">Connect with us:</span>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300">
                    <span className="text-sm font-bold">tw</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
