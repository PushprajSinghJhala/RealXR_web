import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the leading research lab in Extended Reality, shaping the future of human-computer interaction through innovative XR technologies.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "We conduct cutting-edge research in XR technologies, develop practical applications, and train the next generation of XR researchers and developers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We push the boundaries of what's possible in XR, exploring new paradigms for immersive experiences and human augmentation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We foster interdisciplinary collaboration, working with industry partners and academic institutions to advance XR research globally.",
  },
]

export function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vision & <span className="text-primary">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our guiding principles and commitment to advancing Extended Reality research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
