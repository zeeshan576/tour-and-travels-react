import './FooterStyle.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Zeeshi_Tours</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <Link to='https://www.facebook.com/share/1Ee5CSWxQs/' ><i className='fa-brands fa-facebook-square' ></i></Link>
                    <Link to='https://www.instagram.com/zeeshiii_hadiii?igsi=bnk5YWNldW4yZXRw '><i className='fa-brands fa-instagram-square'></i></Link>
                    <Link to='https://www.snapchat.com/add/zee_shii7?share_id=Lco0RML9HOs&locale=en-US'><i className='fa-brands fa-snapchat-square'></i></Link>
                </div>
            </div>

            <div className='bottom'>
                <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>license</a>
                <a href='/'>All Version</a>
                </div>

                <div>
                 <h4>Community</h4>
                <a href='https://github.com/zeeshan576'>Github</a>
                <a href='/'>Issue</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
                </div>

                <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>TroubleShooting</a>
                <Link to="/contact">Contact Us</Link>
                </div>

                <div>
                <h4>Others</h4>
                <a href='/'>Terms Of Services</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>license</a>
                </div>

                
            </div>

        </div>
    )

}

export default Footer;