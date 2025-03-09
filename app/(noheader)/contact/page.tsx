"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-white">
              We'd love to hear from you. Please fill out this form or use our
              contact information below.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:shadow-white">
              <div className="px-6 py-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1"
                      placeholder="Your message here..."
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="send w-full transform hover:-translate-y-1 transition-transform duration-300 hover:scale-110"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:shadow-white dark:shadow-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Our Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Address
                      </h4>
                      <p className="mt-1 text-gray-600">
                        405, Tirumalai Colony 5th St, P.P. Chavadi,
                        <br />
                        Madurai, Tamil Nadu 625016
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Phone
                      </h4>
                      <p className="mt-1 text-gray-600">+91 7708409636</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">
                        Email
                      </h4>
                      <p className="mt-1 text-gray-600">nivethanraajt@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <style jsx>{``}</style>
    </main>
  );
}
