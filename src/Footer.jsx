import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Logo from "./assets/picoia-logo.jpg";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <img className="logo" src={Logo} alt="Picoia family logo" />
            <div className="wrapper">
                <a
                    href="https://www.facebook.com/profile.php?id=100092261859495"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                >
                    <FaFacebookSquare size="30" color="#0A62F7" />
                </a>
                <a
                    href="https://www.instagram.com/picoiafamily.corgis/"
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                >
                    <FaInstagram size="30" color="#FD01AA" />
                </a>
            </div>
            <p className="author">ReinDeer code</p>
            <p className="rights">© 2025 | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
