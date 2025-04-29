"use client"

import { mockRequestedRentals } from "./data"
import { MapPin } from "lucide-react"

export default function RequestedCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {mockRequestedRentals.map((rental) => (
        <div
          key={rental.id}
          className="w-80 border px-2 py-1 shadow-sm shadow-green-600 border-dashed border-amber-50"
        >
          <h1 className="text-white text-xl font-bold flex items-center gap-2">
            {rental.title}
          </h1>
          <div className="text-gray-400 text-lg line-clamp-2">{rental.description}</div>

          <div className="text-amber-100 flex items-center gap-1 mt-2">
            <MapPin />
            <div className="text-lg">{rental.location}</div>
          </div>

          <div className="text-amber-100 mt-1 text-sm">{rental.createdAt}</div>

          <div className="border border-white/50 mt-6"></div>

          <div className="flex text-white font-bold text-lg items-center h-16 justify-between">
            <div>
              {rental.points} points <span className="text-sm font-normal">({rental.priceType})</span>
            </div>
            <button className="bg-green-300 px-2 rounded-lg py-2 text-gray-900">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
