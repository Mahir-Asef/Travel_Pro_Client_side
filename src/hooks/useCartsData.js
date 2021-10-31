import { useState, useEffect} from 'react';

const useCartsData = () => {
    const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setTrips(data))
  }, []);
  return [trips, setTrips];
};

export default useCartsData;