import react from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import Subscription from './../Subscription/Subscription';
import ContactUs from './../ContactUs/ContactUs';
import TripSection from './../TripSection/TripSection';
const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <TripSection></TripSection>
             <Banner></Banner>
             <Subscription></Subscription>
             <ContactUs></ContactUs>
             
        </div>
    );
};

export default Home;