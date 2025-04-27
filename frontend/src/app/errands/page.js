import React from 'react'
import { errands } from './components/data'


function page() {
  return (
    <div className="bg-zinc-700">
      {errands[0].title}
  
    </div>
  )
}

export default page
