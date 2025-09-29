import Navigation from "@/components/ui/navigation";
import { Award, Users, Truck, Clock, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Monthly Deliveries", icon: Truck },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "99.5%", label: "On-Time Rate", icon: Award }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every delivery, ensuring the highest standards of service quality."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Consistent, dependable service you can count on, with a proven track record of success."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building long-term partnerships with our clients based on trust, transparency, and mutual respect."
    },
    {
      icon: MapPin,
      title: "Innovation",
      description: "Embracing new technologies and methods to continuously improve our service offerings."
    }
  ];

  const team = [
    {
      name: "James Mitchell",
      role: "Managing Director",
      experience: "20+ years in logistics",
      email: "james.mitchell@truckjay.co.uk"
    },
    {
      name: "Sarah Thompson",
      role: "Operations Manager",
      experience: "15+ years operations",
      email: "sarah.thompson@truckjay.co.uk"
    },
    {
      name: "David Wilson",
      role: "Fleet Manager",
      experience: "12+ years fleet management",
      email: "david.wilson@truckjay.co.uk"
    },
    {
      name: "Emma Roberts",
      role: "Customer Service Manager",
      experience: "8+ years customer service",
      email: "emma.roberts@truckjay.co.uk"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Truckjay
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted transport partner for over 15 years, delivering excellence 
            and reliability across the UK with our professional team and modern fleet.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Truckjay began as a small local delivery service in London 
                  with just two vans and a vision to provide reliable, professional transport 
                  solutions for businesses and individuals across the UK.
                </p>
                <p>
                  Over the years, we've grown from strength to strength, expanding our fleet, 
                  increasing our coverage area, and building a reputation for excellence that 
                  spans the entire country. Today, we're proud to serve hundreds of satisfied 
                  customers with our comprehensive range of transport services.
                </p>
                <p>
                  Our success is built on a simple philosophy: treat every delivery as if it 
                  were our own. This approach has earned us the trust of businesses ranging 
                  from small startups to major corporations, all of whom rely on our 
                  expertise to keep their operations running smoothly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-card-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To provide exceptional transport services that exceed customer expectations.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h3 className="font-semibold text-card-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the UK's most trusted and innovative logistics partner.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card col-span-2">
                <h3 className="font-semibold text-card-foreground mb-2">Our Promise</h3>
                <p className="text-sm text-muted-foreground">
                  Every delivery handled with care, professionalism, and complete reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with customers, partners, and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to providing exceptional service and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-card text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <div className="text-accent font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {member.experience}
                </div>
                <div className="text-xs text-muted-foreground">
                  {member.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the Truckjay difference. Contact us today to discuss your transport needs 
            and discover how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg">
              Call +44 20 7946 0958
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;