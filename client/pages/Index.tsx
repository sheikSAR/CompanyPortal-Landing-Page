import React, { useState, useEffect, useRef } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FomoAlert from "@/components/FomoAlert";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Hero section animations
    const heroContext = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".hero-badge", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.1,
      }, 0);

      tl.to(".hero-title", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }, 0.2);

      tl.to(".hero-subtitle", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }, 0.4);

      tl.to(".hero-feature", {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.1,
      }, 0.5);

      tl.to(".hero-cta", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }, 0.8);

      // SVG animation
      tl.to(".hero-image", {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      }, 0);

      // Floating animation for SVG
      gsap.to(".hero-image", {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }, 1);
    }, heroRef);

    return () => heroContext.revert();
  }, []);

  // Scroll reveal animations
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    revealElements.forEach((element) => {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
      {/* FOMO Alert Banner */}
      <FomoAlert />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-12 lg:py-16 min-h-[80vh] flex items-center"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff,#eef2ff,rgba(38,38,231,0.06))]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <Badge className="hero-badge mb-6 bg-blue-100 text-slate-700 border-none px-4 py-2 rounded-full font-medium opacity-0 translate-y-4">
                TRUSTED BY INNOVATIVE HIRING TEAMS
              </Badge>
              <h1 className="hero-title text-4xl lg:text-6xl font-bold leading-tight mb-6 gradient-flow bg-clip-text text-transparent opacity-0 translate-y-4">
                Hire Engineers Who Actually Deliver
              </h1>
              <p className="hero-subtitle text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl opacity-0 translate-y-4">
                Get a pipeline of top-tier talent who have already proven they
                can solve your real-world problems.
              </p>

              <div className="space-y-5 mb-10">
                <div className="hero-feature flex items-start gap-4 group opacity-0 translate-y-4" style={{ animationDelay: "0.7s" }}>
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                <div className="hero-feature flex items-start gap-4 group opacity-0 translate-y-4" style={{ animationDelay: "0.8s" }}>
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                <div className="hero-feature flex items-start gap-4 group opacity-0 translate-y-4" style={{ animationDelay: "0.9s" }}>
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                onClick={() =>
                  window.open(
                    "https://hire.broskieshub.com/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="hero-cta px-12 py-6 text-lg rounded-xl btn-premium cta-pulse opacity-0 translate-y-4"
              >
                Request My Free Pilot
              </Button>
              <p className="mt-4 text-sm text-slate-600 font-medium max-w-md">
                Fill out the form to see how we can build your custom talent
                pipeline.
              </p>
            </div>
            <svg
              ref={svgRef}
              className="hero-image hero-3d-animation opacity-0 scale-95"
              viewBox="0 0 500 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#C7D2FE", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#E0E7FF", stopOpacity: 1 }}
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#4F46E5", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#1D9BF0", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <path
                d="M50,50 Q250,-50 450,50 T450,350 Q250,450 50,350 T50,50 Z"
                fill="url(#grad1)"
              />

              <rect
                x="60"
                y="150"
                width="80"
                height="10"
                fill="#A5B4FC"
                rx="2"
                transform="rotate(-15 100 155)"
              />
              <rect
                x="80"
                y="180"
                width="90"
                height="10"
                fill="#A5B4FC"
                rx="2"
                transform="rotate(10 125 185)"
              />
              <rect
                x="70"
                y="220"
                width="70"
                height="10"
                fill="#A5B4FC"
                rx="2"
                transform="rotate(-5 105 225)"
              />

              <rect
                x="200"
                y="150"
                width="100"
                height="100"
                fill="url(#grad2)"
                rx="15"
              />
              <path
                d="M220 180 l15 15 l30 -30"
                stroke="white"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M160 200 Q180 200 200 200"
                stroke="#6366F1"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M195 195 L200 200 L195 205"
                stroke="#6366F1"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M300 200 Q320 200 340 200"
                stroke="#6366F1"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
              />
              <path
                d="M335 195 L340 200 L335 205"
                stroke="#6366F1"
                strokeWidth="3"
                fill="none"
              />

              <rect
                x="350"
                y="160"
                width="100"
                height="25"
                fill="#FFFFFF"
                rx="5"
                stroke="#E0E7FF"
              />
              <circle cx="362" cy="172.5" r="5" fill="#10B981" />
              <rect
                x="372"
                y="170"
                width="40"
                height="5"
                fill="#C7D2FE"
                rx="2"
              />

              <rect
                x="350"
                y="195"
                width="100"
                height="25"
                fill="#FFFFFF"
                rx="5"
                stroke="#E0E7FF"
              />
              <circle cx="362" cy="207.5" r="5" fill="#10B981" />
              <rect
                x="372"
                y="205"
                width="50"
                height="5"
                fill="#C7D2FE"
                rx="2"
              />

              <rect
                x="350"
                y="230"
                width="100"
                height="25"
                fill="#FFFFFF"
                rx="5"
                stroke="#E0E7FF"
              />
              <circle cx="362" cy="242.5" r="5" fill="#10B981" />
              <rect
                x="372"
                y="240"
                width="30"
                height="5"
                fill="#C7D2FE"
                rx="2"
              />

              <text
                x="250"
                y="350"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fill="#64748B"
                textAnchor="middle"
              >
                From Resume Chaos to Candidate Clarity
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Social Proof Section - University Logos */}
      <section className="py-16 bg-white scroll-reveal opacity-0 translate-y-10">
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

          <div className="marquee group mt-6 marquee-two">
            <div className="marquee-track reverse">
              {[...universityLogos]
                .reverse()
                .concat([...universityLogos])
                .map((logo, index) => (
                  <div
                    key={`bottom-${index}`}
                    className="flex justify-center items-center h-16 px-4"
                  >
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
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 scroll-reveal opacity-0 translate-y-10">
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
                onClick={() =>
                  window.open(
                    "https://hire.broskieshub.com/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="px-10 py-4 text-lg rounded-xl cta-pulse"
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
      <section className="py-24 bg-gradient-to-r from-slate-100 to-blue-100 scroll-reveal opacity-0 translate-y-10">
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
              onClick={() =>
                window.open(
                  "https://hire.broskieshub.com/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="px-12 py-4 text-lg rounded-xl btn-premium cta-pulse"
            >
              See Our Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions - Three Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-reveal opacity-0 translate-y-10">
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
                onClick={() =>
                  window.open(
                    "https://hire.broskieshub.com/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="px-10 py-4 rounded-xl btn-premium cta-pulse"
              >
                Build My Pipeline
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center scroll-reveal opacity-0 translate-y-10">
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
                onClick={() =>
                  window.open(
                    "https://hire.broskieshub.com/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="px-10 py-4 rounded-xl btn-premium cta-pulse"
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
                <Button
                  variant="cta"
                  onClick={() =>
                    window.open(
                      "https://hire.broskieshub.com/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="btn-premium cta-pulse"
                >
                  Request Sample
                </Button>
              </Card>
            </div>
          </div>

          <div className="scroll-reveal opacity-0 translate-y-10">
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
      <section className="py-24 bg-gradient-to-br from-slate-100 to-blue-100 scroll-reveal opacity-0 translate-y-10">
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
              onClick={() =>
                window.open(
                  "https://hire.broskieshub.com/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="px-12 py-4 text-lg rounded-xl btn-premium cta-pulse"
            >
              Start My Custom Process
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white scroll-reveal opacity-0 translate-y-10" id="faq">
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
      <section id="final-cta" className="py-20 md:py-24 bg-white scroll-reveal opacity-0 translate-y-10">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-600 rounded-2xl p-10 md:p-16 text-center shadow-2xl bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-600 to-indigo-800 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
              }}
            />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 z-10 relative">
              Stop Wasting Time on Bad Hires
            </h2>
            <p className="text-indigo-100 max-w-3xl mx-auto mb-8 text-lg z-10 relative">
              Your next top performer is waiting in a Tier-2 city, ready to
              prove their skills. Let us find them for you. Start a risk-free
              pilot today and get a shortlist of proven candidates in weeks, not
              months.
            </p>
            <a
              href="https://hire.broskieshub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105 inline-block hover:bg-gray-200 shadow-lg z-10 relative cta-pulse"
            >
              Claim My Risk-Free Pilot
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
