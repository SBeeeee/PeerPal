"use client"
import React, { useState } from 'react'
import AllRides from './AllRides'
import TodaysRides from './TodaysRides'
import MyRides from './MyRides'
import { Plus } from 'lucide-react'
import RideModal from './RideModal'
import { createRide } from './data'

function TaskBar() {
    const [present, setPresent] = useState("All Rides")
    const [showModal,setShowModal]=useState(false);

  return (
    <div>
      <button className="bg-green-400 rounded-lg px-2 py-2 flex hover:bg-green-500 text-gray-900 my-2" onClick={() => setShowModal(true)}><Plus/> Post new Ride</button>
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

        {showModal && 
        <RideModal onClose={() => setShowModal(false)} onSubmit={createRide}/>
        }
    </div>
  )
}

export default TaskBar
