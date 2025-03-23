"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Booking } from "@/types/booking";
import { CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  turf: {
    id: number;
    name: string;
    type: string;
    price: number;
    location: string;
  };
  onSubmit: (bookingData: Omit<Booking, "id" | "status">) => void;
}

export default function BookingModal({
  isOpen,
  onClose,
  turf,
  onSubmit,
}: BookingModalProps) {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!date) newErrors.date = "Date is required";
    if (!startTime) newErrors.startTime = "Start time is required";
    if (!endTime) newErrors.endTime = "End time is required";
    if (startTime && endTime && startTime >= endTime) {
      newErrors.endTime = "End time must be after start time";
    }
    if (!numberOfPeople || Number.parseInt(numberOfPeople) < 1) {
      newErrors.numberOfPeople = "Number of people must be at least 1";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Create booking data
    const bookingData = {
      turfId: turf.id,
      turfName: turf.name,
      turfType: turf.type,
      turfLocation: turf.location,
      price: turf.price,
      date,
      startTime,
      endTime,
      numberOfPeople: Number.parseInt(numberOfPeople),
      notes,
      userEmail: "", // Will be filled by parent component
      userName: "", // Will be filled by parent component
      createdAt: new Date().toISOString(),
    };

    // Simulate API call
    setTimeout(() => {
      onSubmit(bookingData);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        resetForm();
        onClose();
      }, 2000);
    }, 1000);
  };

  const resetForm = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setNumberOfPeople("1");
    setNotes("");
    setErrors({});
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          resetForm();
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-center mb-2">
              Booking Successful!
            </h2>
            <p className="text-center text-gray-600">
              Your booking for {turf.name} has been confirmed.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book {turf.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {errors.date && (
                    <p className="text-sm text-red-500">{errors.date}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numberOfPeople">Number of People</Label>
                  <Input
                    id="numberOfPeople"
                    type="number"
                    min="1"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                  />
                  {errors.numberOfPeople && (
                    <p className="text-sm text-red-500">
                      {errors.numberOfPeople}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  {errors.startTime && (
                    <p className="text-sm text-red-500">{errors.startTime}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                  {errors.endTime && (
                    <p className="text-sm text-red-500">{errors.endTime}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or information"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span>Turf Price:</span>
                  <span>Rs.{turf.price}/hour</span>
                </div>
                {startTime && endTime && startTime < endTime && (
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>
                      Rs.
                      {turf.price *
                        Math.max(
                          1,
                          Math.ceil(
                            (new Date(`2000-01-01T${endTime}:00`).getTime() -
                              new Date(
                                `2000-01-01T${startTime}:00`
                              ).getTime()) /
                              (1000 * 60 * 60)
                          )
                        )}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Book Now"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
