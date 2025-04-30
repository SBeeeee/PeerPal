import React from 'react'
import { myTasks } from './data'
import { MapPin } from 'lucide-react';

function MyCards() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {myTasks.map((task) => {
        const Icon = task.icon;
        return (
          <div key={task.id} className="w-80 border px-2 py-1 shadow-sm shadow-green-600 border-dashed border-amber-50">
            <h1 className="text-white text-xl font-bold flex items-center gap-2">
              <Icon /> {task.title}
            </h1>
            <div className="text-gray-400 text-lg">{task.description}</div>
            <div className="text-amber-100 flex items-center gap-1">
              <MapPin />
              <div className="text-lg">{task.distance} away</div>
            </div>
            <div className="text-lg text-white font-semibold">{task.status}</div> 
            <div className="border border-white/50 mt-6"></div>
            <div className="flex text-white font-bold text-lg items-center h-16 justify-between">
              <div>{task.price}</div>
             
              <button className="bg-green-300 px-2 rounded-lg py-2 text-gray-900">View Details</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyCards;
