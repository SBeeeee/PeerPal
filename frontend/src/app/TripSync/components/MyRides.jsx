import React from 'react';
import { rides } from './data';
import RideCard from './RideCard';



function MyRides() {
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {rides.length > 0 ? (
        rides.map((ride) => <RideCard key={ride.id} ride={ride} />)
      ) : (
        <p className="text-center text-gray-400">You haven’t posted any rides yet.</p>
      )}
    </div>
  );
}

export default MyRides;
