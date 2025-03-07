// Tournament interface
export interface Tournament {
    id: number
    name: string
    sport: string
    date: string
    entryFee: number
    location: string
    image: string
    description: string
    capacity: number
    registrationDeadline: string
  }
  
  // Coach interface
  export interface Coach {
    id: number
    name: string
    specialization: string
    rate: number
    rating: number
    image: string
    experience: number // in years
    location: string
    availability: string
    bio: string
  }
  
  // Tournament data
  export const tournaments: Tournament[] = [
    {
      id: 1,
      name: "Football Tournament 5s",
      sport: "Futsal",
      date: "2025-06-15",
      entryFee: 900,
      location: "Turfwar, Kochadai",
      image: "/turfwar.jpeg",
      description: "Annual summer soccer tournament for all age groups. Compete against the best teams in the region.",
      capacity: 32,
      registrationDeadline: "2025-06-01",
    },
    {
      id: 2,
      name: "Badminton Doubles",
      sport: "Basketball",
      date: "2025-07-10",
      entryFee: 350,
      location: "KBS badminton, Thuvarimaan",
      image: "/KBS.jpeg",
      description: "3-on-3 basketball tournament with divisions for youth, adult, and professional players.",
      capacity: 24,
      registrationDeadline: "2025-06-25",
    },
    {
      id: 3,
      name: "Badminton Singles",
      sport: "Badminton",
      date: "2025-08-05",
      entryFee: 400,
      location: "Blaze, Kalavasal",
      image: "/blaze.jpeg",
      description: "Singles and doubles tennis tournament with categories for all skill levels.",
      capacity: 64,
      registrationDeadline: "2025-07-20",
    },
    {
      id: 4,
      name: "Cricket Championship",
      sport: "Cricket",
      date: "2025-09-12",
      entryFee: 1500,
      location: "Day and Night, Achampathu",
      image: "/infinte.jpeg",
      description: "T20 cricket tournament featuring teams from across the region. Great prizes for winners.",
      capacity: 16,
      registrationDeadline: "2025-08-30",
    },
    {
      id: 5,
      name: "Volleyball Tournament",
      sport: "Volleyball",
      date: "2025-07-25",
      entryFee: 80,
      location: "Beach Arena, Madurai",
      image: "/tournaments/volleyball-tournament.jpeg",
      description: "Indoor and beach volleyball competitions for teams of all levels.",
      capacity: 20,
      registrationDeadline: "2025-07-10",
    },
    {
      id: 6,
      name: "Badminton League",
      sport: "Badminton",
      date: "2025-08-18",
      entryFee: 60,
      location: "KBS Badminton, Thuvarimaan",
      image: "/tournaments/badminton-league.jpeg",
      description: "Singles and doubles badminton tournament with categories for beginners to advanced players.",
      capacity: 48,
      registrationDeadline: "2025-08-05",
    },
  ]
  
  // Coach data
  export const coaches: Coach[] = [
    {
      id: 1,
      name: "Coach Murugan",
      specialization: "Badminton",
      rate: 900,
      rating: 4.9,
      image: "/coachbat.jpeg",
      experience: 12,
      location: "Duraisamy Nagar, Madurai",
      availability: "Weekdays 4:00 PM - 8:00 PM, Weekends 9:00 AM - 5:00 PM",
      bio: "Former professional badminton player with over 12 years of coaching experience. Specializes in technical skills and tactical development.",
    },
    {
      id: 2,
      name: "Coach Selvaguru",
      specialization: "Football",
      rate: 600,
      rating: 4.8,
      image: "/coachfoot.jpeg",
      experience: 10,
      location: "Kochadai, Madurai",
      availability: "Weekdays 5:00 PM - 9:00 PM, Saturdays 10:00 AM - 4:00 PM",
      bio: "College football coach with expertise in shooting techniques and defensive strategies. Works with players of all ages.",
    },
    {
      id: 3,
      name: "Coach Priya",
      specialization: "athletics",
      rate: 500,
      rating: 4.7,
      image: "/coachath.jpeg",
      experience: 8,
      location: "Kalavasal, Madurai",
      availability: "Weekdays 3:00 PM - 7:00 PM, Weekends 8:00 AM - 12:00 PM",
      bio: "Certified athletics instructor with experience in coaching junior and adult players. Focuses on technique and match strategy.",
    },
    {
      id: 4,
      name: "Coach Raj",
      specialization: "Cricket",
      rate: 800,
      rating: 4.9,
      image: "/coachcricket.jpeg",
      experience: 15,
      location: "Achampathu, Madurai",
      availability: "Weekdays 4:00 PM - 8:00 PM, Weekends 7:00 AM - 11:00 AM",
      bio: "Former national cricket player specializing in batting and bowling techniques. Provides personalized training plans.",
    },
    {
      id: 5,
      name: "Coach Lisa",
      specialization: "Volleyball",
      rate: 55,
      rating: 4.6,
      image: "/coaches/coach-lisa.jpeg",
      experience: 7,
      location: "Anayur Road, Madurai",
      availability: "Tuesdays and Thursdays 4:00 PM - 8:00 PM, Saturdays 9:00 AM - 3:00 PM",
      bio: "Volleyball specialist with experience coaching school and club teams. Focuses on team dynamics and individual skills.",
    },
    {
      id: 6,
      name: "Coach Arun",
      specialization: "Badminton",
      rate: 60,
      rating: 4.8,
      image: "/coaches/coach-arun.jpeg",
      experience: 9,
      location: "Thuvarimaan, Madurai",
      availability: "Weekdays 5:00 PM - 9:00 PM, Sundays 10:00 AM - 2:00 PM",
      bio: "Badminton coach with expertise in singles and doubles play. Provides technical training and competitive strategies.",
    },
    {
      id: 7,
      name: "Coach Emma",
      specialization: "Swimming",
      rate: 75,
      rating: 4.7,
      image: "/coaches/coach-emma.jpeg",
      experience: 11,
      location: "Koodal Nagar, Madurai",
      availability: "Weekdays 6:00 AM - 10:00 AM, 4:00 PM - 7:00 PM",
      bio: "Certified swimming instructor for all ages and skill levels. Specializes in stroke technique and competitive training.",
    },
    {
      id: 8,
      name: "Coach David",
      specialization: "Golf",
      rate: 90,
      rating: 4.9,
      image: "/coaches/coach-david.jpeg",
      experience: 14,
      location: "Whitefield, Bangalore",
      availability: "Weekdays 8:00 AM - 6:00 PM by appointment",
      bio: "PGA certified golf instructor with experience coaching beginners to advanced players. Provides swing analysis and course management strategies.",
    },
  ]
  
  