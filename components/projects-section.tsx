import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Immersive Learning Platform",
    description: "VR-based educational platform for interactive learning experiences",
    tags: ["VR", "Education", "Unity"],
    status: "Active",
  },
  {
    title: "AR Navigation System",
    description: "Augmented reality wayfinding solution for complex indoor environments",
    tags: ["AR", "Navigation", "Mobile"],
    status: "Completed",
  },
  {
    title: "Haptic Feedback Research",
    description: "Advanced haptic technologies for enhanced virtual interactions",
    tags: ["Haptics", "Research", "Hardware"],
    status: "Active",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our cutting-edge research projects that push the boundaries of XR technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={project.status === "Active" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
