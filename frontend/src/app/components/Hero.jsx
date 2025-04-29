import React from 'react'
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

function Hero() {
  return (
    <div className="text-center px-4 pt-14">
      <div className="text-white text-3xl mb-2 text-center font-extrabold">Welcome to <span className="text-green-400">HelpBuddy</span></div>
      <div className="text-gray-400 text-lg">Connect with your community to help each other and share resources. Earn points, complete tasks, and rent items.</div>
      <Link href="/errands"> <button className="bg-green-500 w-[80vw] hover:cursor-pointer hover:bg-green-400 active:scale-95 shadow-2xl rounded-lg border-x-4 border-x-zinc-950  mb-2 border border-gray-950 text-gray-900 mt-2 p-2 ">Browse Tasks <ArrowRight className="inline-block" /></button></Link>
      <Link href="/rentals"><button className="text-white rounded-lg hover:cursor-pointer hover:bg-zinc-800 active:scale-95 shadow-2xl border-x-4 mb-6 border border-white p-2 w-[80vw] ">Browse Rentals <ArrowRight className="inline-block" /></button></Link>
    </div>
  )
}

export default Hero
