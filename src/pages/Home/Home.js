import react from 'react';
import Banner from '../Banner/Banner';
import HeroSection from '../HeroSection/HeroSection';
import Subscription from './../Subscription/Subscription';
import TripSection from './../TripSection/TripSection';
import UserReview from './../UserReview/UserReview';
const Home = () => {
    return (
        <div>
           <HeroSection></HeroSection>
           <TripSection></TripSection>
             <Banner></Banner>
             <UserReview></UserReview>
             <Subscription></Subscription>
             
        </div>
    );
};

export default Home;