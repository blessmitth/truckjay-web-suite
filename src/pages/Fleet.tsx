import Navigation from "@/components/ui/navigation";
import { Truck, Package, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const Fleet = () => {
  const vehicles = [
    {
      name: "Small Van",
      capacity: "Up to 750kg",
      dimensions: "2.0m x 1.2m x 1.4m",
      ideal: "Small packages, documents, urgent deliveries",
      features: ["GPS tracking", "Refrigeration available", "Secure compartments"],
      image: "🚐"
    },
    {
      name: "Medium Van",
      capacity: "Up to 1.5 tonnes",
      dimensions: "3.2m x 1.7m x 1.8m",
      ideal: "Furniture, appliances, office equipment",
      features: ["Tail lift available", "Multiple tie-down points", "Weather protection"],
      image: "🚚"
    },
    {
      name: "Large Van",
      capacity: "Up to 3.5 tonnes",
      dimensions: "4.2m x 2.1m x 2.2m",
      ideal: "House moves, large deliveries, commercial goods",
      features: ["Professional drivers", "Loading assistance", "Insurance included"],
      image: "🚛"
    },
    {
      name: "7.5 Tonne Truck",
      capacity: "Up to 7.5 tonnes",
      dimensions: "6.2m x 2.4m x 2.5m",
      ideal: "Commercial deliveries, bulk transport",
      features: ["Hydraulic tail lift", "Pallet truck", "ADR certified drivers"],
      image: "🚚"
    },
    {
      name: "18 Tonne Truck",
      capacity: "Up to 18 tonnes",
      dimensions: "8.5m x 2.5m x 2.8m",
      ideal: "Large commercial loads, industrial equipment",
      features: ["Crane service", "Specialist handling", "Route planning"],
      image: "🚛"
    },
    {
      name: "Articulated Lorry",
      capacity: "Up to 44 tonnes",
      dimensions: "13.6m x 2.5m x 2.9m",
      ideal: "Long distance, full loads, distribution",
      features: ["Temperature control", "Multi-drop capability", "Customs clearance"],
      image: "🚛"
    }
  ];

  const specifications = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All vehicles undergo regular safety checks and maintenance"
    },
    {
      icon: Gauge,
      title: "GPS Tracking",
      description: "Real-time location monitoring for all our vehicles"
    },
    {
      icon: Package,
      title: "Secure Loading",
      description: "Professional loading equipment and secure tie-down systems"
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "Average fleet age under 3 years with Euro 6 emissions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Modern Fleet
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            State-of-the-art vehicles equipped with the latest technology 
            to ensure safe, efficient, and reliable transport of your goods.
          </p>
        </div>
      </section>

      {/* Fleet Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specifications.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {spec.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {spec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose the Right Vehicle
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse fleet ensures we have the perfect vehicle for your specific transport needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-card">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{vehicle.image}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {vehicle.name}
                  </h3>
                  <div className="text-accent font-semibold text-lg">
                    {vehicle.capacity}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-card-foreground mb-1">Dimensions</div>
                    <div className="text-sm text-muted-foreground">{vehicle.dimensions}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-card-foreground mb-1">Ideal For</div>
                    <div className="text-sm text-muted-foreground">{vehicle.ideal}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-card-foreground mb-2">Features</div>
                    <ul className="space-y-1">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Quote for {vehicle.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our transport experts can help you select the perfect vehicle for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Speak to an Expert
            </Button>
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;