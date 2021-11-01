import { useEffect, useState } from "react";

const useTrips = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(`https://spooky-nightmare-94517.herokuapp.com/cart`)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return { trips, setTrips };
};

export default useTrips;