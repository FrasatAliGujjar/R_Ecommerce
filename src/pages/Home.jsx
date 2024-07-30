import React from 'react'
import "../pages/CSS/Home.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Hero from '../components/Hero/Hero.jsx';
import Popular from '../components/Popular/Popular.jsx';
import Offers from '../components/Offers/Offers.jsx';
import NewCollections from '../components/NewCollections/NewCollections.jsx';

const Home = () => {
    return (
        <>
            <Navbar />
            {/* ===================================== */}
            <Hero />
            <br />
            <br />
            <h1 className='pop_top_heading'>Popular Collection of Summer</h1>
            <Popular />
            <br />
            <Offers />
            <br />
            <br />
            <h1 className='pop_top_heading'>New Collection of EveryOne</h1>
            <NewCollections />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* ===================================== */}
            <Footer />
        </>
    )
}

export default Home
