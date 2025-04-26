import React from 'react'
import {ArrowRight} from "lucide-react"

function Hero() {
  return (
    <div className="text-center px-4 py-14">
      <div className="text-white text-3xl mb-2 text-center font-extrabold">Welcome to <span className="text-green-400">HelpBuddy</span></div>
      <div className="text-gray-400 text-lg">Connect with your community to help each other and share resources. Earn points, complete tasks, and rent items.</div>
      <button className="bg-green-500 w-[80vw] rounded-lg border-x-4  mb-2 border border-gray-950 text-gray-900 mt-2 p-2 ">Browse Tasks <ArrowRight className="inline-block"/></button>
      <button className="text-white rounded-lg border-x-4 mb-2 border border-white p-2 w-[80vw] ">Browse Rentals <ArrowRight className="inline-block"/></button>
    </div>
  )
}

export default Hero
