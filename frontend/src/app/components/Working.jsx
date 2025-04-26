import React from 'react'
import Link from 'next/link'
import { HandHelping, Package, Award } from 'lucide-react'

const cards = [
  {
    title: 'Help Others',
    subtitle: 'Community tasks posted by your community members',
    description: 'Browse through tasks posted by users who need assistance. Offer your help and negotiate points.',
    button: 'Browse Tasks',
    link: '',
    icon: HandHelping
  },
  {
    title: 'Rent Items',
    subtitle: 'Find and rent items from your community',
    description: 'Browse through items available for rent. Request rentals and negotiate terms with the owners.',
    button: 'Browse Rentals',
    link: '',
    icon: Package
  },
  {
    title: 'Earn Points',
    subtitle: 'Collect points by helping others',
    description: 'Earn points by completing tasks. Use these points to request help or rent items from others.',
    button: 'View Dashboard',
    link: '',
    icon: Award
  }
]

function Working() {
  return (
    <div className="text-center">
      <h1 className="text-amber-50 text-center text-3xl font-extrabold">How It Works</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-8 my-4">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <div key={index} className="border-emerald-900 border p-6 rounded-lg max-w-sm">
              <div className="flex justify-center text-green-500"><Icon size={72} /></div>
              <h1 className="text-amber-50 text-center text-xl font-extrabold">{card.title}</h1>
              <div className="text-gray-400">{card.subtitle}</div>
              <div className="text-amber-50">{card.description}</div>
              <Link href={card.link} className="text-white border border-emerald-900 font-semibold rounded-lg text-lg inline-block p-2 m-3">
                {card.button}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Working
