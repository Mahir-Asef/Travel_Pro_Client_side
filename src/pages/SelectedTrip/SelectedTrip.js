import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./SelectedTrip.css";
import useFirebase from './../../hooks/useFirebase';
import useCart from './../../hooks/useCart';

const SelectedTrip = ({ selectedTrip }) => {
  const { user } = useFirebase();
  const { remove } = useCart();
  const { uid } = user;
  const { _id, city, country, img, description, duration, age, price } = selectedTrip;

  const history = useHistory();


  return (
    <div className="selected-product d-flex flex-column">
      <img className="selected-tour-img" src={img} alt="" />
      <div className="mx-3">
        <h3 className="product-name fw-bolder fs-1 mt-3">
          {city}, {country}
        </h3>
        <p className="details mt-3">{description.slice(0, 150)}...</p>
        <h5 className="price fw-normal mb-3">Price: ${price}</h5>
      </div>

      
    </div>
  );
};

export default SelectedTrip;



