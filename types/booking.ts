export interface Booking {
  id: string
  turfId: number
  turfName: string
  turfType: string
  turfLocation: string
  price: number
  date: string
  startTime: string
  endTime: string
  numberOfPeople: number
  notes: string
  userEmail: string
  userName: string
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}

