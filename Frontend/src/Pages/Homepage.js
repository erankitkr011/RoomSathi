import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext'
import './Homepage.css';
const Homepage = () => {
  const { fetchData } = useContext(AppContext);
  const { data } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data && data.homes && data.homes.length > 0 ? (
        data.homes.map((item, index) => (
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
              <button className="button">View More</button>
              <button className="button">Book</button>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
export default Homepage;