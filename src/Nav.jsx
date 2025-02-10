import Logo from './assets/picoia-logo.jpg'
import './Nav.css'

function NavBar(){
    return(
        <div className="nav">
            <img src={Logo} alt="Picoia family logo" className='logo'/>
            <div className= "nav-links">
                <a>Home</a>
                <a>Litters</a>
                <a>About us</a>
                <a>Contacts</a>
            </div>
        </div>
    )
}

export default NavBar;