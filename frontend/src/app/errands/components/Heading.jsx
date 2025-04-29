import React from 'react'
import { Plus } from 'lucide-react'
function Heading() {
  return (
    <div className="">
    <div className="text-white  text-3xl font-extrabold my-2">
      Available Helps
    </div>
    <div className="text-gray-400 text-lg">Browse Tasks or post your own to earn points</div>
    <button className="bg-green-400 rounded-lg px-2 py-2 flex hover:bg-green-500 text-gray-900 my-2"><Plus/> Post New Task</button>
    </div>
  )
}

export default Heading
