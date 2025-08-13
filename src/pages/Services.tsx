import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import servicesShowcase from "@/assets/services-showcase.jpg";
import techFlowBg from "@/assets/tech-flow-bg.jpg";

const Services = () => {
  const services = [
    {
      title: "AI Virtual Assistant Services",
      description: "Comprehensive administrative support powered by AI and human expertise.",
      details: "Admin, scheduling, research, email management",
      benefits: ["Save 20+ hours/week", "Calendar management", "Inbox zero achievement"],
      useCases: ["Executive assistance", "Customer communications", "Data research", "Task automation"]
    },
    {
      title: "Web & App Development",
      description: "Full-stack development solutions from landing pages to complex platforms.",
      details: "Landing pages, full platforms, mobile applications",
      benefits: ["Mobile-friendly design", "Secure architecture", "Optimized performance"],
      useCases: ["Portfolio sites", "E-commerce platforms", "Mobile apps", "Custom dashboards"]
    },
    {
      title: "Digital Marketing & Lead Generation",
      description: "Data-driven marketing strategies to grow your business.",
      details: "SEO, paid advertising, marketing automation, content creation",
      benefits: ["Increase engagement", "Higher ROI", "Better targeting"],
      useCases: ["Social media management", "Content marketing", "PPC campaigns", "Email marketing"]
    },
    {
      title: "Design & Branding",
      description: "Create compelling visual identities that resonate with your audience.",
      details: "Logos, social media kits, UI/UX design",
      benefits: ["Create lasting impressions", "Boost brand trust", "Increase conversions"],
      useCases: ["Brand identity design", "Website UI/UX", "Marketing materials", "Social media graphics"]
    },
    {
      title: "Data Services",
      description: "Transform raw data into actionable business insights.",
      details: "Data entry, dashboard creation, analysis and reporting",
      benefits: ["Excel cleanup", "Automated reporting", "Data visualization"],
      useCases: ["Business intelligence", "Market research", "Performance tracking", "Data migration"]
    },
    {
      title: "Customer Support Solutions",
      description: "24/7 customer experience management across all channels.",
      details: "Chat, email, and phone support solutions",
      benefits: ["24/7 availability", "Customer satisfaction", "Professional support"],
      useCases: ["Live chat support", "Help desk management", "Customer onboarding", "Technical support"]
    }
  ];

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <img src={servicesShowcase} alt="Services Showcase" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-text-reveal">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">
            Business Solutions Backed by Innovation and Talent
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover professionally managed services delivered by certified virtual experts. 
            Our solutions combine AI workflows with skilled human execution to drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Info */}
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <p className="text-primary font-semibold mb-6">{service.details}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <span className="text-primary mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="hero" size="lg">
                      Get Started
                    </Button>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.useCases.map((useCase, idx) => (
                        <div key={idx} className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm font-medium">{useCase}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-primary border-0 relative shadow-elegant">
            <div className="absolute inset-0 opacity-20 rounded-lg">
              <img src={techFlowBg} alt="Technology Background" className="w-full h-full object-cover rounded-lg" />
            </div>
            <CardContent className="p-12 relative">
              <h2 className="text-4xl font-bold text-white mb-6 font-grotesk animate-text-reveal">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get started with our professional services today and experience the power of AI + human collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                  <Link to="/join">Join Our Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;