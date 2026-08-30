import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from '../assets/night.jpg';
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
    return(
        <>
        <Navbar />
        <Hero cname="Hero-mid" 
        heroImg={AboutImg}
        title="About"
        url= "/"
        btnClass = "hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )

}

export default About;