import './Hero.css'

import { Link } from 'react-router-dom';
function Hero(props) {
    return(
        <>
        <div className={props.cname}>
            <img alt='HomeImg'  src={props.heroImg}></img>
            
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link to={props.path} className={props.btnClass}>{props.buttonText}</Link>
            </div>
        </div>
        </>
    )

}

export default Hero;