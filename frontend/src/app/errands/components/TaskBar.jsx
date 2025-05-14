"use client"
import React, { useState } from 'react'
import Cards from './Cards'
import MyCards from './MyCards'
import ProtectedRoute from '@/app/components/ProtectedRoute'

function TaskBar() {
  const [present, setPresent] = useState("all tasks")

  return (
    <div>
      <div className="text-white flex bg-gray-900 font-bold text-lg border-amber-100 border justify-around w-64 rounded-2xl px-2 py-1 mx-auto my-2">
        <div
          className={`${present === "all tasks" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("all tasks")}
        >
          All Tasks
        </div>
        <div
          className={`${present === "my tasks" ? "bg-black" : "hover:bg-black"} px-4 py-1 rounded-xl cursor-pointer`}
          onClick={() => setPresent("my tasks")}
        >
          My Tasks
        </div>
      </div>
      {present === "all tasks" ? (
        <Cards/>
      ) : (
       <div><ProtectedRoute><MyCards/></ProtectedRoute></div> 
      )}
    </div>
  )
}

export default TaskBar
