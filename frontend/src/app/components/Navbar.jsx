import React from 'react'
import { IoHome } from "react-icons/io5";
function Navbar() {
  return (
    <div className="flex justify-center">
    <div className="flex bg-blue-600 p-2 px-4 rounded-2xl mb-2 justify-between  w-[90vw]">
    <IoHome />
    <IoHome /><IoHome /><IoHome />
    </div></div>
  )
}

export default Navbar
