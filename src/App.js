import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../src/pages/Header/Header';
import Home from '../src/pages/Home/Home';
import Footer from '../src/pages/Footer/Footer';
import About from '../src//pages/About/About';
import Login from '../src/pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import TripDetails from './pages/TripDetails/TripDetails';
import AddTrips from './pages/AddTrips/AddTrips';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/aboutus">
          <About></About>
        </Route>
        <Route path="/tripdetail/:id">
          <TripDetails></TripDetails>
        </Route>
        <Route path="/addtrips">
          <AddTrips></AddTrips>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
