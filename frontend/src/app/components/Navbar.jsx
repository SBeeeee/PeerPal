import React from 'react'
import { Home, Search, PlusCircle, MessageSquare, User } from "lucide-react"

function Navbar() {
  return (
    
    <div className="flex justify-around items-center h-12 fixed bottom-0 mb-2 border-2 text-gray-300  w-[90%] rounded-3xl left-1/2 -translate-x-1/2 border-amber-50">
      
      <Home size={30}/>
      <Search size={30}/>
      <PlusCircle size={30}/>
      <MessageSquare size={30}/>
      <User size={30}/>
      
   </div>
  )
}

export default Navbar
