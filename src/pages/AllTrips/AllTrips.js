import React, { useState, useEffect } from "react";
import "./AllTrips.css";
import useTripsData from "./../../hooks/useTripsData";
import Trip from './../Trip/Trip';

const AllTrips = ({ trip }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);

  return (
    <div className="container mb-5">
      <h1>All Trips</h1>
      <div className="all-trip">
        {trips.map((trip) => (
          <Trip trip={trip} key={trip._id}></Trip>
        ))}
      </div>
    </div>
  );
};

export default AllTrips;
