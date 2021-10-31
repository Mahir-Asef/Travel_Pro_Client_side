
import useCart from './../../hooks/useCart';
import SelectedTrip from './../SelectedTrip/SelectedTrip';

const AllOrders = () => {
  const {selectedTrips} = useCart();
  return (
    <div className="container">
      <div>
        <h1>All Ordered Trips</h1>
      </div>
      <div>
        <div className="container mb-5">
          <div className="all-trip">
            {selectedTrips.map((selectedTrip) => (
              <SelectedTrip
              selectedTrip={selectedTrip}
                key={selectedTrip._id}
              ></SelectedTrip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
