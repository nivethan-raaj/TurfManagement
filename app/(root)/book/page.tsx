"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ThumbsUp, ArrowRight, SlidersHorizontal, Star, MapPin, Clock } from "lucide-react"
import { turfs } from "./turf"

export default function BookATurfPage() {
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [filteredTurfs, setFilteredTurfs] = useState(turfs)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState("any")
  const [sortOption, setSortOption] = useState("")

  const turfsPerPage = 9

  useEffect(() => {
    let result = turfs

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (turf) =>
          turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          turf.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          turf.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by price range
    result = result.filter((turf) => turf.price >= priceRange[0] && turf.price <= priceRange[1])

    // Filter by selected types
    if (selectedTypes.length > 0) {
      result = result.filter((turf) => selectedTypes.includes(turf.type))
    }

    // Filter by size
    if (selectedSize !== "any") {
      result = result.filter((turf) => turf.size.toLowerCase() === selectedSize.toLowerCase())
    }

    // Sort results
    if (sortOption) {
      switch (sortOption) {
        case "price-asc":
          result = [...result].sort((a, b) => a.price - b.price)
          break
        case "price-desc":
          result = [...result].sort((a, b) => b.price - a.price)
          break
        case "name-asc":
          result = [...result].sort((a, b) => a.name.localeCompare(b.name))
          break
        case "name-desc":
          result = [...result].sort((a, b) => b.name.localeCompare(a.name))
          break
        case "rating-desc":
          result = [...result].sort((a, b) => b.rating - a.rating)
          break
      }
    }

    setFilteredTurfs(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, priceRange, selectedTypes, selectedSize, sortOption])

  const indexOfLastTurf = currentPage * turfsPerPage
  const indexOfFirstTurf = indexOfLastTurf - turfsPerPage
  const currentTurfs = filteredTurfs.slice(indexOfFirstTurf, indexOfLastTurf)
  const totalPages = Math.ceil(filteredTurfs.length / turfsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen)
  }

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
  }

  const applyFilters = () => {
    // Filters are applied automatically through useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Book Your Perfect Turf</h1>
            <p className="text-xl mb-8">Find and reserve the ideal turf for your sport or event</p>
            <div className="max-w-3xl mx-auto flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
              <Input
                type="text"
                placeholder="Enter sport type, turf name, or location"
                className="flex-grow border-none focus:ring-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button size="lg" className="rounded-none">
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <aside className={`w-full md:w-64 space-y-6 ${isSidePanelOpen ? "block" : "hidden md:block"}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Sort by</label>
                      <Select value={sortOption} onValueChange={setSortOption}>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="price-asc">Price: Low to High</SelectItem>
                          <SelectItem value="price-desc">Price: High to Low</SelectItem>
                          <SelectItem value="name-asc">Name: A to Z</SelectItem>
                          <SelectItem value="name-desc">Name: Z to A</SelectItem>
                          <SelectItem value="rating-desc">Highest Rated</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Price Range</label>
                      <Slider
                        min={0}
                        max={2000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-2"
                      />
                      <div className="flex justify-between mt-2">
                        <span>Rs.{priceRange[0]}</span>
                        <span>Rs.{priceRange[1]}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Sport Type</label>
                      <div className="space-y-2 mt-2">
                        {Array.from(new Set(turfs.map((turf) => turf.type))).map((type) => (
                          <div key={type} className="flex items-center">
                            <Checkbox
                              id={type}
                              checked={selectedTypes.includes(type)}
                              onCheckedChange={() => handleTypeChange(type)}
                            />
                            <label htmlFor={type} className="ml-2 text-sm">
                              {type}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Turf Size</label>
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" onClick={applyFilters}>
                      Apply Filters
                    </Button>
                  </CardContent>
                </Card>
              </aside>

              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Available Turfs</h2>
                  <Button variant="outline" className="md:hidden" onClick={toggleSidePanel}>
                    <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
                  </Button>
                </div>

                {filteredTurfs.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-lg text-gray-500">
                      No turfs match your current filters. Try adjusting your search criteria.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentTurfs.map((turf) => (
                      <Card key={turf.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img
                          src={
                            turf.image !== "" ? turf.image : `/placeholder.svg?height=200&width=400&text=${turf.name}`
                          }
                          alt={turf.name}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="text-xl font-semibold mb-2">{turf.name}</h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <p className="text-sm">{turf.location}</p>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {turf.type} • {turf.size}
                          </p>
                          <div className="flex items-center mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(turf.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-sm">{turf.rating}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-3">
                            <Clock className="h-4 w-4 mr-1" />
                            <p className="text-sm">{turf.availableHours}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">Rs.{turf.price}/hour</span>
                            <Button>Book Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {filteredTurfs.length > 0 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="border-2 p-2 rounded-md w-24 bg-green-400 border-green-400 hover:bg-green-300 disabled:bg-green-100 disabled:border-green-100"
                    >
                      Previous
                    </button>
                    <span className="mx-4 mt-2">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="border-2 p-2 rounded-md w-24 bg-green-400 border-green-400 hover:bg-green-300 disabled:bg-green-100 disabled:border-green-100"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your Turf?</h2>
            <p className="text-xl mb-8">
              Our booking specialists are here to help you find the perfect turf for your needs.
            </p>
            <Button size="lg" variant="secondary">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John D.",
                  text: "Booking a turf through TurfMaster was incredibly easy. The field was in perfect condition for our game!",
                },
                {
                  name: "Sarah M.",
                  text: "I love the variety of turfs available. Whether it's for soccer or tennis, they have it all.",
                },
                {
                  name: "Mike R.",
                  text: "The customer service was excellent. They helped me find the perfect turf for my event.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <ThumbsUp className="h-8 w-8 text-primary mb-4" />
                    <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

