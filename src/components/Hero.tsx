import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Professional
                <span className="block text-accent">Transport</span>
                Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Reliable, efficient, and secure logistics services across the UK. 
                Your cargo is our priority, delivered with precision and care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="lg" className="group">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Call +44 20 7946 0958
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Deliveries Monthly</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Modern Fleet</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art vehicles equipped with GPS tracking</p>
                </div>
              </div>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">Fully Insured</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage for complete peace of mind</p>
                </div>
              </div>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-card">
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">On-Time Delivery</h3>
                  <p className="text-sm text-muted-foreground">99.5% on-time delivery rate guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;