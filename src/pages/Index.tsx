import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import { Package, Truck, Shield, Clock, Star, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: Package,
      title: "Local Delivery",
      description: "Fast same-day delivery across London and surrounding areas with real-time tracking.",
      price: "From £25"
    },
    {
      icon: Truck,
      title: "Long Distance",
      description: "Reliable transport services covering all major UK cities with flexible scheduling.",
      price: "From £150"
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "High-value item transport with enhanced security and specialized handling.",
      price: "Custom Quote"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Urgent deliveries with guaranteed time slots for time-critical shipments.",
      price: "From £45"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Ltd",
      rating: 5,
      comment: "Exceptional service! Truckjay handled our office relocation seamlessly. Professional team and competitive pricing."
    },
    {
      name: "Michael Brown",
      company: "Brown Manufacturing",
      rating: 5,
      comment: "Reliable and punctual. We've used Truckjay for over 2 years for our logistics needs. Highly recommended!"
    },
    {
      name: "Emma Wilson",
      company: "Creative Agency",
      rating: 5,
      comment: "Outstanding customer service and attention to detail. They truly care about their clients and delivery quality."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Transport Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional logistics solutions tailored to your needs, from local deliveries to nationwide transport.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-6 shadow-card hover:shadow-primary transition-shadow group">
                  <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold">{service.price}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="accent" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Truckjay?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 15 years of excellence in transport and logistics across the UK.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Trusted by Hundreds
                  </h3>
                  <p className="text-muted-foreground">
                    Over 500 monthly deliveries with a 99.5% customer satisfaction rate.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Fully Insured
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive insurance coverage and professional liability protection.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Modern Fleet
                  </h3>
                  <p className="text-muted-foreground">
                    Latest vehicles with GPS tracking, from small vans to 44-tonne lorries.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-muted-foreground">
                    Round-the-clock customer support and emergency service availability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Get Your Free Quote
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                  <span className="text-card-foreground font-medium">Response Time</span>
                  <span className="text-accent font-semibold">Under 2 hours</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                  <span className="text-card-foreground font-medium">Free Quotations</span>
                  <span className="text-accent font-semibold">Always</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                  <span className="text-card-foreground font-medium">Emergency Service</span>
                  <span className="text-accent font-semibold">24/7 Available</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <Button variant="accent" size="lg" className="w-full">
                  Get Instant Quote
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +44 20 7946 0958
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from satisfied clients across the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Move Forward?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact Truckjay today for a free quote and experience the difference professional transport makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View Our Fleet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
