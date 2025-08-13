import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import aiBrainNeural from "@/assets/ai-brain-neural.jpg";

const About = () => {
  const teamMembers = [
    {
      role: "Industry Experts",
      description: "10+ years of experience in virtual services and business operations",
      icon: "👨‍💼"
    },
    {
      role: "Career Coaches", 
      description: "Dedicated professionals helping you navigate your career path",
      icon: "🎯"
    },
    {
      role: "Live Project Mentors",
      description: "Real-time guidance on actual client projects and challenges",
      icon: "🚀"
    },
    {
      role: "AI & Tech Professionals",
      description: "Cutting-edge technology experts ensuring optimal workflow integration",
      icon: "🤖"
    }
  ];

  const impactStats = [
    {
      number: "300+",
      label: "Trained Professionals",
      description: "Successfully certified and placed in global positions"
    },
    {
      number: "500+",
      label: "Completed Projects", 
      description: "Delivered across various industries and business sizes"
    },
    {
      number: "80%",
      label: "Job Placement Rate",
      description: "Within 90 days of program completion"
    },
    {
      number: "12+",
      label: "Countries Served",
      description: "Global reach with clients worldwide"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <img src={teamCollaboration} alt="Team Collaboration" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-text-reveal">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between business needs and skilled talent through innovative training and AI-enhanced workflows.
          </p>
        </div>

        {/* Founders' Story */}
        <section className="mb-20">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-center mb-8">Founders' Story</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Built to solve the dual challenge: lack of skilled workforce and remote job access. 
                  Our platform blends AI and human training to drive growth for both businesses and individuals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We recognized that while businesses struggle to find reliable virtual talent, 
                  countless skilled individuals lack access to quality remote opportunities. 
                  Our solution combines the best of both worlds - advanced AI tools with comprehensive human training.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-primary">Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver intelligent business services while building global-ready careers. 
                  We empower businesses with skilled virtual teams and provide individuals with 
                  meaningful remote work opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-secondary">Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every business deserves a virtual team. Every individual deserves remote freedom. 
                  We envision a world where geographical boundaries don't limit business growth or career opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team & Mentors */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Team & Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{member.role}</h3>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact So Far */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 opacity-10 rounded-lg">
            <img src={aiBrainNeural} alt="AI Neural Network" className="w-full h-full object-cover rounded-lg" />
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 font-grotesk relative">Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why This Works */}
        <section className="mb-20">
          <Card className="bg-gradient-primary border-0">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white text-center mb-8">Why This Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-4">Clear Structure</h3>
                  <ul className="space-y-2">
                    <li>• Structured career progression path</li>
                    <li>• AI-enhanced productivity tools</li>
                    <li>• Global client opportunities</li>
                    <li>• Performance-based advancement</li>
                  </ul>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                  <ul className="space-y-2">
                    <li>• Flexible remote work environment</li>
                    <li>• Scalable income potential</li>
                    <li>• Continuous learning opportunities</li>
                    <li>• Real-world project experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-card border-border shadow-ai-glow">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're a business looking for skilled virtual support or an individual seeking remote career opportunities, 
                we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/join">Apply as Talent</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;