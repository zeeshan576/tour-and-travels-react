import './FooterStyle.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <Link href='/'><i className='fa-brands fa-facebook-square'></i></Link>
                    <Link href=''><i className='fa-brands fa-instagram-square'></i></Link>
                    <Link href='/'><i className='fa-brands fa-behance-square'></i></Link>
                    <Link href='/'><i className='fa-brands fa-twitter-square'></i></Link>
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
                <a href='/'>Github</a>
                <a href='/'>Issue</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
                </div>

                <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>TroubleShooting</a>
                <a href='/'>Contact Us</a>
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

export default Footer