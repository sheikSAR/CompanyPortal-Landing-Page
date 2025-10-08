import React, { useState, useEffect } from "react";
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
  Target,
  Zap,
  Shield,
  Mail,
  Building,
  User,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
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

    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((element) => {
        const elementTop = (element as HTMLElement).getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const universityLogos: string[] = [
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227713/karunya-institute-of-technology-and-sciences-logo_qjcgqo.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227703/national-institute-of-technology-calicut-logo_fh1b65.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227686/cochin-university-of-science-and-technology-logo_rxlz1a.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227680/national-institute-of-technology-raipur-logo_dhsqey.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227673/jaypee-institute-of-information-technology-logo_aqedqf.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227661/maulana-azad-national-institute-of-technology-logo_ojxiwm.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227648/sastra-university-logo_yqccgo.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227644/university-of-mumbai-logo_ixgbci.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227638/indian-institute-of-information-technology-allahabad-logo_wyojfs.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227632/birla-institute-of-technology-logo_e21n9k.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227625/national-institute-of-technology-durgapur-logo_j4mwcw.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227619/malaviya-national-institute-of-technology-jaipur-logo_tgsy5g.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227615/annamalai-university-logo_a87r0m.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227610/pondicherry-university-logo_epdx6b.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227607/university-of-hyderabad-logo_adpq05.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227601/jawaharlal-nehru-university-logo_xaa5xk.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227595/sardar-vallabhbhai-national-institute-of-technology-surat-logo_hnq0rx.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227591/sathyabama-institute-of-science-and-technology-logo_to74fs.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227585/national-institute-of-technology-karnataka-logo_pyvxcg.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227582/saveetha-university-logo_fgesrj.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227576/indian-institute-of-technology-hyderabad-logo_afqygg.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227569/national-islamic-university-logo_yr1yah.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227566/chitkara-university-punjab-logo_eulo7q.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227561/lovely-professional-university-logo_snhy7w.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227558/university-of-calcutta-logo_ultona.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227552/aligarh-muslim-university-logo_c531m9.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227537/national-institute-of-technology-kurukshetra-logo_myrr6m.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227530/amity-university-logo_fxbltf.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227526/k-l-university-logo_cqkstn.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227520/birla-institute-of-technology-and-science-logo_a6czkc.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227512/tata-institute-of-fundamental-research-logo_el1uws.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227507/national-institute-of-technology-tiruchirappalli-logo_ntmuzt.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227497/delhi-technological-university-logo_npklbm.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227488/savitribai-phule-pune-university-logo_vqna8m.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227484/national-institute-of-technology-rourkela-logo_vsgwzi.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227479/indian-institute-of-technology-indore-logo_ypoa9o.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227473/indian-institute-of-technology-guwahati-logo_gxxri9.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227468/thapar-institute-of-engineering-and-technology-logo_gl8l1x.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227463/srm-institute-of-science-and-technology-logo_j9e34q.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227455/university-of-delhi-logo_pyeluu.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227445/amrita-university-logo_dqli4h.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227442/anna-university-logo_iexbst.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227437/jadavpur-university-logo_buvkfk.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227431/indian-institute-of-technology-roorkee-logo_tuije9.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227425/indian-institute-of-technology-madras-logo_lsql49.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227419/indian-institute-of-technology-bombay-logo_igg37n.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227414/indian-institute-of-technology-kanpur-logo_fym4aa.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227407/vit-university-logo_r4azah.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227398/indian-institute-of-technology-kharagpur-logo_fogefr.png",
    "https://res.cloudinary.com/dk2wudmxh/image/upload/v1759227329/indian-institute-of-technology-delhi-logo_gjmraq.png",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759233080/BroskiesHub_Incubated_Logo_bwrago.png"
                alt="BroskiesHub Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:+918148040507"
                className="flex items-center gap-2 text-slate-700 hover:text-[#2626e7] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#2626e7]" />
                <span className="font-medium">+918148040507</span>
              </a>
              <a
                href="mailto:support@broskieshub.com"
                className="flex items-center gap-2 text-slate-700 hover:text-[#2626e7] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#2626e7]" />
                <span className="font-medium">support@broskieshub.com</span>
              </a>
              <Button
                variant="cta"
                size="lg"
                onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
                className="px-12 py-6 text-lg rounded-xl btn-premium glow-in-out"
              >
                Start a Pilot
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative py-20 lg:py-28 min-h-[80vh] flex items-center ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff,#eef2ff,rgba(38,38,231,0.06))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="mb-6 bg-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                TRUSTED BY INNOVATIVE HIRING TEAMS
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 gradient-flow bg-clip-text text-transparent">
                Hire Engineers Who Actually Deliver
              </h1>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl">
                Get a pipeline of top-tier talent who have already proven they
                can solve your real-world problems.
              </p>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg">
                    <span className="font-semibold text-slate-900">
                      De-risk Your Hiring:
                    </span>{" "}
                    Make offers based on 45 days of proven performance, not a
                    45-minute interview.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg">
                    <span className="font-semibold text-slate-900">
                      Save Engineering Hours:
                    </span>{" "}
                    Stop wasting your senior developers' time on endless
                    screening calls. We do the heavy lifting.
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg">
                    <span className="font-semibold text-slate-900">
                      Access Hidden Gems:
                    </span>{" "}
                    Tap into a national pool of high-potential talent from
                    overlooked Tier-2 and Tier-3 colleges.
                  </p>
                </div>
              </div>

              <Button
                variant="cta"
                size="lg"
                onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
                className="px-12 py-6 text-lg rounded-xl btn-premium glow-in-out"
              >
                Request My Free Pilot
              </Button>
              <p className="mt-4 text-sm text-slate-600 font-medium max-w-md">
                Fill out the form to see how we can build your custom talent
                pipeline.
              </p>
            </div>
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: "#C7D2FE", stopOpacity: 1}} />
                                            <stop offset="100%" style={{stopColor: "#E0E7FF", stopOpacity: 1}} />
                                        </linearGradient>
                                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: "#4F46E5", stopOpacity: 1}} />
                                            <stop offset="100%" style={{stopColor: "#1D9BF0", stopOpacity: 1}} />
                                        </linearGradient>
                                    </defs>
                                    {/* Background shape */}
                                    <path d="M50,50 Q250,-50 450,50 T450,350 Q250,450 50,350 T50,50 Z" fill="url(#grad1)" />

                                    {/* Chaotic resumes on left */}
                                    <rect x="60" y="150" width="80" height="10" fill="#A5B4FC" rx="2" transform="rotate(-15 100 155)"/>
                                    <rect x="80" y="180" width="90" height="10" fill="#A5B4FC" rx="2" transform="rotate(10 125 185)"/>
                                    <rect x="70" y="220" width="70" height="10" fill="#A5B4FC" rx="2" transform="rotate(-5 105 225)"/>

                                    {/* BroskiesHub processor in middle */}
                                    <rect x="200" y="150" width="100" height="100" fill="url(#grad2)" rx="15" />
                                    <path d="M220 180 l15 15 l30 -30" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"/>

                                    {/* Arrows showing flow */}
                                    <path d="M160 200 Q180 200 200 200" stroke="#6366F1" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                                    <path d="M195 195 L200 200 L195 205" stroke="#6366F1" strokeWidth="3" fill="none" />
                                    <path d="M300 200 Q320 200 340 200" stroke="#6366F1" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
                                    <path d="M335 195 L340 200 L335 205" stroke="#6366F1" strokeWidth="3" fill="none" />

                                    {/* Structured profiles on right */}
                                    <rect x="350" y="160" width="100" height="25" fill="#FFFFFF" rx="5" stroke="#E0E7FF"/>
                                    <circle cx="362" cy="172.5" r="5" fill="#10B981" />
                                    <rect x="372" y="170" width="40" height="5" fill="#C7D2FE" rx="2"/>

                                    <rect x="350" y="195" width="100" height="25" fill="#FFFFFF" rx="5" stroke="#E0E7FF"/>
                                    <circle cx="362" cy="207.5" r="5" fill="#10B981" />
                                    <rect x="372" y="205" width="50" height="5" fill="#C7D2FE" rx="2"/>

                                    <rect x="350" y="230" width="100" height="25" fill="#FFFFFF" rx="5" stroke="#E0E7FF"/>
                                    <circle cx="362" cy="242.5" r="5" fill="#10B981" />
                                    <rect x="372" y="240" width="30" height="5" fill="#C7D2FE" rx="2"/>

                                    <text x="250" y="350" font-family="Inter, sans-serif" font-size="14" fill="#64748B" text-anchor="middle">From Resume Chaos to Candidate Clarity</text>
                                </svg>
          </div>
        </div>
      </section>

      {/* Social Proof Section - University Logos */}
      <section className="py-16 bg-white scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 font-semibold text-lg mb-6 uppercase tracking-wide">
            Where Top University Talent Comes to Prove Their Skill
          </p>
          <div className="marquee group">
            <div className="marquee-track">
              {[...universityLogos, ...universityLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-16 px-4"
                >
                  <img
                    src={logo}
                    alt={`University ${index + 1}`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Secondary marquee (reverse direction) */}
          <div className="marquee group mt-6 marquee-two">
            <div className="marquee-track reverse">
              {[...universityLogos].reverse().concat([...universityLogos]).map((logo, index) => (
                <div key={`bottom-${index}`} className="flex justify-center items-center h-16 px-4">
                  <img
                    src={logo}
                    alt={`University alt ${index + 1}`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105 hover:drop-shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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
                Resumes lie. Coding tests are gamed. The result? A slow,
                expensive process that drains your best engineers and still
                results in bad hires.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    Your senior devs waste 20% of their time on interviews.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-orange-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    Nearly 50% of new hires are a poor fit and leave within 18
                    months.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-yellow-400">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <p className="text-slate-700 font-medium">
                    You're competing for the same 1% of talent from elite
                    colleges, ignoring a vast hidden talent pool.
                  </p>
                </div>
              </div>

              <Button
                variant="cta"
                onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
                className="px-10 py-4 text-lg rounded-xl"
              >
                Fix My Hiring Process
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gradient rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759252827/C-herSec1_2_umrapy.jpg"
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
            <Card className="border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">85%</h3>
                <p className="text-slate-600 font-medium">
                  Higher retention rate vs traditional hiring
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">70%</h3>
                <p className="text-slate-600 font-medium">
                  Faster time-to-hire process
                </p>
              </CardContent>
            </Card>

            <Card className="border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">90%</h3>
                <p className="text-slate-600 font-medium">
                  Engineering time saved on screening
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="cta"
              onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
              className="px-12 py-4 text-lg rounded-xl btn-premium"
            >
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
                <div className="absolute inset-0 bg-brand-gradient rounded-3xl transform -rotate-3 opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Custom talent pipeline"
                  className="relative rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-6 bg-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                CUSTOM SOLUTIONS
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Custom-Vetted Talent Pipelines
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop sifting through generic applicants. We work with you to
                design a 45-day work simulation based on your tech stack, your
                challenges, and your culture. Candidates prove they can do the
                job before you even see a resume.
              </p>
              <Button
                variant="cta"
                onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
                className="px-10 py-4 rounded-xl btn-premium"
              >
                Build My Pipeline
              </Button>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-reveal">
            <div>
              <Badge className="mb-6 bg-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                DATA-DRIVEN INSIGHTS
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Hire Based on Data, Not Gut Feel
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our AI-powered platform analyzes every commit, decision, and
                solution, generating a "Skill Passport" for each candidate. This
                deep performance report gives you undeniable proof of their
                abilities and learning potential.
              </p>
              <Button
                variant="cta"
                onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
                className="px-10 py-4 rounded-xl btn-premium"
              >
                See Sample Report
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Card className="legendary-card border border-slate-100/40 bg-white/95 shadow-xl p-8 max-w-sm text-center">
                <h4 className="text-lg font-semibold text-slate-900 mb-2 legendary-title">
                  Sample Skill Passport
                </h4>
                <p className="text-slate-600 mb-4">
                  Request a sample candidate report to see the depth of our
                  performance insights and Skill Passports.
                </p>
                <Button variant="cta" onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')} className="btn-premium">
                  Request Sample
                </Button>
              </Card>
            </div>
          </div>

          {/* Value Prop 3 - Comparison Table */}
          <div className="scroll-reveal">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium">
                PROVEN APPROACH
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
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
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="p-6 font-bold text-slate-900">Feature</th>
                      <th className="p-6 text-center">
                        <div className="font-bold text-transparent bg-[linear-gradient(90deg,#2626e7,#4b4bff)] bg-clip-text">
                          BroskiesHub
                        </div>
                      </th>
                      <th className="p-6 text-center font-medium text-slate-600">
                        Traditional Recruiters
                      </th>
                      <th className="p-6 text-center font-medium text-slate-600">
                        Job Boards
                      </th>
                      <th className="p-6 text-center font-medium text-slate-600">
                        Coding Platforms
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-semibold text-slate-900">
                        Vetting Method
                      </td>
                      <td className="p-6 text-center text-slate-900 font-medium">
                        45-Day Work Simulation
                      </td>
                      <td className="p-6 text-center">Resume Screening</td>
                      <td className="p-6 text-center">Keyword Matching</td>
                      <td className="p-6 text-center">
                        Generic Coding Puzzles
                      </td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-semibold text-slate-900">
                        Signal Quality
                      </td>
                      <td className="p-6 text-center">
                        <span className="font-bold text-2xl text-green-500">
                          ✓✓✓
                        </span>
                        <br />
                        <span className="text-sm text-slate-600">
                          (Proven Performance)
                        </span>
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
                    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-6 font-semibold text-slate-900">
                        Access to Hidden Gems
                      </td>
                      <td className="p-6 text-center">
                        <span className="font-bold text-2xl text-green-500">
                          ✓✓✓
                        </span>
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
                    <tr>
                      <td className="p-6 font-semibold text-slate-900">
                        Engineering Time Saved
                      </td>
                      <td className="p-6 text-center text-slate-900 font-bold text-lg">
                        &gt; 80%
                      </td>
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
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-[linear-gradient(90deg,rgba(38,38,231,0.15),rgba(75,75,255,0.15))] rounded-full"></div>

            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-brand-gradient rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                  1
                </div>
              </div>
              <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Define Your Ideal Hire
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tell us about the role. We'll co-design a custom work
                    simulation that tests for the exact skills you need.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-brand-gradient rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                  2
                </div>
              </div>
              <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    We Vet at Scale
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We deploy your challenge to our talent pool. Our AI analyzes
                    their work, identifying the top performers.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center relative">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-brand-gradient rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white shadow-2xl">
                  3
                </div>
              </div>
              <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Conduct Final Interviews
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    You receive a shortlist of 3-5 candidates with deep
                    performance data. You just make the final call.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              variant="cta"
              onClick={() => window.open('https://hire.broskieshub.com/', '_blank', 'noopener,noreferrer')}
              className="px-12 py-4 text-lg rounded-xl btn-premium glow-in-out"
            >
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
            <AccordionItem
              value="item-1"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What is the "Parallel Validation" pilot program?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                It's our risk-free guarantee. We'll build a custom project and
                vet candidates for one of your open roles. You run your existing
                hiring process in parallel. You only pay our placement fee if
                you hire a candidate we sourced. We're confident that our
                shortlist will outperform your traditional methods, and we're
                willing to prove it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What is your pricing model?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                We operate on a success-based model. We charge a placement fee
                of 8% of the candidate's first-year annual CTC, payable only
                upon a successful hire. There are no upfront costs to start the
                pilot program.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                How do you handle candidates using GenAI or Stack Overflow?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                We encourage it. Our philosophy is to test for real-world
                problem-solving, not rote memorization. In the real world, great
                developers use all the tools at their disposal. Our projects are
                complex enough that they can only be completed by someone who
                truly understands the subject, regardless of the tools they use.
                We see it as a sign of resourcefulness, not cheating.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What kind of roles are you best for?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                Our model is ideal for fresher and junior-level (0-2 years
                experience) technical roles where on-the-job learning ability
                and problem-solving skills are more critical than prior
                experience. This includes roles like Software Engineer,
                Backend/Frontend Developer, Data Analyst, and QA Engineer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                How long does the vetting process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                Our comprehensive 45-day work simulation provides deep insights
                into candidate performance. While this may seem longer than
                traditional screening, it eliminates months of back-and-forth
                interviews and dramatically reduces the risk of bad hires.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-slate-200 rounded-2xl px-8 py-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-xl font-bold text-slate-900 py-8 hover:no-underline">
                What if we're not satisfied with the candidates?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-8 text-lg leading-relaxed">
                That's the beauty of our Parallel Validation program. If our
                candidates don't meet your standards, you don't pay anything. We
                only succeed when you succeed, which is why we're committed to
                delivering exceptional talent.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-600 to-indigo-800 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 z-10 relative">Stop Wasting Time on Bad Hires</h2>
            <p className="text-indigo-100 max-w-3xl mx-auto mb-8 text-lg z-10 relative">
              Your next top performer is waiting in a Tier-2 city, ready to prove their skills. Let us find them for you. Start a risk-free pilot today and get a shortlist of proven candidates in weeks, not months.
            </p>
            <a href="https://hire.broskieshub.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 inline-block hover:bg-gray-200 shadow-lg z-10 relative">Claim My Risk-Free Pilot</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-50 to-blue-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759233080/BroskiesHub_Incubated_Logo_bwrago.png"
                  alt="BroskiesHub"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-slate-600 max-w-md leading-relaxed mb-6">
                Transforming how companies hire technical talent through proven
                performance validation.
              </p>

              <address className="not-italic text-sm text-slate-600 mb-4">
                Broskieshub, ACIC-KIF, KARE, Central Library 2nd Floor, Anand
                Nagar, Krishnan Koil, S.Ramachandrapuram, Virudhunagar,
                Srivilliputhur, Tamil Nadu, India 626126
              </address>
              <p className="text-sm text-slate-500">
                © 2025 BroskiesHub. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
                <div className="lg:col-span-2">
                    <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">For Companies</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">For Job Seekers</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Stories</a></li>
                        <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
                    </ul>
                </div>

            {/* Contact */}
                <div className="lg:col-span-3">
                    <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center">
                           <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" /><path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" /></svg>
                            <a href="mailto:support@broskieshub.com" className="hover:text-indigo-600 transition-colors">support@broskieshub.com</a>
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.528a1.5 1.5 0 01-1.491-.961l-.214-.642a13.51 13.51 0 01-8.604-8.604l-.642-.214A1.5 1.5 0 012 5.028V3.5z" clipRule="evenodd" /></svg>
                            <span>+91 8148040507</span>
                        </li>
                        <li className="flex items-start">
                             <svg className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.6-.5s.4-.519.5-.814c.1-.295.1-.62.1-.998V8.5a1 1 0 00-1-1h-1a1 1 0 100 2v.689a.5.5 0 01-.105.302l-.003.003a.994.994 0 01-.19.206c-.053.045-.11.08-.17.111a1.01 1.01 0 01-.21.096c-.06.024-.12.04-.18.05l-.004.002a.998.998 0 01-.25.04c-.07.006-.14.009-.21.01H10a1 1 0 00-1 1v6.5a1 1 0 001 1h.5a1 1 0 001-1v-.69c.003-.002.005-.005.007-.007l.006-.006a.995.995 0 01.189-.195c.053-.044.109-.08.168-.11a1.01 1.01 0 01.21-.097c.06-.024.12-.04.18-.05l.004-.002a.992.992 0 01.25-.04c.07-.006.14-.009.21-.01H12a1 1 0 100-2h-.5a1 1 0 00-1 1v.689a.5.5 0 01-.105.302l-.003.003a.994.994 0 01-.19.206c-.053.045-.11.08-.17.111a1.01 1.01 0 01-.21.096c-.06.024-.12.04-.18.05l-.004.002a.998.998 0 01-.25.04c-.07.006-.14.009-.21.01H10a1 1 0 00-1 1V18a1 1 0 001 1s.11.02.308-.067l.002-.001z" clipRule="evenodd" /><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2c-5.523 0-10-4.477-10-10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" clipRule="evenodd" /></svg>
                            <span>Broskieshub, ACIC-KIF, KARE, Central Library 2nd Floor, Anand Nagar, Krishnan Koil, S.Ramachandrapuram Virudhunagar Srivilliputhur Tamil Nadu India 626126</span>
                        </li>
                    </ul>
                </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-slate-600">Connect with us:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-[#2626e7] hover:text-white transition-all"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-[#2626e7] hover:text-white transition-all"
                  >
                    tw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
