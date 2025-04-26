import React from 'react'
import Link from 'next/link'
import { HandHelping } from 'lucide-react'
function Working() {
  return (
    <div className="text-center">
      <h1 className="text-amber-50 text-center text-3xl font-extrabold">How It Works</h1>

      <div className="border-emerald-900  border m-4">
      
    <div className="flex justify-center text-green-500"><HandHelping size={72} /></div>
<Link href="" className="text-white border border-emerald-900 p-2 rounded-lg text-lg">Browse Tasks</Link>
      </div>
    </div>
  )
}

export default Working
