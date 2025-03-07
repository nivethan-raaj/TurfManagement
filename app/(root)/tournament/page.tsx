"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Trophy, Users, Star, User, MapPin } from "lucide-react"
import { formatDate } from "@/utils/format-date"
import { tournaments, coaches } from "@/data"

export default function TournamentCoachBookingPage() {
  const [priceRange, setPriceRange] = useState([0, 500])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Tournament and Coach Booking</h1>
            <p className="text-xl mb-8">Find and book tournaments or expert coaches for your sport</p>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-6">
                <form className="flex flex-wrap gap-4">
                  <Input type="text" placeholder="Search tournaments or coaches" className="flex-grow" />
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sport Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="golf">Golf</SelectItem>
                      <SelectItem value="volleyball">Volleyball</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Booking Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tournament">Tournament</SelectItem>
                      <SelectItem value="coach">Coach</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full sm:w-auto">
                    Search
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Book with TurfMaster?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Top-Tier Tournaments</h3>
                  <p className="text-gray-600">
                    Access to a wide range of competitive tournaments across various sports and skill levels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Coaches</h3>
                  <p className="text-gray-600">
                    Connect with experienced coaches to improve your skills and take your game to the next level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                  <p className="text-gray-600">
                    Simple and secure booking process for both tournaments and coaching sessions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Tournaments and Coaches</h2>
            <Tabs defaultValue="tournaments" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
                <TabsTrigger value="coaches">Coaches</TabsTrigger>
              </TabsList>
              <TabsContent value="tournaments">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {tournaments.slice(0, 4).map((tournament) => (
                    <Card key={tournament.id} className="overflow-hidden">
                      <img
                        src={
                          tournament.image || `/placeholder.svg?height=200&width=400&text=Tournament ${tournament.id}`
                        }
                        alt={tournament.name}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{tournament.name}</h3>
                        <p className="text-gray-600 mb-2">Date: {formatDate(tournament.date)}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-bold">Entry Fee: Rs. {tournament.entryFee.toFixed(2)}</span>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span>{tournament.location}</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="coaches">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {coaches.slice(0, 4).map((coach) => (
                    <Card key={coach.id} className="overflow-hidden">
                      <img
                        src={coach.image || `/placeholder.svg?height=200&width=400&text=Coach ${coach.id}`}
                        alt={coach.name}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{coach.name}</h3>
                        <p className="text-gray-600 mb-2">Specialization: {coach.specialization}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-bold">Fees: Rs. {coach.rate.toFixed(2)}/month</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span>{coach.rating}/5</span>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          Book Session
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="text-center mt-8">
              <Button size="lg">View All</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Book</h2>
            <Tabs defaultValue="tournament" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="tournament">Tournament</TabsTrigger>
                <TabsTrigger value="coach">Coach</TabsTrigger>
              </TabsList>
              <TabsContent value="tournament">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking a Tournament</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Search for tournaments in your preferred sport and location</li>
                      <li>Select the tournament you want to participate in</li>
                      <li>Review tournament details, rules, and entry fees</li>
                      <li>Fill out the registration form and submit your team information</li>
                      <li>Pay the entry fee securely through our platform</li>
                      <li>Receive confirmation and further instructions via email</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="coach">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking a Coach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Browse through our list of qualified coaches</li>
                      <li>Filter by sport, specialization, and availability</li>
                      <li>Review coach profiles, experience, and ratings</li>
                      <li>Select your preferred coach and choose available time slots</li>
                      <li>Book your session and pay securely through our platform</li>
                      <li>Receive confirmation and session details via email</li>
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I register for a tournament?</AccordionTrigger>
                <AccordionContent>
                  To register for a tournament, search for the event you're interested in, click on "View Details," and
                  follow the registration process. You'll need to provide team information and pay the entry fee. Once
                  completed, you'll receive a confirmation email with further instructions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I cancel or reschedule a coaching session?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel or reschedule a coaching session, but please note our policies. Cancellations made
                  at least 24 hours before the scheduled session are eligible for a full refund. For rescheduling,
                  contact the coach directly through our platform to find a mutually agreeable time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are the tournaments age-specific?</AccordionTrigger>
                <AccordionContent>
                  Many tournaments are organized by age groups or skill levels. When browsing tournaments, you can
                  filter by age category or check the tournament details for specific age requirements. If you have any
                  questions about eligibility, you can contact the tournament organizer directly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How are coaches vetted?</AccordionTrigger>
                <AccordionContent>
                  All coaches on our platform go through a thorough vetting process. This includes verification of their
                  qualifications, experience, and certifications. We also conduct background checks and collect reviews
                  from past clients. Our goal is to ensure that you have access to high-quality, trustworthy coaching
                  professionals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Tom K.",
                  text: "Booking a tournament through TurfMaster was incredibly easy. The process was smooth, and the tournament was well-organized.",
                },
                {
                  name: "Lisa M.",
                  text: "I found an amazing basketball coach through this platform. My skills have improved significantly in just a few sessions!",
                },
                {
                  name: "Ryan S.",
                  text: "The variety of tournaments available is impressive. It's great to have so many options for competitive play in one place.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <User className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Ready to Get Started?</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="I'm interested in..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tournament">Joining a Tournament</SelectItem>
                        <SelectItem value="coaching">Booking a Coach</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Any specific questions or requirements?" />
                    <Button type="submit" size="lg" className="w-full">
                      Get More Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

