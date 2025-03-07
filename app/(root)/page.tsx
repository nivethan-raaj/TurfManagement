"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Home,
  Search,
  DollarSign,
  Leaf,
  MapPin,
  Calendar,
  Droplet,
  Square,
  ArrowRight,
  Star,
} from "lucide-react";

const featuredServices = [
  {
    id: 1,
    title: "Lawn Mowing",
    description: "Professional lawn mowing service",
    price: 50,
    duration: "1 hour",
    coverage: "Up to 5000 sq ft",
    image: "/turf2.jpeg",
  },
  {
    id: 2,
    title: "Fertilization",
    description: "Expert turf fertilization treatment",
    price: 100,
    duration: "2 hours",
    coverage: "Up to 10000 sq ft",
    image: "/turf3.jpeg",
  },
  {
    id: 3,
    title: "Weed Control",
    description: "Effective weed management solution",
    price: 75,
    duration: "1.5 hours",
    coverage: "Up to 7500 sq ft",
    image: "/turf4.jpeg",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "TurfMaster transformed my lawn into a lush, green paradise. Their service was exceptional!",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I've been using TurfMaster for my golf course, and the results are outstanding. Highly recommended!",
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "TurfMaster's weed control service saved my lawn. It's never looked better!",
  },
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/oneis.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Turf Management ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional Turf Management Solutions
              </h1>
              <p className="text-xl mb-8">
                Discover expert care for your lawn and turf
              </p>
              <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur">
                <CardContent className="p-6">
                  <Tabs defaultValue="residential">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                      <TabsTrigger value="residential">Residential</TabsTrigger>
                      <TabsTrigger value="commercial">Commercial</TabsTrigger>
                      <TabsTrigger value="sports">Sports Turf</TabsTrigger>
                    </TabsList>
                    <TabsContent value="residential">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter location"
                          className="flex-grow"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Service Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mowing">Lawn Mowing</SelectItem>
                            <SelectItem value="fertilization">
                              Fertilization
                            </SelectItem>
                            <SelectItem value="weed-control">
                              Weed Control
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="submit">
                          <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="commercial">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter location"
                          className="flex-grow"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Property Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">Office Park</SelectItem>
                            <SelectItem value="retail">
                              Retail Center
                            </SelectItem>
                            <SelectItem value="industrial">
                              Industrial Complex
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="submit">
                          <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="sports">
                      <form className="flex flex-wrap gap-4">
                        <Input
                          type="text"
                          placeholder="Enter facility name"
                          className="flex-grow"
                        />
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Turf Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="golf">Golf Course</SelectItem>
                            <SelectItem value="football">
                              Football Field
                            </SelectItem>
                            <SelectItem value="soccer">Badminton Court</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button type="submit">
                          <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose TurfMaster Management?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
                  <p className="text-gray-600">
                    Our team of turf specialists provides top-notch care for
                    your lawn and sports fields.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Customized Plans
                  </h3>
                  <p className="text-gray-600">
                    We create tailored maintenance plans to suit your specific
                    turf needs and schedule.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Droplet className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Eco-Friendly Solutions
                  </h3>
                  <p className="text-gray-600">
                    Our sustainable practices ensure a beautiful lawn while
                    protecting the environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Featured Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">
                        Rs. {service.price}
                      </span>
                      <Button variant="outline">{service.duration}</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <Star className="h-8 w-8 text-yellow-400 mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Turf?
            </h2>
            <p className="text-xl mb-8">
              Let our experts help you achieve the perfect lawn or sports field.
            </p>
            <Button size="lg" variant="secondary">
              Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
