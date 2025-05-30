import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import Donation from '../components/Donation';
import VolunteerCards from '../components/VolunteerCards';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Hero></Hero>
            <VolunteerCards></VolunteerCards>
            <Donation></Donation>
        </div>
    );
};

export default Home;