import React from 'react';
import { rides } from './data';
import RideCard from './RideCard';

function TodaysRides() {
  const todaysRides = rides.filter((ride) => ride.day === 'Today');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {todaysRides.length > 0 ? (
        todaysRides.map((ride) => <RideCard key={ride.id} ride={ride} />)
      ) : (
        <p className="text-center text-gray-400">No rides for today.</p>
      )}
    </div>
  );
}

export default TodaysRides;
