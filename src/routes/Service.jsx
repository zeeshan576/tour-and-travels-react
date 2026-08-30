import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from '../assets/night.jpg';
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
    return(
        <>
         <Navbar />
        <Hero cname="Hero-mid" 
        heroImg={AboutImg}
        title="Service"
        url= "/"
        btnClass = "hide"
        />
        <Trip/>
        <Footer/>
        </>
    )

}

export default Service;