import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">Real XR Lab</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Pioneering the future of Extended Reality through cutting-edge research, innovation, and immersive
              experiences.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#members" className="text-muted-foreground hover:text-primary transition-colors">
                  Members
                </a>
              </li>
              <li>
                <a href="#what-we-use" className="text-muted-foreground hover:text-primary transition-colors">
                  What We Use
                </a>
              </li>
              <li>
                <a href="#vision-mission" className="text-muted-foreground hover:text-primary transition-colors">
                  Vision & Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@realxrlab.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Research Ave, Tech City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">© 2024 Real XR Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
