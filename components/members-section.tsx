import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

const members = [
  {
    name: "Dr. Sarah Chen",
    role: "Lab Director",
    expertise: ["VR Research", "Computer Vision", "HCI"],
    image: "/professional-woman-researcher.png",
  },
  {
    name: "Prof. Michael Rodriguez",
    role: "Senior Researcher",
    expertise: ["AR Development", "3D Graphics", "Machine Learning"],
    image: "/professional-man-researcher.png",
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Scientist",
    expertise: ["Haptic Technology", "User Experience", "Psychology"],
    image: "/professional-woman-scientist.png",
  },
  {
    name: "Alex Kim",
    role: "PhD Student",
    expertise: ["Mixed Reality", "Software Engineering", "AI"],
    image: "/young-professional-researcher.jpg",
  },
]

export function MembersSection() {
  return (
    <section id="members" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Meet the brilliant minds driving innovation in Extended Reality research
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-2">
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
