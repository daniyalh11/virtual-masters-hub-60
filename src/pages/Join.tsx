import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import careerGrowth from "@/assets/career-growth.jpg";
import dataAnalyticsWorkspace from "@/assets/data-analytics-workspace.jpg";

const Join = () => {
  const applicantTypes = [
    "GED holders & fresh graduates",
    "Career switchers looking for new opportunities",
    "Women rejoining the workforce",
    "Remote job seekers worldwide"
  ];

  const certifications = [
    "Virtual Assistant Essentials",
    "Google Workspace Certification",
    "HubSpot Marketing Certification",
    "Microsoft Office Specialist",
    "Digital Marketing Fundamentals",
    "Customer Support Excellence"
  ];

  const careerStages = [
    {
      stage: "Stage 1: Entry-Level",
      roles: "Data Entry, Chat Support",
      tools: "Zoom, Slack, Gmail",
      income: "₹10K–₹18K/mo",
      description: "Start your journey with foundational skills and basic client interaction."
    },
    {
      stage: "Stage 2: Skill-Building",
      roles: "VA, Content Writer, Junior Marketer",
      tools: "Canva, Grammarly, Asana",
      income: "₹15K–₹30K/mo",
      description: "Develop specialized skills and take on more complex projects."
    },
    {
      stage: "Stage 3: Mid-Level Pro",
      roles: "Client Manager, Social Media Manager",
      tools: "Analytics, CRM, Project Management",
      income: "₹25K–₹60K/mo",
      description: "Lead client relationships and manage team projects with authority."
    },
    {
      stage: "Stage 4: Specialist",
      roles: "Grant Writer, Content Creator",
      tools: "Advanced Analytics, Strategy Tools",
      income: "₹50K–₹4L+/mo",
      description: "Become a subject matter expert and build your professional authority."
    },
    {
      stage: "Stage 5: Business Owner",
      roles: "Agency Owner, Consultant",
      tools: "Business Management Suite",
      income: "Unlimited potential",
      description: "Scale your own virtual services business with our mentorship and support."
    }
  ];

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <img src={careerGrowth} alt="Career Growth" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-text-reveal">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">
            Launch Your Career with The Virtual Masters
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join our mission to build India's next wave of remote talent. We train, certify, and place you with real clients worldwide.
          </p>
        </div>

        {/* Who Can Apply */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Who Can Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicantTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">👥</div>
                  <p className="font-medium">{type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Training Structure */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Training Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-3">100% Online & Flexible</h3>
                <p className="text-muted-foreground">Learn at your own pace with flexible scheduling that fits your lifestyle.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-3">Industry Tools</h3>
                <p className="text-muted-foreground">Master essential tools like Canva, Trello, WordPress, and more.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold mb-3">Live Mentorship</h3>
                <p className="text-muted-foreground">Get guidance from industry experts and skill assessments.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <span className="text-primary mr-3">🏆</span>
                    <h3 className="font-semibold">{cert}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Growth Path */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 opacity-10 rounded-lg">
            <img src={dataAnalyticsWorkspace} alt="Analytics Workspace" className="w-full h-full object-cover rounded-lg" />
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 font-grotesk relative">From Zero to CEO: Your Growth Ladder</h2>
          <div className="space-y-8">
            {careerStages.map((stage, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{stage.stage}</h3>
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Roles</h4>
                      <p className="text-sm text-muted-foreground">{stage.roles}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Tools</h4>
                      <p className="text-sm text-muted-foreground">{stage.tools}</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold mb-1">Income</h4>
                      <p className="text-lg font-bold text-primary">{stage.income}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Opportunities */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Work Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Global Clients</h3>
                <p className="text-muted-foreground">Work with clients from around the world on diverse projects.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-3">Performance Growth</h3>
                <p className="text-muted-foreground">Advance your career based on performance and client feedback.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">Remote Freedom</h3>
                <p className="text-muted-foreground">Work from anywhere with flexible hours and freedom.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 shadow-elegant">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6 font-grotesk animate-text-reveal">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who have transformed their careers with Virtual Masters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                  <Link to="/contact">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                  <Link to="/about">View Training Path</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Join;