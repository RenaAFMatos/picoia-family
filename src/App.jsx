import Footer from './Footer.jsx';
import NavBar from './Nav.jsx';
import Home from './Home.jsx';
import Litters from './Litters.jsx';
import Contacts from './Contacts.jsx';
import About from './About.jsx';
import './App.css';



function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <Litters />
      <About />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;