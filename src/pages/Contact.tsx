import Navigation from "@/components/ui/navigation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+44 20 7946 0958", "+44 20 7946 0959"],
      subtitle: "24/7 Emergency Line Available"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@truckjay.co.uk", "quotes@truckjay.co.uk"],
      subtitle: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Transport House", "London Road, London SW1A 1AA"],
      subtitle: "Head Office & Operations"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 6:00 AM - 10:00 PM", "Sat-Sun: 8:00 AM - 6:00 PM"],
      subtitle: "Extended hours available"
    }
  ];

  const serviceAreas = [
    "London & Greater London",
    "Birmingham & West Midlands",
    "Manchester & Greater Manchester",
    "Leeds & Yorkshire",
    "Liverpool & Merseyside",
    "Bristol & South West",
    "Sheffield & South Yorkshire",
    "Newcastle & North East"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Truckjay
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch for a free quote or to discuss your transport requirements. 
            Our expert team is ready to help with all your logistics needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-muted-foreground">
                        {detail}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-accent">
                    {info.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Service Areas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h2 className="text-2xl font-bold text-card-foreground mb-6">
                Get Your Free Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+44 20 xxxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="local-delivery">Local Delivery</option>
                      <option value="long-distance">Long Distance Transport</option>
                      <option value="removal">Removal Services</option>
                      <option value="express">Express Delivery</option>
                      <option value="secure">Secure Transport</option>
                      <option value="international">International Shipping</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message / Requirements *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please describe your transport requirements, pickup/delivery locations, dates, and any special instructions..."
                  />
                </div>

                <Button type="submit" variant="accent" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Service Areas */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Service Areas
              </h2>
              <div className="bg-card rounded-lg p-6 shadow-card mb-8">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Primary Coverage Areas
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {area}
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-card-foreground">
                    <strong>National Coverage:</strong> We also provide services throughout England, Scotland, and Wales. 
                    Contact us for quotes to areas not listed above.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Emergency Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Need urgent transport? Our emergency service is available 24/7 for time-critical deliveries.
                </p>
                <Button variant="outline" className="w-full">
                  Call Emergency Line: +44 20 7946 0959
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in central London with easy access to major transport routes. 
              Appointments welcome for larger projects and contract discussions.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Head Office & Operations Center
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-card-foreground">Address</div>
                      <div className="text-muted-foreground">
                        123 Transport House<br />
                        London Road<br />
                        London SW1A 1AA
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <div className="font-medium text-card-foreground">Office Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 7:00 AM - 7:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed (Emergency calls only)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Contact us for detailed directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;