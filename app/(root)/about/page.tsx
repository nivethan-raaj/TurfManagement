"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Users, Target, Award, Star } from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const router = useRouter();
  const handleContact = () => {
    router.push("/contact");
  };

  const images = ["/turfimage3.jpg", "/turfimage2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white flex items-center">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Turf image ${index + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  style={{ height: "30rem" }}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8 dark:text-slate-400">
                At TurfMaster, our mission is to provide top-quality turf
                management solutions for sports facilities, golf courses, and
                landscaping projects. We are dedicated to creating and
                maintaining beautiful, durable, and sustainable turf surfaces
                that enhance the playing experience and aesthetic appeal of any
                outdoor space.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Our team of experienced turf management professionals is
                    dedicated to providing you with the best service in the
                    industry.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Tailored Approach
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    We understand that every turf project is unique, and we
                    tailor our services to meet your specific needs and
                    preferences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Our track record speaks for itself, with countless satisfied
                    clients and successful turf management projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "TEAM MEM 1", role: "Head Groundskeeper" },
                { name: "JESIMA", role: "Turf Specialist" },
                { name: "TEAM MEM 2", role: "Irrigation Expert" },
                { name: "Sarah", role: "Landscape Designer" },
              ].map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <img
                      /*src={`/placeholder.svg?height=150&width=150`}*/
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1 da">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Golf Club Manager",
                  text: "TurfMaster transformed our golf course. The quality of their work and attention to detail is unmatched.",
                },
                {
                  name: "Sports Facility Director",
                  text: "We've worked with many turf management companies, but TurfMaster truly stands out. Their expertise is unparalleled.",
                },
                {
                  name: "Homeowner",
                  text: "TurfMaster's landscaping services gave us the perfect lawn we've always dreamed of. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
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

        <section className="bg-primary text-white py-16 flex flex-col items-center">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-black">
              Ready to Transform Your Turf?
            </h2>
            <p className="text-xl mb-8 dark:text-slate-900">
              Let us help you create and maintain the perfect turf for your
              needs.
            </p>
            <div className="flex items-center">
              <button
                className="btn relative mx-10 px-10 py-2 text-white cursor-pointer z-0 rounded-lg flex flex-row items-center justify-between bg-black"
                onClick={handleContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <style jsx>
        {`
          ..btn::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            left: 0;
            top: 0;
            border-radius: 10px;
            z-index: -1;
          }

          .btn::before {
            content: "";
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 600%;
            z-index: -1;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            filter: blur(8px);
            animation: glowing 20s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
            opacity: 0;
          }

          .btn:hover::before {
            opacity: 1;
            background-color: #000000;
          }

          .btn:active::after {
            background: transparent;
          }

          .btn:active {
            color: #000;
            font-weight: bold;
          }

          @keyframes glowing {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }
        `}
      </style>
    </div>
  );
}
