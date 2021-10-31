import { useEffect, useState } from "react";

const useTrips = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cart`)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return { trips, setTrips };
};

export default useTrips;