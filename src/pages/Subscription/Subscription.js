import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import './Subscription.css';
const Subscription = () => {
    return (
        <div className="newsletter text-white mt-5">
          <h1 className="mb-4 text-primary">Click here to see our upcoming events</h1>
          <InputGroup className="w-50 mx-auto">
            <FormControl
              placeholder="Your Email"
            />
            <Button variant="outline-warning text-white" id="button-addon2">
              Subscribe now
            </Button>
          </InputGroup>
        </div>
      );
    };
export default Subscription;