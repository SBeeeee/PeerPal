import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';


function RideCard({ ride }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-2 text-white space-y-4 w-full shadow-md border border-[#2b2b2b]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">
            {ride.fromdestination} → {ride.destination}
          </h2>
          <p className="text-sm text-gray-400 mt-1">Posted {formatDistanceToNow(new Date(ride.createdAt), { addSuffix: true })}</p>
        </div>

        <div className="flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-full">
          {ride.ride === 'Cab' ? '🚖 Cab' : '🛺 Auto'}
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          📅 <span>{format(new Date(ride.travelDate), 'dd MMM yyyy')}</span>
        </div>
        <div className="flex items-center gap-2">
          ⏰ <span>{format(new Date(ride.travelDate), 'h:mm a')}</span>
        </div>
        <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
          {ride.seats} seats available
        </div>
      </div>

      {/* Description */}
      {ride.Details && (
        <p className="text-sm text-gray-300 leading-relaxed">
        {ride.Details}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2">
        <span className="font-semibold text-sm">{ride.postedby.name}</span>
        <button
          className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white px-4 py-1.5 rounded-full text-sm"
          
        >
          Join Ride
        </button>
      </div>
    </div>
  );
}

export default RideCard;
