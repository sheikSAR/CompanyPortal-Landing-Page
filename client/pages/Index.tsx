import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, MapPin, Star, ArrowRight, Users, Zap, Target, Shield } from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-6">
              <Button variant="outline" className="border-black bg-white text-black font-bold px-10">
                Logo
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-blue-500 rounded-full px-4 py-2">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-bold underline">333-333-3333</span>
                </div>
                <Button className="border border-black bg-white text-black font-bold px-12 hover:bg-gray-50">
                  CTA Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-gradient-to-r from-black/60 to-black/60"
        style={{
          backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                SOCIAL PROOF #1
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
                Hire Engineers Who Actually Deliver
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 bg-white text-black rounded-full p-1 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">
                    <span className="text-white font-semibold">De-risk Your Hiring:</span> Make offers based on 45 days of proven performance, not a 45-minute interview.
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 bg-white text-black rounded-full p-1 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">
                    <span className="text-white font-semibold">Save Engineering Hours:</span> Stop wasting your senior developers' time on endless screening calls.
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 bg-white text-black rounded-full p-1 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">
                    <span className="text-white font-semibold">Access Hidden Gems:</span> Tap into a national pool of high-potential talent from overlooked colleges.
                  </span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-black font-bold px-12 py-6 text-xl hover:bg-gray-100">
                Access Talent Now
              </Button>
              <p className="mt-4 text-sm text-gray-300 font-semibold">
                REDUCE Friction and FUDs (FEAR, UNCERTAINTY, DOUBTS)
              </p>
            </div>

            {/* Right - Lead Capture Form */}
            <Card className="max-w-lg mx-auto border-2 border-black bg-white shadow-2xl">
              <CardHeader className="text-center py-20">
                <CardTitle className="text-2xl">
                  Lead Capture Form to capitalize on Above the Fold real estate.
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">SOCIAL PROOF #2</h2>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 bg-gray-50 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
                Address the largest pain point that you solve and the "old way" while also tying in your unique benefit
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Use this section to paint a vivid picture of the ideal prospects pain points and expose the flaws of the status quo to acknowledge you know what they are going through. Complement this with your unique value prop and differentiator.
              </p>
              <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
            <div className="border-2 border-black bg-white h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section (Stats, Testimonials) */}
      <section className="py-20 bg-gray-200 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Social Proof Section (Stats, Testimonials, Case Studies, etc.)
            </h2>
            <Card className="border-2 border-black bg-white shadow-xl">
              <CardContent className="py-32 text-center">
                <h3 className="text-2xl font-bold text-black">Social Proof</h3>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions - Three Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Value Prop 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border-2 border-black bg-white h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Custom talent pipeline" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-gray-100 text-gray-700">DREAM OUTCOME SUMMARY</Badge>
              <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
                Value prop and Big Benefit #1 ("WIIFM")
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our solution does X, Y, Z (articulate main benefit you provide & explain how you do it in a proprietary or unique way).
              </p>
              <Button className="bg-purple-600 text-white font-bold px-12 py-4 hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
          </div>

          {/* Value Prop 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gray-100 text-gray-700">DREAM OUTCOME SUMMARY</Badge>
              <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
                Value prop and Big Benefit #2 ("WIIFM")
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our solution does X, Y, Z (articulate main benefit you provide & explain how you do it in a proprietary or unique way).
              </p>
              <Button className="bg-purple-600 text-white font-bold px-12 py-4 hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
            <div className="border-2 border-black bg-white h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Data-driven hiring" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Value Prop 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="border-2 border-black bg-white h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team performance" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-gray-100 text-gray-700">DREAM OUTCOME SUMMARY</Badge>
              <h3 className="text-4xl font-bold text-black mb-6 leading-tight">
                Value prop and Big Benefit #3 ("WIIFM")
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our solution does X, Y, Z (articulate main benefit you provide & explain how you do it in a proprietary or unique way).
              </p>
              <Button className="bg-purple-600 text-white font-bold px-12 py-4 hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section 2 */}
      <section className="py-20 bg-gray-200 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Social Proof Section (Stats, Testimonials, Case Studies, etc.)
            </h2>
            <Card className="border-2 border-black bg-white shadow-xl">
              <CardContent className="py-32 text-center">
                <h3 className="text-2xl font-bold text-black">Social Proof</h3>
              </CardContent>
            </Card>
            <div className="text-center mt-12">
              <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Driven Headline Section */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-12">
              Benefit Driven headline - how you do it as well as what makes you different
            </h2>
            <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700 mb-12">
              MAIN ACTION TO TAKE
            </Button>
            <div className="border-2 border-black bg-white rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Team collaboration process" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-200 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              How it works? {"{Make the perceived likelihood of achieving success high and effortless}"}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="py-32 text-center">
                  <h3 className="text-2xl font-bold text-black">Step #1</h3>
                </CardContent>
              </Card>
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="py-32 text-center">
                  <h3 className="text-2xl font-bold text-black">Step #2</h3>
                </CardContent>
              </Card>
              <Card className="border-2 border-black bg-white shadow-xl">
                <CardContent className="py-32 text-center">
                  <h3 className="text-2xl font-bold text-black">Step #3</h3>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700">
                MAIN ACTION TO TAKE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#241B41] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                What is the "Parallel Validation" pilot program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                It's our risk-free guarantee. We'll build a custom project and vet candidates for one of your open roles. You run your existing hiring process in parallel. You only pay our placement fee if you hire a candidate we sourced.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                How do you handle candidates using GenAI or Stack Overflow?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                We encourage it. Our philosophy is to test for real-world problem-solving, not rote memorization. In the real world, great developers use all the tools at their disposal.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                What kind of roles are you best for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Our model is ideal for fresher and junior-level (0-2 years experience) technical roles where on-the-job learning ability and problem-solving skills are more critical than prior experience.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                Question #4
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Answer content for question #4.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                Question #5
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Answer content for question #5.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-b border-black">
              <AccordionTrigger className="text-2xl font-bold text-[#241B41] py-6">
                Question #6
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                Answer content for question #6.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white border-b border-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Why should people take action today (create urgency)
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Articulate the one final reason that people should get in touch and reach out to your company for your services or product. This is your last chance to grab their attention.
          </p>
          <Button className="bg-purple-600 text-white font-bold px-12 py-6 text-xl hover:bg-purple-700">
            MAIN ACTION TO TAKE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-200 border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">Footer</h2>
          </div>
        </div>
      </footer>
    </div>
  );
}
