// import useCartData from "../../../hooks/useCartData";
// import useCart from "./../../../hooks/useCart";
import "./MyTrips.css";
import { useState } from "react";
import { useEffect } from "react";
import MySelectedTrip from './../MySelectedTrip/MySelectedTrip';
import useFirebase from './../../hooks/useFirebase';

const MyTrips = () => {
  const { user } = useFirebase();
  const { uid } = user;
  const [mySelections, setMySelections] = useState([]);
  useEffect(() => {
    fetch(`https://spooky-nightmare-94517.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setMySelections(data);
        }
      });
  }, [uid, mySelections]);

  return (
    <div className="container">
      <div>
        <h1>My Trips</h1>
      </div>
      <div>
        <div className="container mb-5">
          <div className="all-trip">
            {mySelections.map((mySelection) => (
              <MySelectedTrip
                mySelection={mySelection}
                key={mySelection._id}
              ></MySelectedTrip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTrips;
