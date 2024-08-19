import React from 'react';
import { useLocation } from 'react-router-dom';

const CompDescription = () => {
  const location = useLocation();
  const { home } = location.state;

  return (
    <div>
      {home ? (
        <div className="card">
          <img src={home.images[0]} alt="Home" />
          <div className="subCard">
            <h2>{home.name}</h2>
            <p>{home.description}</p>
            <p><strong>Address:</strong> {home.address.street}, {home.address.city}, {home.address.state}, {home.address.zipCode}, {home.address.country}</p>
            <p><strong>Amenities:</strong> {home.amenities.join(', ')}</p>
            <p><strong>Contact Info:</strong> {home.contactInfo.phone}, {home.contactInfo.email}</p>
            <p><strong>ID Proof:</strong> {home.idProof}</p>
            <p><strong>Size:</strong> {home.size} sq ft</p>
            <p><strong>Status:</strong> {home.status}</p>
            {home.floors.map((floor, floorIndex) => (
              <div key={floorIndex}>
                {floor.rooms.map((room, roomIndex) => (
                  <div key={roomIndex}>
                    <p>{room.type === 'room' ? 'Room' : 'Flat'} Available</p>
                    <p>Price: {room.price}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CompDescription;