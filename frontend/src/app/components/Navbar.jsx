import React from 'react'
import { Home, Car, User,Package,ListTodo } from "lucide-react"
import Link from 'next/link'


function Navbar() {
  return (
    
    <div className="flex justify-around bg-zinc-900 items-center h-12 fixed bottom-0 mb-2 border-2 text-gray-300  w-[90%] rounded-3xl left-1/2 -translate-x-1/2 border-amber-50">
      
     <Link href="/"><Home size={30} strokeWidth={0.75}/></Link> 
    <Link href="/TripSync"><Car size={40} strokeWidth={0.75}/></Link>
    <Link href="/rentals"><Package size={30} strokeWidth={0.75}/></Link>
    <Link href="/errands"><ListTodo size={30} strokeWidth={0.75}/></Link>
     <Link href="/dashboard"> <User size={30} strokeWidth={0.75}/></Link>
      
   </div>
  )
}

export default Navbar
