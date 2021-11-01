import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MySelectedTrip.css";
import useCart from './../../hooks/useCart';
import useFirebase from './../../hooks/useFirebase';


const MySelectedTrip = ({ mySelection }) => {
  const { user } = useFirebase();
  const { cancel } = useCart();
  const { uid } = user;
  const { _id, city, country, img, description, duration, price } = mySelection;

  const history = useHistory();


  return (
    <div className="selected-product d-flex flex-column">
      <img className="selected-trip-img" src={img} alt="" />
      <div className="mx-3">
        <h3 className=" text-danger fw-bolder fs-1 mt-3">
          {city}, {country}
        </h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
      </div>

      <button onClick={() => cancel(_id)} className="buy-now btn btn-danger mb-4">
        Cancel booking
      </button>
    </div>
  );
};

export default MySelectedTrip;
