import { useState, useEffect } from "react";

const useTripsData = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data))
  }, []);
  return [trips, setTrips];
};

export default useTripsData;
