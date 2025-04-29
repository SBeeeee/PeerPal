"use client"
import React, { useState } from 'react'
import Cards from './Cards'
import RequestedCards from './RequestedCards'

function ChoiceBar() {
  const [present, setPresent] = useState("available")

  return (
    <div>
      <div className="text-white flex bg-gray-900 font-bold text-lg border-amber-100 border justify-around w-64 rounded-2xl px-2 py-1 mx-auto my-2">
        <div
          className={`${present === "available" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("available")}
        >
          available
        </div>
        <div
          className={`${present === "requested" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("requested")}
        >
          requested
        </div>
      </div>
      {present === "available" ? (
        <Cards />
      ) : (
        <RequestedCards/>
      )}
    </div>
  )
}

export default ChoiceBar
