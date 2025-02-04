import Logo from './assets/picoia-logo.jpg'
import './Nav.css'

function NavBar(){
    return(
        <div className="nav">
            <img src={Logo} alt="Picoia family logo" />
            <div className= "nav-links">
                <a>Home</a>
                <a>Litters</a>
                <a>Contacts</a>
                <a>About us</a>
            </div>
        </div>
    )
}

export default NavBar;