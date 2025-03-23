"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

// Define the Booking type directly in this file
type Booking = {
  id: string
  turfId: number
  turfName: string
  turfType: string
  turfLocation: string
  date: string
  startTime: string
  endTime: string
  numberOfPeople: number
  notes?: string
  price: number
  userEmail: string
  userName: string
  status: string
  createdAt: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  turf: {
    id: number
    name: string
    type: string
    price: number
    location: string
  }
  onSubmit: (bookingData: Omit<Booking, "id" | "status">) => void
}

export default function BookingModal({ isOpen, onClose, turf, onSubmit }: BookingModalProps) {
  const [date, setDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("1")
  const [notes, setNotes] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!date) newErrors.date = "Date is required"
    if (!startTime) newErrors.startTime = "Start time is required"
    if (!endTime) newErrors.endTime = "End time is required"
    if (startTime && endTime && startTime >= endTime) {
      newErrors.endTime = "End time must be after start time"
    }
    if (!numberOfPeople || Number.parseInt(numberOfPeople) < 1) {
      newErrors.numberOfPeople = "Number of people must be at least 1"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validateForm()) return

    setIsSubmitting(true)

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
      userEmail: "",
      userName: "",
      createdAt: new Date().toISOString(),
    }

    setTimeout(() => {
      onSubmit(bookingData)
      setIsSubmitting(false)
      setIsSuccess(true)

      setTimeout(() => {
        setIsSuccess(false)
        resetForm()
        onClose()
      }, 2000)
    }, 1000)
  }

  const resetForm = () => {
    setDate("")
    setStartTime("")
    setEndTime("")
    setNumberOfPeople("1")
    setNotes("")
    setErrors({})
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#0f172a", // Dark blue background
          borderRadius: "0.5rem",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          width: "100%",
          maxWidth: "500px",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          border: "1px solid #1e293b",
        }}
      >
        {isSuccess ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2.5rem 1.5rem",
              textAlign: "center",
            }}
          >
            <CheckCircle2
              style={{
                height: "4rem",
                width: "4rem",
                color: "#10b981",
                marginBottom: "1rem",
              }}
            />
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#ffffff",
              }}
            >
              Booking Successful!
            </h2>
            <p
              style={{
                color: "#94a3b8",
                textAlign: "center",
              }}
            >
              Your booking for {turf.name} has been confirmed.
            </p>
          </div>
        ) : (
          <>
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid #1e293b",
              }}
            >
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#3b82f6", // Bright blue for title
                }}
              >
                Book DAY and Night
              </h2>
            </div>
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#3b82f6", // Bright blue for labels
                    }}
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    style={{
                      padding: "0.625rem",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid #334155",
                      borderRadius: "0.375rem",
                      color: "#ffffff",
                      width: "100%",
                      outline: "none",
                    }}
                  />
                  {errors.date && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.date}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#3b82f6", // Bright blue for labels
                    }}
                  >
                    Number of People
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    style={{
                      padding: "0.625rem",
                      backgroundColor: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid #334155",
                      borderRadius: "0.375rem",
                      color: "#ffffff",
                      width: "100%",
                      outline: "none",
                    }}
                  />
                  {errors.numberOfPeople && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.numberOfPeople}
                    </p>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#3b82f6", // Bright blue for labels
                    }}
                  >
                    Start Time
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      style={{
                        padding: "0.625rem",
                        paddingLeft: "2.5rem",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid #334155",
                        borderRadius: "0.375rem",
                        color: "#ffffff",
                        width: "100%",
                        outline: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0.75rem",
                        pointerEvents: "none",
                        color: "#3b82f6",
                        fontSize: "1rem",
                      }}
                    >
                      --:--
                    </div>
                  </div>
                  {errors.startTime && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.startTime}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#3b82f6", // Bright blue for labels
                    }}
                  >
                    End Time
                  </label>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      style={{
                        padding: "0.625rem",
                        paddingLeft: "2.5rem",
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "1px solid #334155",
                        borderRadius: "0.375rem",
                        color: "#ffffff",
                        width: "100%",
                        outline: "none",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0.75rem",
                        pointerEvents: "none",
                        color: "#3b82f6",
                        fontSize: "1rem",
                      }}
                    >
                      --:--
                    </div>
                  </div>
                  {errors.endTime && (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.endTime}
                    </p>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#3b82f6", // Bright blue for labels
                  }}
                >
                  Additional Notes
                </label>
                <textarea
                  placeholder="Any special requirements or information"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    padding: "0.625rem",
                    backgroundColor: "rgba(15, 23, 42, 0.8)",
                    border: "1px solid #334155",
                    borderRadius: "0.375rem",
                    color: "#ffffff",
                    width: "100%",
                    minHeight: "5rem",
                    resize: "vertical",
                    outline: "none",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "1rem",
                    borderRadius: "0.375rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#0f172a",
                      }}
                    >
                      Turf Price:
                    </span>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#0f172a",
                      }}
                    >
                      Rs.{turf.price}/hour
                    </span>
                  </div>
                  {startTime && endTime && startTime < endTime && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "0.5rem",
                        paddingTop: "0.5rem",
                        borderTop: "1px solid #e2e8f0",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#0f172a",
                        }}
                      >
                        Total:
                      </span>
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#0f172a",
                        }}
                      >
                        Rs.
                        {turf.price *
                          Math.max(
                            1,
                            Math.ceil(
                              (new Date(`2000-01-01T${endTime}:00`).getTime() -
                                new Date(`2000-01-01T${startTime}:00`).getTime()) /
                                (1000 * 60 * 60),
                            ),
                          )}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  {startTime && endTime && startTime < endTime ? (
                    <span>
                      Rs.
                      {turf.price *
                        Math.max(
                          1,
                          Math.ceil(
                            (new Date(`2000-01-01T${endTime}:00`).getTime() -
                              new Date(`2000-01-01T${startTime}:00`).getTime()) /
                              (1000 * 60 * 60),
                          ),
                        )}
                      /hour
                    </span>
                  ) : (
                    <span>Rs.{turf.price}/hour</span>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                  }}
                >
                  <button
                    onClick={onClose}
                    style={{
                      padding: "0.625rem 1.25rem",
                      backgroundColor: "transparent",
                      color: "#ffffff",
                      border: "1px solid #334155",
                      borderRadius: "0.375rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.5)"
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{
                      padding: "0.625rem 1.25rem",
                      backgroundColor: "#10b981", // Green for Book Now button
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "0.375rem",
                      fontWeight: "500",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.backgroundColor = "#059669"
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#10b981"
                    }}
                  >
                    {isSubmitting ? "Processing..." : "Book Now"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

