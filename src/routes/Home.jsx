import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from '../assets/HomeImg.jpg';
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home () {
return(
    <>
        <Navbar />
        <Hero cname="Hero" 
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        path= "/contact"
        btnClass = "show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
)

}

export default Home;