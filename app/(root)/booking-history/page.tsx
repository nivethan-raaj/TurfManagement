"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Booking } from "@/types/booking";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Move these utility functions outside of the component so they can be used by BookingCard
const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-green-500";
    case "pending":
      return "bg-yellow-500";
    case "cancelled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "confirmed":
      return <CheckCircle className="h-4 w-4" />;
    case "pending":
      return <AlertCircle className="h-4 w-4" />;
    case "cancelled":
      return <XCircle className="h-4 w-4" />;
    default:
      return null;
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const calculateDuration = (startTime: string, endTime: string) => {
  const start = new Date(`2000-01-01T${startTime}:00`);
  const end = new Date(`2000-01-01T${endTime}:00`);
  const durationMs = end.getTime() - start.getTime();
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes > 0 ? `${minutes}m` : ""}`;
};

function BookingCard({ booking }: { booking: Booking }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-2 w-full bg-primary"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{booking.turfName}</CardTitle>
          <Badge
            className={`${getStatusColor(
              booking.status
            )} text-white flex items-center gap-1`}
          >
            {getStatusIcon(booking.status)}
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-gray-500">{booking.turfType}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>{formatDate(booking.date)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span>
            {booking.startTime} - {booking.endTime} (
            {calculateDuration(booking.startTime, booking.endTime)})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span>{booking.turfLocation}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span>{booking.numberOfPeople} people</span>
        </div>
        {booking.notes && (
          <div className="flex items-start gap-2">
            <FileText className="h-4 w-4 text-gray-500 mt-1" />
            <span className="text-sm">{booking.notes}</span>
          </div>
        )}
        <div className="pt-2 border-t">
          <div className="flex justify-between">
            <span className="font-medium">Total:</span>
            <span className="font-bold">
              Rs.
              {booking.price *
                Math.max(
                  1,
                  Math.ceil(
                    (new Date(`2000-01-01T${booking.endTime}:00`).getTime() -
                      new Date(
                        `2000-01-01T${booking.startTime}:00`
                      ).getTime()) /
                      (1000 * 60 * 60)
                  )
                )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BookingHistoryPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Redirect to login if not logged in
      router.push("/login");
      return;
    }

    // Get bookings from localStorage
    const storedBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    ) as Booking[];

    // Filter bookings for current user
    const userEmail = JSON.parse(storedUser).email;
    const userBookings = storedBookings.filter(
      (booking) => booking.userEmail === userEmail
    );

    // Sort bookings by date (newest first)
    userBookings.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setBookings(userBookings);
  }, [router]);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Booking History</h1>

      {bookings.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium">No bookings found</h3>
              <p className="text-gray-500">
                You haven't made any bookings yet.
              </p>
              <Button onClick={() => router.push("/book")}>Book a Turf</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings
                .filter((booking) => new Date(booking.date) >= new Date())
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings
                .filter((booking) => new Date(booking.date) < new Date())
                .map((booking) => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}