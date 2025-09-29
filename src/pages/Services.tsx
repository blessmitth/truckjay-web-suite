import Navigation from "@/components/ui/navigation";
import { Package, Truck, Users, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Local Delivery",
      description: "Fast and reliable local delivery services across London and surrounding areas. Same-day delivery available.",
      features: ["Same-day delivery", "Real-time tracking", "Secure handling", "Flexible scheduling"],
      price: "From £25"
    },
    {
      icon: Truck,
      title: "Long Distance Transport",
      description: "National transport services covering all major UK cities with scheduled and express options.",
      features: ["UK-wide coverage", "Express options", "Bulk discounts", "Insurance included"],
      price: "From £150"
    },
    {
      icon: Users,
      title: "Removal Services",
      description: "Professional home and office removal services with experienced teams and protective equipment.",
      features: ["Packing service", "Furniture protection", "Assembly/disassembly", "Storage options"],
      price: "From £200"
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Urgent delivery services with guaranteed time slots for time-critical shipments.",
      features: ["4-hour delivery", "Priority handling", "Live updates", "Dedicated driver"],
      price: "From £45"
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "High-value item transport with enhanced security measures and specialized vehicles.",
      features: ["GPS monitoring", "Secure vehicles", "Background-checked drivers", "Full insurance"],
      price: "Custom Quote"
    },
    {
      icon: MapPin,
      title: "International Shipping",
      description: "Cross-border shipping solutions with customs handling and door-to-door service.",
      features: ["Customs clearance", "Door-to-door", "Multiple carriers", "Tracking included"],
      price: "From £80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Transport Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your specific needs. 
            From local deliveries to international shipping, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card rounded-lg p-8 shadow-card hover:shadow-primary transition-shadow">
                  <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-card-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <Button variant="outline" size="sm">Get Quote</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business has unique transport needs. Contact our team to discuss 
            a tailored solution that fits your requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Contact Our Team
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

export default Services;