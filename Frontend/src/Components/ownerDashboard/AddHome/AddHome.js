import React, { useState } from 'react';

const AddHome = () => {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
      });
      const [price, setPrice] = useState('');
      const [description, setDescription] = useState('');
      const [images, setImages] = useState(['']);
      const [amenities, setAmenities] = useState(['']);
      const [size, setSize] = useState('');
      const [floors, setFloors] = useState([{ floorNumber: 1, rooms: [{}] }]);
    
      const handleAddressChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
      };
    
      const handlePriceChange = (e) => setPrice(e.target.value);
      const handleDescriptionChange = (e) => setDescription(e.target.value);
      const handleSizeChange = (e) => setSize(e.target.value);
    
      const handleImageChange = (index, value) => {
        const newImages = [...images];
        newImages[index] = value;
        setImages(newImages);
      };
    
      const handleAmenitiesChange = (index, value) => {
        const newAmenities = [...amenities];
        newAmenities[index] = value;
        setAmenities(newAmenities);
      };
    
      const handleFloorChange = (index, e) => {
        const newFloors = [...floors];
        newFloors[index].floorNumber = e.target.value;
        setFloors(newFloors);
      };
    
      const handleRoomChange = (floorIndex, roomIndex, e) => {
        const { name, value } = e.target;
        const newFloors = [...floors];
        newFloors[floorIndex].rooms[roomIndex] = { ...newFloors[floorIndex].rooms[roomIndex], [name]: value };
        setFloors(newFloors);
      };
    
      const addFloor = () => {
        setFloors([...floors, { floorNumber: floors.length + 1, rooms: [{}] }]);
      };
    
      const removeFloor = (index) => {
        const newFloors = floors.filter((_, i) => i !== index);
        setFloors(newFloors);
      };
    
      const addRoom = (floorIndex) => {
        const newFloors = [...floors];
        newFloors[floorIndex].rooms.push({});
        setFloors(newFloors);
      };
    
      const removeRoom = (floorIndex, roomIndex) => {
        const newFloors = [...floors];
        newFloors[floorIndex].rooms = newFloors[floorIndex].rooms.filter((_, i) => i !== roomIndex);
        setFloors(newFloors);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log({ address, price, description, images, amenities, size, floors });
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <h1>Add a New Home</h1>
          <div>
            <label>Street:</label>
            <input type="text" name="street" value={address.street} onChange={handleAddressChange} />
          </div>
          <div>
            <label>City:</label>
            <input type="text" name="city" value={address.city} onChange={handleAddressChange} />
          </div>
          <div>
            <label>State:</label>
            <input type="text" name="state" value={address.state} onChange={handleAddressChange} />
          </div>
          <div>
            <label>ZIP:</label>
            <input type="text" name="zip" value={address.zip} onChange={handleAddressChange} />
          </div>
          <div>
            <label>Price:</label>
            <input type="number" value={price} onChange={handlePriceChange} />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>
          <div>
            <label>Size (sq ft):</label>
            <input type="number" value={size} onChange={handleSizeChange} />
          </div>
          <div>
            <label>Images:</label>
            {images.map((image, index) => (
              <input
                key={index}
                type="text"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder={`Image URL ${index + 1}`}
              />
            ))}
            <button type="button" onClick={() => setImages([...images, ''])}>Add Image</button>
          </div>
          <div>
            <label>Amenities:</label>
            {amenities.map((amenity, index) => (
              <input
                key={index}
                type="text"
                value={amenity}
                onChange={(e) => handleAmenitiesChange(index, e.target.value)}
                placeholder={`Amenity ${index + 1}`}
              />
            ))}
            <button type="button" onClick={() => setAmenities([...amenities, ''])}>Add Amenity</button>
          </div>
          <div>
            {floors.map((floor, floorIndex) => (
              <div key={floorIndex}>
                <h2>Floor {floor.floorNumber}</h2>
                <div>
                  <label>Floor Number:</label>
                  <input
                    type="number"
                    value={floor.floorNumber}
                    onChange={(e) => handleFloorChange(floorIndex, e)}
                  />
                </div>
                {floor.rooms.map((room, roomIndex) => (
                  <div key={roomIndex}>
                    <h3>Room {roomIndex + 1}</h3>
                    <div>
                      <label>Room Name:</label>
                      <input
                        type="text"
                        name="name"
                        value={room.name || ''}
                        onChange={(e) => handleRoomChange(floorIndex, roomIndex, e)}
                        placeholder="Room Name"
                      />
                    </div>
                    <div>
                      <label>Room Size:</label>
                      <input
                        type="number"
                        name="size"
                        value={room.size || ''}
                        onChange={(e) => handleRoomChange(floorIndex, roomIndex, e)}
                        placeholder="Room Size"
                      />
                    </div>
                    <div>
                      <label>Room Type:</label>
                      <input
                        type="text"
                        name="type"
                        value={room.type || ''}
                        onChange={(e) => handleRoomChange(floorIndex, roomIndex, e)}
                        placeholder="Room Type"
                      />
                    </div>
                    <button type="button" onClick={() => removeRoom(floorIndex, roomIndex)}>Remove Room</button>
                  </div>
                ))}
                <button type="button" onClick={() => addRoom(floorIndex)}>Add Room</button>
                <button type="button" onClick={() => removeFloor(floorIndex)}>Remove Floor</button>
              </div>
            ))}
            <button type="button" onClick={addFloor}>Add Floor</button>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    };
export default AddHome
