import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [selectedTrips, setSelectedTrips] = useState([]);
  const [mySelectedTrips, setMySelectedTrips] = useState([]);

  useEffect(() => {
    fetch("https://spooky-nightmare-94517.herokuapp.com/cart")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedTrips(data);
        }
      });
  }, [selectedTrips]);

  // ADDING TO CART

  function addToCart(trip) {
    delete trip._id;
    trip.email = user?.email;
    trip.uid = uid;
    trip.status = "pending";

    fetch("https://spooky-nightmare-94517.herokuapp.com/cart", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(trip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('Successfully booked. You can checked it in My Trips.')
          const newBooked = [...selectedTrips, trip];
          setSelectedTrips(newBooked);
        }
      });
  }

  // REMOVE FROM CART

  const cancel = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      fetch(`https://spooky-nightmare-94517.herokuapp.com/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const newSelecteds = selectedTrips.filter((trip) => trip._id !== id);
          setSelectedTrips(newSelecteds);
        });
    }
  };

  return { selectedTrips, setSelectedTrips, cancel, addToCart };
};

export default useCart;
