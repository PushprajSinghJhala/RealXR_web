"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { UserPlus, MessageSquare, Send } from "lucide-react"

export function FormsSection() {
  const { toast } = useToast()
  const [joinUsForm, setJoinUsForm] = useState({
    name: "",
    email: "",
    skills: "",
    reason: "",
  })
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    feedback: "",
  })

  const handleJoinUsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    })
    setJoinUsForm({ name: "", email: "", skills: "", reason: "" })
  }

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    toast({
      title: "Feedback Received!",
      description: "Thank you for your feedback. We appreciate your input.",
    })
    setFeedbackForm({ name: "", email: "", feedback: "" })
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get <span className="text-primary">Involved</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join our team or share your thoughts with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Join Us Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Join Our Team</CardTitle>
                  <CardDescription>Interested in XR research? We'd love to hear from you!</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleJoinUsSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="join-name">Name *</Label>
                  <Input
                    id="join-name"
                    type="text"
                    placeholder="Your full name"
                    value={joinUsForm.name}
                    onChange={(e) => setJoinUsForm({ ...joinUsForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="join-email">Email *</Label>
                  <Input
                    id="join-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={joinUsForm.email}
                    onChange={(e) => setJoinUsForm({ ...joinUsForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="join-skills">Skills *</Label>
                  <Textarea
                    id="join-skills"
                    placeholder="Tell us about your relevant skills and experience (e.g., Unity, C#, 3D modeling, research experience)"
                    value={joinUsForm.skills}
                    onChange={(e) => setJoinUsForm({ ...joinUsForm, skills: e.target.value })}
                    required
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="join-reason">Why You Want to Join *</Label>
                  <Textarea
                    id="join-reason"
                    placeholder="What motivates you to join our XR research lab? What are your goals and interests?"
                    value={joinUsForm.reason}
                    onChange={(e) => setJoinUsForm({ ...joinUsForm, reason: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full group">
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Feedback Form */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Share Your Feedback</CardTitle>
                  <CardDescription>We value your thoughts and suggestions</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback-name">Name *</Label>
                  <Input
                    id="feedback-name"
                    type="text"
                    placeholder="Your full name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback-email">Email *</Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback-message">Feedback Message *</Label>
                  <Textarea
                    id="feedback-message"
                    placeholder="Share your thoughts, suggestions, or questions about our research, website, or lab activities"
                    value={feedbackForm.feedback}
                    onChange={(e) => setFeedbackForm({ ...feedbackForm, feedback: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full group">
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  Send Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Other Ways to Connect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Email:</strong> info@realxrlab.com
                </div>
                <div>
                  <strong className="text-foreground">Phone:</strong> +1 (555) 123-4567
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-foreground">Address:</strong> 123 Research Ave, Tech City, TC 12345
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
