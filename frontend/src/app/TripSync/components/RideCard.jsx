import React from 'react';

function RideCard({ ride }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-2 text-white space-y-4 w-full shadow-md border border-[#2b2b2b]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">
            {ride.from} → {ride.to}
          </h2>
          <p className="text-sm text-gray-400 mt-1">Posted {ride.postedAgo}</p>
        </div>

        <div className="flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-full">
          {ride.rideType === 'Cab' ? '🚖 Cab' : '🛺 Auto'}
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          📅 <span>{ride.day}</span>
        </div>
        <div className="flex items-center gap-2">
          ⏰ <span>{ride.time}</span>
        </div>
        <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
          {ride.seatsAvailable} seats available
        </div>
      </div>

      {/* Description */}
      {ride.description && (
        <p className="text-sm text-gray-300 leading-relaxed">
          {ride.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <span className="font-semibold text-sm">{ride.user.name}</span>
        <button
          className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white px-4 py-1.5 rounded-full text-sm"
          aria-label={`Join ride with ${ride.user.name}`}
        >
          Join Ride
        </button>
      </div>
    </div>
  );
}

export default RideCard;
