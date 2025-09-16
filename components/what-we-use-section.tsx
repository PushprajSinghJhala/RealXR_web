import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    category: "VR/AR Platforms",
    tools: ["Unity 3D", "Unreal Engine", "OpenXR", "WebXR", "ARCore", "ARKit"],
  },
  {
    category: "Programming Languages",
    tools: ["C#", "C++", "JavaScript", "Python", "HLSL", "GLSL"],
  },
  {
    category: "Hardware",
    tools: ["Meta Quest", "HoloLens", "Varjo Aero", "HTC Vive", "Leap Motion"],
  },
  {
    category: "Research Tools",
    tools: ["MATLAB", "R", "TensorFlow", "PyTorch", "Blender", "Maya"],
  },
]

export function WhatWeUseSection() {
  return (
    <section id="what-we-use" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We <span className="text-primary">Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our technology stack and tools that power groundbreaking XR research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
