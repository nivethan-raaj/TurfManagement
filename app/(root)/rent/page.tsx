"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  ClubIcon as Football,
  Smile,
  Sun,
  Users,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import Header from "@/components/ui/header";

export default function RentSportsEquipmentPage() {
  const [sportType, setSportType] = useState<string | null>(null);

  const handleSportTypeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSportType(formData.get("sportType") as string);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Rent Sports Equipment</h1>
            <p className="text-xl mb-8">
              Get the gear you need for your next game or practice session
            </p>
            <Button size="lg" variant="secondary">
              Browse Equipment
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Rent with Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Football className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
                  <p className="text-gray-600">
                    We offer a diverse range of high-quality sports equipment
                    for all your needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Flexible Rentals
                  </h3>
                  <p className="text-gray-600">
                    Rent for a day, a week, or longer - we have options to suit
                    your schedule.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Smile className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                  <p className="text-gray-600">
                    Our knowledgeable staff can help you choose the right
                    equipment for your sport.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Find the Right Equipment
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <form onSubmit={handleSportTypeSubmit} className="space-y-4">
                  <Select name="sportType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sport Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soccer">Soccer</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="golf">Golf</SelectItem>
                      <SelectItem value="volleyball">Volleyball</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full">
                    Find Equipment
                  </Button>
                </form>
                {sportType && (
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      Available Equipment
                    </h3>
                    <p className="text-3xl text-primary">
                      {sportType === "soccer"
                        ? "Soccer Balls, Cleats, Shin Guards"
                        : sportType === "basketball"
                        ? "Basketballs, Hoops, Shoes"
                        : sportType === "tennis"
                        ? "Tennis Rackets, Balls, Shoes"
                        : sportType === "golf"
                        ? "Golf Clubs, Balls, Tees"
                        : "Volleyballs, Nets, Knee Pads"}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Contact us to check availability and reserve your
                      equipment.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Rental Process
            </h2>
            <Tabs defaultValue="select" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="select">Select</TabsTrigger>
                <TabsTrigger value="reserve">Reserve</TabsTrigger>
                <TabsTrigger value="pickup">Pick Up</TabsTrigger>
                <TabsTrigger value="return">Return</TabsTrigger>
              </TabsList>
              <TabsContent value="select">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Browse our wide range of sports equipment</li>
                      <li>Choose the items you need for your activity</li>
                      <li>Check availability for your desired dates</li>
                      <li>Add items to your rental cart</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reserve">
                <Card>
                  <CardHeader>
                    <CardTitle>Reserve Your Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Provide your contact information</li>
                      <li>Select rental duration</li>
                      <li>Review your order and terms</li>
                      <li>Confirm your reservation</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="pickup">
                <Card>
                  <CardHeader>
                    <CardTitle>Pick Up Your Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Visit our location during business hours</li>
                      <li>Present your ID and reservation confirmation</li>
                      <li>Inspect the equipment with our staff</li>
                      <li>Sign the rental agreement</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="return">
                <Card>
                  <CardHeader>
                    <CardTitle>Return Your Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Bring back the equipment on or before the due date
                      </li>
                      <li>Ensure items are clean and in good condition</li>
                      <li>Complete a return inspection with our staff</li>
                      <li>Receive your deposit back (if applicable)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of equipment do you rent?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of sports equipment for rent, including
                  but not limited to soccer balls, basketballs, tennis rackets,
                  golf clubs, volleyballs, and various protective gear. Our
                  inventory covers most popular sports and activities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long can I rent equipment for?
                </AccordionTrigger>
                <AccordionContent>
                  Our rental periods are flexible to suit your needs. We offer
                  daily, weekly, and even monthly rental options. The minimum
                  rental period is typically one day, but this may vary
                  depending on the type of equipment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you require a deposit?</AccordionTrigger>
                <AccordionContent>
                  Yes, we require a refundable deposit for most equipment
                  rentals. The deposit amount varies depending on the value of
                  the equipment. The deposit is fully refundable upon the safe
                  return of the equipment in its original condition.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What if the equipment gets damaged?
                </AccordionTrigger>
                <AccordionContent>
                  We understand that accidents can happen. Minor wear and tear
                  is expected and covered in the rental fee. However,
                  significant damage or loss may result in additional charges.
                  We recommend treating the equipment with care and reporting
                  any issues immediately.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex T.",
                  text: "Renting from TurfMaster was a breeze. The equipment was in great condition and perfect for our weekend tournament.",
                },
                {
                  name: "Maria S.",
                  text: "I love that I can try out different sports without having to invest in expensive equipment. The staff is always helpful in choosing the right gear.",
                },
                {
                  name: "Chris L.",
                  text: "The rental process is quick and easy. It's great to have access to high-quality sports equipment whenever I need it.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
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
              <h2 className="text-3xl font-bold mb-8 text-center">
                Ready to Rent?
              </h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Input type="tel" placeholder="Your Phone" required />
                    <Select>
                      <SelectTrigger>
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
                    <Input
                      type="text"
                      placeholder="Equipment Needed"
                      required
                    />
                    <Textarea placeholder="Any special requirements or questions?" />
                    <Button type="submit" size="lg" className="w-full">
                      Request Rental Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
