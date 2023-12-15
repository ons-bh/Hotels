import React from 'react';

const HotelList = ({ hotels, deleteHotel }) => {
  const handleDelete = (hotelId) => {
    deleteHotel(hotelId);
  };

  return (
    <div>
      <h1>Liste des hôtels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.address}</p>
            <p>
              {hotel.city}, {hotel.country}
            </p>
            <p>Étoiles : {hotel.stars}</p>
           
          </li>
          
        ))}
      </ul>
      <button onClick={() => handleDelete(hotel._id)}>Supprimer</button>
    </div>
  );
};

export default HotelList;
