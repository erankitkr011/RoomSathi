import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';


const OwnerDashboard = () => {
  const { fetchOwnerData } = useContext(AppContext);
  const { ownerData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOwnerData();
  }, []);

  return (
    <div>
      {ownerData && ownerData.length > 0 ? (
        ownerData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.images[0]} alt="Home" />
            <div className="subCard">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              {item.floors.map((floor, floorIndex) => (
                <div key={floorIndex}>
                  {floor.rooms.map((room, roomIndex) => (
                    <div key={roomIndex}>
                      <p>{room.type === 'room' ? 'Room' : 'Flat'} Available</p>
                      <p>Price: {room.price}</p>
                    </div>
                  ))}
                </div>
              ))}
              <button className="button" onClick={() => navigate('/complete-description', { state: { home: item } })}>View More</button>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default OwnerDashboard;