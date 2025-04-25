import React from 'react'
import { CircleCheckBig } from 'lucide-react'
import { Bell } from 'lucide-react'

function UpperNav() {
  return (
    <div className="flex bg-zinc-800 items-center justify-between text-white py-2 px-2 shadow-green-300 shadow-xs">
        <div className="flex items-center">
        <CircleCheckBig size={24} strokeWidth={1.75} absoluteStrokeWidth />
      <div className="text-lg font-extrabold ml-1 text-purple-300 ">HelpBuddy</div></div>
      <Bell size={20} strokeWidth={1.75} absoluteStrokeWidth />
    </div>
  )
}

export default UpperNav
