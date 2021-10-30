import react from 'react';
import React , { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './TripSection.css';
import Trip from './../Trip/Trip';
const TripSection = () => {
    const [trips, setTrips] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/trips")
        .then((res) => res.json())
        .then((data) => setTrips(data))
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div className="container trip-section">
        <h1 className="fw-bold mb-5">Trip Destination</h1>
        <div className="total-trips">
          {trips.slice(0, 6).map((trip) => (
            <Trip trip={trip} key={trips._id}></Trip>
          ))}
        </div>
        <NavLink to="/trips">
          <Button className="see-more btn-danger">See more</Button>
        </NavLink>
      </div>
    );
  };  

export default TripSection;