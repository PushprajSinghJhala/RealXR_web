"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react"

// Countdown Timer Component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-primary/10 rounded-lg p-3">
        <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
        <div className="text-xs text-muted-foreground">Days</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-3">
        <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
        <div className="text-xs text-muted-foreground">Hours</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-3">
        <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
        <div className="text-xs text-muted-foreground">Minutes</div>
      </div>
      <div className="bg-primary/10 rounded-lg p-3">
        <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
        <div className="text-xs text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}

const lastSuccessfulEvent = {
  title: "XR Innovation Summit 2024",
  description:
    "A groundbreaking conference showcasing the latest advancements in Extended Reality technologies, featuring keynotes from industry leaders and hands-on workshops.",
  date: "March 15, 2024",
  location: "Tech Convention Center",
  attendees: 500,
  image: "/xr-conference-with-people-wearing-vr-headsets.jpg",
  highlights: ["50+ Speakers", "20+ Workshops", "Live VR Demos", "Networking Sessions"],
}

// Upcoming event date (30 days from now)
const upcomingEventDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

const upcomingEvent = {
  title: "Future of Mixed Reality Workshop",
  description:
    "An intensive workshop exploring the cutting-edge developments in Mixed Reality, featuring hands-on sessions with the latest MR devices and development tools.",
  date: upcomingEventDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  location: "Real XR Lab - Main Auditorium",
  capacity: 100,
  registered: 67,
}

const generalEvents = [
  {
    title: "VR Development Bootcamp",
    description: "5-day intensive course covering Unity VR development",
    date: "January 20, 2024",
    type: "Workshop",
    status: "Completed",
  },
  {
    title: "AR Research Symposium",
    description: "Academic conference on Augmented Reality research",
    date: "February 10, 2024",
    type: "Conference",
    status: "Completed",
  },
  {
    title: "Haptic Technology Demo Day",
    description: "Showcase of latest haptic feedback innovations",
    date: "April 5, 2024",
    type: "Demo",
    status: "Completed",
  },
  {
    title: "XR Ethics Panel Discussion",
    description: "Exploring ethical implications of Extended Reality",
    date: "May 18, 2024",
    type: "Panel",
    status: "Completed",
  },
  {
    title: "Student Research Presentations",
    description: "PhD and Master's students present their XR research",
    date: "June 22, 2024",
    type: "Presentation",
    status: "Completed",
  },
  {
    title: "Industry Partnership Forum",
    description: "Connecting academia with industry leaders",
    date: "July 15, 2024",
    type: "Forum",
    status: "Completed",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay connected with our latest events, workshops, and research presentations
          </p>
        </div>

        {/* Last Successful Event */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Last Successful Event</h3>
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={lastSuccessfulEvent.image || "/placeholder.svg"}
                  alt={lastSuccessfulEvent.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
                  <Badge variant="outline">Conference</Badge>
                </div>
                <CardTitle className="text-2xl mb-3">{lastSuccessfulEvent.title}</CardTitle>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {lastSuccessfulEvent.description}
                </CardDescription>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {lastSuccessfulEvent.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {lastSuccessfulEvent.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {lastSuccessfulEvent.attendees} Attendees
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Event Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lastSuccessfulEvent.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Event Summary
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Event */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Upcoming Event</h3>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Upcoming</Badge>
                <Badge variant="outline">Workshop</Badge>
              </div>
              <CardTitle className="text-2xl">{upcomingEvent.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{upcomingEvent.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Event Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {upcomingEvent.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {upcomingEvent.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {upcomingEvent.registered}/{upcomingEvent.capacity} Registered
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Registration Progress</span>
                      <span>{Math.round((upcomingEvent.registered / upcomingEvent.capacity) * 100)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(upcomingEvent.registered / upcomingEvent.capacity) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Register Now</Button>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Countdown to Event
                  </h4>
                  <CountdownTimer targetDate={upcomingEventDate} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* General Events */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">{event.status}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
