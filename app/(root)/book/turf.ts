export interface Turf {
    id: number
    name: string
    type: string
    size: string
    price: number
    location: string
    amenities: string[]
    rating: number
    image: string
    availableHours: string
  }
  
  export const turfs: Turf[] = [
    {
      id: 1,
      name: "DAY and Night",
      type: "Football",
      size: "Standard",
      price: 1300,
      location: "Duraisamy Nagar, Madurai",
      amenities: ["Floodlights", "Changing Rooms", "Parking"],
      rating: 4.5,
      image: "/dn.jpeg",
      availableHours: "6:00 AM - 11:00 PM",
    },
    {
      id: 2,
      name: "KBS Badminton",
      type: "Badminton",
      size: "Standard",
      price: 400,
      location: "Thuvarimaan, Madurai",
      amenities: ["Air Conditioned", "Pro Equipment", "Coaching Available"],
      rating: 4.2,
      image: "/KBS.jpeg",
      availableHours: "7:00 AM - 10:00 PM",
    },
    {
      id: 3,
      name: "Turfwar",
      type: "Football",
      size: "Small",
      price: 900,
      location: "Kochadai, Madurai",
      amenities: ["Floodlights", "Refreshments", "Spectator Area"],
      rating: 4.0,
      image: "/turfwar.jpeg",
      availableHours: "6:00 AM - 12:00 AM",
    },
    {
      id: 4,
      name: "Infinite Arena",
      type: "Cricket",
      size: "Large",
      price: 1300,
      location: "Achampathu, Madurai",
      amenities: ["Bowling Machine", "Practice Nets", "Equipment Rental"],
      rating: 4.7,
      image: "/infinte.jpeg",
      availableHours: "5:00 AM - 10:00 PM",
    },
    {
      id: 5,
      name: "Multi-purpose Field",
      type: "Multi-sport",
      size: "Large",
      price: 1800,
      location: "Whitefield, Bangalore",
      amenities: ["Convertible Courts", "Locker Rooms", "Cafeteria"],
      rating: 4.3,
      image: "/mullti.jpeg",
      availableHours: "7:00 AM - 11:00 PM",
    },
    {
      id: 6,
      name: "Cricket Pitch",
      type: "Cricket",
      size: "Standard",
      price: 200,
      location: "Kochadai, Madurai",
      amenities: ["Bowling Machine", "Floodlights", "Coaching"],
      rating: 3.9,
      image: "/cricketpitch.jpeg",
      availableHours: "6:00 AM - 9:00 PM",
    },
    {
      id: 7,
      name: "Gameon",
      type: "Football",
      size: "Large",
      price: 1000,
      location: "Anayur Road, Madurai",
      amenities: ["Natural Grass", "Changing Rooms", "Floodlights"],
      rating: 4.8,
      image: "/foot.jpeg",
      availableHours: "6:00 AM - 10:00 PM",
    },
    {
      id: 8,
      name: "Soapy Football",
      type: "Football",
      size: "Standard",
      price: 1600,
      location: "Koodal Nagar, Madurai",
      amenities: ["Clay Courts", "Pro Shop", "Coaching"],
      rating: 4.4,
      image: "/soap.jpeg",
      availableHours: "7:00 AM - 9:00 PM",
    },
    {
      id: 9,
      name: "Blaze Badminton",
      type: "Badminton",
      size: "Standard",
      price: 600,
      location: "Kalavasal, Madurai",
      amenities: ["Indoor Court", "Scoreboard", "Spectator Seating"],
      rating: 4.1,
      image: "/blaze.jpeg",
      availableHours: "8:00 AM - 10:00 PM",
    },
  ]
  
  