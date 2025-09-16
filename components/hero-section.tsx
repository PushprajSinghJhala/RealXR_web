import { Button } from "@/components/ui/button"
import { ArrowRight, Laptop, Headphones } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Content */}
          <div className="relative flex items-center justify-center gap-8 lg:gap-16 mb-8">
            {/* Left Laptop Illustration */}
            <div className="hidden lg:block animate-float">
              <div className="relative">
                <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center animate-glow">
                  <Laptop className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2">
                  Real <span className="text-primary">XR</span> Lab
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-xl -z-10"></div>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8 text-balance">
                Pioneering the future of Extended Reality through cutting-edge research, innovation, and immersive
                experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Explore Our Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Join Our Team
                </Button>
              </div>
            </div>

            {/* Right VR Headset Illustration */}
            <div className="hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
              <div className="relative">
                <div
                  className="w-24 h-24 bg-secondary/10 rounded-2xl flex items-center justify-center animate-glow"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Headphones className="w-12 h-12 text-secondary" />
                </div>
                <div
                  className="absolute -top-2 -left-2 w-6 h-6 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Mobile Illustrations */}
          <div className="lg:hidden flex justify-center gap-8 mb-8">
            <div className="animate-float">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center animate-glow">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div
                className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center animate-glow"
                style={{ animationDelay: "0.5s" }}
              >
                <Headphones className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Research Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Publications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
