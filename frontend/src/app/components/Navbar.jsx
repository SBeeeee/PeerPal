import React from 'react'
import { Home, Search, PlusCircle, MessageSquare, User } from "lucide-react"
import Link from 'next/link'

function Navbar() {
  return (
    
    <div className="flex justify-around bg-zinc-900 items-center h-12 fixed bottom-0 mb-2 border-2 text-gray-300  w-[90%] rounded-3xl left-1/2 -translate-x-1/2 border-amber-50">
      
      <Home size={30} strokeWidth={0.75}/>
      <Search size={30} strokeWidth={0.75}/>
      <PlusCircle size={30} strokeWidth={0.75}/>
      <MessageSquare size={30} strokeWidth={0.75}/>
     <Link href="/dashboard"> <User size={30} strokeWidth={0.75}/></Link>
      
   </div>
  )
}

export default Navbar
