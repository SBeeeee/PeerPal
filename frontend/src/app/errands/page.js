import React from 'react'
import { errands } from './components/data'
import Dropdown from './components/DropDown'

function page() {
  return (
    <div className="bg-zinc-700">
      {errands[0].title}
   <Dropdown/>
    </div>
  )
}

export default page
