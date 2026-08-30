import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from '../assets/2.jpg';
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Contact() {
    return(
        <>
         <Navbar />
        <Hero cname="Hero-mid" 
        heroImg={ContactImg}
        title="Contact"
        url= "/"
        btnClass = "hide"
        />
        <ContactUs/>
        <Footer/>
        </>
    )

}

export default Contact;