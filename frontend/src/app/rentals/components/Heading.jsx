import React from 'react'
import { Plus } from 'lucide-react'
function Heading() {
  return (
    <div className="">
    <div className="text-white  text-3xl font-extrabold my-2">
      Rentals
    </div>
    <div className="text-gray-400 text-lg">Browse items for rent or list your own items</div>
    <button className="bg-green-400 rounded-lg px-2 py-2 flex hover:bg-green-500 text-gray-900 my-2"><Plus/> List New Item</button>
    </div>
  )
}

export default Heading