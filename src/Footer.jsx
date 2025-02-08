import Logo from './assets/picoia-logo.jpg';
import  {FaFacebookSquare, FaInstagram } from 'react-icons/fa';

function Footer(){
    return(
        <footer>
            <img src={Logo} alt="Picoia Logo" />
            <FaFacebookSquare size='30' color='#0A62F7'/>
            <FaInstagram size='30' color='#FD01AA'/>
            <p>© 2025 | All Rights Reserved</p>
        </footer>
    )
}

export default Footer;