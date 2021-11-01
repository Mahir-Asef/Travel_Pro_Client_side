import { useState, useEffect } from "react";

const useTripsData = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("https://spooky-nightmare-94517.herokuapp.com/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data))
  }, []);
  return [trips, setTrips];
};

export default useTripsData;
