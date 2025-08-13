import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/ai-robot-hero.jpg";
import neuralPattern from "@/assets/neural-pattern.jpg";
import aiBrainNeural from "@/assets/ai-brain-neural.jpg";
import techFlowBg from "@/assets/tech-flow-bg.jpg";
import aiHumanCollaboration from "@/assets/ai-human-collaboration.jpg";
import dataAnalyticsWorkspace from "@/assets/data-analytics-workspace.jpg";
import { TalentApplicationForm } from "@/components/forms/TalentApplicationForm";
import { ServiceRequestForm } from "@/components/forms/ServiceRequestForm";
import { AIChatbot } from "@/components/chatbot/AIChatbot";

const Index = () => {
  const [talentFormOpen, setTalentFormOpen] = useState(false);
  const [serviceFormOpen, setServiceFormOpen] = useState(false);
  const features = [
    {
      icon: "⚡",
      title: "AI-driven speed, precision, and automation",
      description: "Leverage cutting-edge AI to accelerate your workflows"
    },
    {
      icon: "🤝",
      title: "Human empathy, creativity, and decision-making",
      description: "Expert professionals bringing creative solutions"
    },
    {
      icon: "✅",
      title: "Vetted professionals with certified expertise",
      description: "Thoroughly screened and trained talent you can trust"
    },
    {
      icon: "🧠",
      title: "Real-time project support with hybrid assistance",
      description: "24/7 support combining AI efficiency with human insight"
    },
    {
      icon: "🌐",
      title: "Global delivery with local understanding",
      description: "Worldwide reach with cultural sensitivity and local expertise"
    },
    {
      icon: "🚀",
      title: "Scalable solutions for growth",
      description: "Future-ready infrastructure that grows with your business needs"
    }
  ];

  const services = [
    {
      title: "Virtual Assistant Services",
      description: "Admin, scheduling, research, email management to save you 20+ hours per week.",
      link: "/services"
    },
    {
      title: "Web & App Development",
      description: "Landing pages, full platforms, mobile-friendly and secure builds.",
      link: "/services"
    },
    {
      title: "Digital Marketing & Lead Gen",
      description: "SEO, ads, automation, content to increase engagement and ROI.",
      link: "/services"
    },
    {
      title: "Design & Branding",
      description: "Logos, social kits, UI/UX to create lasting impressions.",
      link: "/services"
    },
    {
      title: "Data Services",
      description: "Data entry, dashboards, analysis for informed business decisions.",
      link: "/services"
    },
    {
      title: "Customer Support",
      description: "Chat/email/phone support for 24/7 customer experience.",
      link: "/services"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      content: "Virtual Masters transformed our operations. We scaled from 5 to 50 clients in 6 months with their support.",
      image: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      company: "Growth Agency",
      content: "The hybrid AI + human approach is revolutionary. Our productivity increased by 300%.",
      image: "👨‍💻"
    },
    {
      name: "Priya Sharma",
      company: "E-commerce Co.",
      content: "From customer support to marketing campaigns, they handle everything seamlessly.",
      image: "👩‍🚀"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 opacity-30">
          <img src={heroImage} alt="AI Human Collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-neural animate-neural-pulse"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent leading-tight animate-float">
              Empower Your Business with AI + Human Expertise
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge services and hire top-tier trained professionals to supercharge your growth. 
              Whether you're a startup, coach, agency, or entrepreneur — we offer scalable human + AI support tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setServiceFormOpen(true)}
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto animate-pulse-glow font-grotesk"
              >
                Get Started Today
              </Button>
              <Button 
                onClick={() => setTalentFormOpen(true)}
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground font-grotesk"
              >
                Apply as Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={neuralPattern} alt="Neural Network" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-text-reveal">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">About The Virtual Masters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is to combine AI-powered tools with trained professionals to help businesses scale efficiently. 
              We bridge the gap between automation and human creativity, delivering solutions that are both innovative and empathetic.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent font-grotesk">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-ai-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-float">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Services Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button 
                    onClick={() => setServiceFormOpen(true)}
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Testimonials & Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={aiBrainNeural} alt="AI Brain Neural" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent font-grotesk">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-grotesk">Tell Us Your Needs</h3>
              <p className="text-muted-foreground">Share your project requirements and goals through our simple form or consultation call.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-grotesk">We Match & Deploy</h3>
              <p className="text-muted-foreground">Our AI matches you with the perfect talent combination and deploys resources within 24-48 hours.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-grotesk">Scale & Succeed</h3>
              <p className="text-muted-foreground">Watch your business grow with continuous AI + human support and optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-15">
          <img src={dataAnalyticsWorkspace} alt="Data Analytics" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent font-grotesk">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in-bounce">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2 font-mono">500+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center animate-scale-in-bounce" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2 font-mono">300%</div>
              <p className="text-muted-foreground">Average ROI Increase</p>
            </div>
            <div className="text-center animate-scale-in-bounce" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2 font-mono">50+</div>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center animate-scale-in-bounce" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-ai bg-clip-text text-transparent mb-2 font-mono">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <img src={techFlowBg} alt="Technology Flow" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent font-grotesk">Powered by Advanced Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['AI/ML Models', 'Cloud Infrastructure', 'Automation Tools', 'Analytics Platforms', 'Communication Systems', 'Project Management', 'Security Protocols', 'Quality Assurance'].map((tech, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:animate-float">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h3 className="font-semibold text-sm">{tech}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Talent CTA */}
      <section className="py-20 bg-gradient-primary relative">
        <div className="absolute inset-0 opacity-20">
          <img src={aiHumanCollaboration} alt="AI Human Collaboration" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join as Talent</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore remote career opportunities and join our mission to build India's next wave of talent.
          </p>
          <Button 
            onClick={() => setTalentFormOpen(true)}
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Apply as Talent
          </Button>
        </div>
      </section>

      {/* Forms */}
      <TalentApplicationForm 
        open={talentFormOpen} 
        onOpenChange={setTalentFormOpen} 
      />
      <ServiceRequestForm 
        open={serviceFormOpen} 
        onOpenChange={setServiceFormOpen} 
      />

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;