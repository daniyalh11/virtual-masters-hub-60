import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import contactWorkspace from "@/assets/contact-workspace.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: "hello@thevirtualmasters.com",
      description: "Drop us a line anytime"
    },
    {
      icon: "📞",
      title: "Phone", 
      detail: "+91-XXXX-XXXXXX",
      description: "Call us during business hours"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      detail: "Mon–Fri, 9:00 AM – 6:00 PM IST",
      description: "We're here to help"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative">
      <div className="absolute inset-0 opacity-10">
        <img src={contactWorkspace} alt="Contact Workspace" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-text-reveal">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent font-grotesk">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a project or want to build your remote career? Reach out to our team and let's make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-muted/50 border-border"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-muted/50 border-border"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-base font-medium">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 bg-muted/50 border-border"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-muted/50 border-border min-h-[120px]"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're always excited to hear from potential clients and talented individuals 
                  looking to join our growing community. Choose the best way to reach us.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-primary font-medium">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-primary border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 font-grotesk">Quick Actions</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Looking for something specific? These links might help you get started faster.
                </p>
                <div className="space-y-3">
                  <Button asChild variant="secondary" className="w-full justify-start hover:scale-105 transition-transform">
                    <a href="mailto:hello@thevirtualmasters.com">
                      📧 Email Us Directly
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                    <Link to="/services">
                      🛠️ View Our Services
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                    <Link to="/join">
                      💼 Apply for Positions
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Preview */}
            <Card className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">How quickly can we get started?</h4>
                    <p className="text-sm text-muted-foreground">Most projects can begin within 48-72 hours of initial consultation.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What's the application process?</h4>
                    <p className="text-sm text-muted-foreground">Our talent application includes skills assessment, interview, and training program.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Do you offer custom solutions?</h4>
                    <p className="text-sm text-muted-foreground">Yes, we tailor our services to meet your specific business requirements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;