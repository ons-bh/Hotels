import React from 'react';
import axios from 'axios';

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
            <button onClick={() => handleDelete(hotel._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home({ hotelList }) {
  const deleteHotel = async (hotelId) => {
    try {
      await axios.delete(`http://localhost:3000/api/hotels/${hotelId}`);
      // Effectuer toute autre logique de mise à jour de la liste des hôtels après la suppression réussie
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return <HotelList hotels={hotelList} deleteHotel={deleteHotel} />;
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/api/hotels");
  const hotelList = res.data;

  return {
    props: {
      hotelList,
    },
  };
}
