import react from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Trip.css';
const Trip = ({trip}) => {
    const {_id, city, country, img, description, duration, age, price} = trip;
  
    return (
      <div className="item d-flex flex-column">
        <img className="card-img" src={img} alt="" />
        <div className="mx-3">
          <h3 className="item-name fw-bolder fs-1 mt-3">{city}, {country}</h3>
          <p className="details mt-3">{description.slice(0, 150)}...</p>
          <h5 className="price fw-normal mb-3">Price: ${price}</h5>
        </div>
        <NavLink className="mt-auto" to={`/tripdetail/${_id}`}>
          <Button className="buy-now btn-warning text-white mb-4">Book your trip</Button>
        </NavLink>
      </div>
    );
  };

export default Trip;