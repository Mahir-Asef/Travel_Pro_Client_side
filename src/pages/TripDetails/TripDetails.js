import React, { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./TripDetails.css";
import useAuth from './../../hooks/useAuth';
import useCart from './../../hooks/useCart';
const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState([]);
  const { addToCart, AllContexts } = useCart();

  useEffect(() => {
    fetch(`https://spooky-nightmare-94517.herokuapp.com/trips/${id}`)
      .then((res) => res.json())
      .then((data) => setTrip(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>

      <div className="trip-hero">
        <div className="trip-hero-bg">
          <img src={trip.img} alt="" className="trip-background" />
        </div>
        <div className="trip-hero-title">
          <h1 className="trip-caption mb-sm-3">{trip.city}</h1>
          <h1 className="trip-caption mb-sm-3">{trip.country}</h1>
        </div>
      </div>

      {/* DETAILS */}

      <div className="container details-container my-5">
        <div className="text-start">
          <h2>
            {trip.city}, {trip.country}
          </h2>
          <p className="details">{trip.description}</p>
        </div>
        <div className="ms-5">
          <div className="d-flex text-start ms-auto info-container">
            <div className="booking-section">
              <p className="fw-bold details">Price: ${trip.price}/traveler</p>
              <p className="details">Destination: {trip.city}, {trip.country}</p>
              <p className="details">Duration: {trip.duration}</p>
              <p className="details">Age: {trip.age}</p>
              <button
            onClick={() => addToCart(trip)}
            className="btn btn-primary text-white w-100"
          >
            Book Trip
            <FontAwesomeIcon icon={faArrowRight} className=" ms-2" />
          </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default TripDetails;
