"use client"
import React, { useState } from 'react'
import AllRides from './AllRides'
import TodaysRides from './TodaysRides'
import MyRides from './MyRides'

function TaskBar() {
    const [present, setPresent] = useState("All Rides")

  return (
    <div>
      <div className="text-white flex bg-gray-900 font-bold text-lg border-amber-100 border justify-around w-96 rounded-2xl px-2 py-1 mx-auto my-2">
        <div
          className={`${present === "All Rides" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("All Rides")}
        >
          All Rides
        </div>
        <div
          className={`${present === "Today" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("Today")}
        >
          Today
        </div>
        <div
          className={`${present === "My Rides" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("My Rides")}
        >
          My Rides
        </div>
      </div>
      {present === "All Rides" && 
          <div className="text-white text-center"><AllRides/></div>
        }
        {present === "Today" && 
          <div className="text-white text-center"><TodaysRides/></div>
        }
        {present === "My Rides" && 
          <div className="text-white text-center"><MyRides/></div>
        }
    </div>
  )
}

export default TaskBar
