"use client"
import React,{useState} from 'react'

function TaskModal({onClose,onSubmit}) {
  const [formData, setFormData]=useState({
    title:"",
    description:"",
    price:"",
    category:"",
    location:"",
  })

  const handleinput=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handlesubmit=()=>{
    onSubmit(formData)
  }

  return (
    <div className="  fixed inset-0 flex justify-center items-center" >
        <div className="bg-white/90 bg-opacity-50 w-[50vw] ">
        <h2 className="text-lg font-bold mb-4">Enter Task Details</h2>
        <label className="block text-left font-semibold">Title</label>
            <input type="text" name="title" className="border p-2 w-full mb-2 rounded" onChange={handleinput} />
            <label className="block text-left font-semibold">Description</label>
            <input type="text" name="description" className="border p-2 w-full mb-2 rounded" onChange={handleinput} />
            <label className="block text-left font-semibold">Price</label>
            <input type="number" name="price" className="border p-2 w-full mb-2 rounded" onChange={handleinput} />
            <label className="block text-left font-semibold">Category</label>
            <input type="text" name="category" className="border p-2 w-full mb-2 rounded" onChange={handleinput} />
            <label className="block text-left font-semibold">Location</label>
            <input type="text" name="location" className="border p-2 w-full mb-2 rounded" onChange={handleinput} />
            <div className="flex justify-end mt-3">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handlesubmit}>Submit</button>
              <button className="ml-3 bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            </div>
        </div>
      
    </div>
  )
}

export default TaskModal
