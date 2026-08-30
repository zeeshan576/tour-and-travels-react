import { Link } from "react-router-dom";
import {MenuItems} from './MenuItem'
import './Navbar.css'
import { useState } from "react";


function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (

        <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>
            <div className="menu-icon">
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}
                onClick={()=>setClicked(!clicked)}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item , index) => {
                    return(
                         <li key={index}>
                             <Link className={item.cname} to={item.path}>
                             <i className={item.icon}></i>
                                {item.title}
                             </Link>
                        </li>
                    )
                } )}
               <button>Sign Up</button>
            </ul>
        </nav>
    );
}

export default Navbar;