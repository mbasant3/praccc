import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./nav";
import Home from './pages/Home';
import About from './pages/About';
import Interest from './pages/Interest';
import Footer from './pages/Footer';
import border from "./index.css";

// import "bootstrap/dist/css";
function App() {
  return (
      <>
      
        <Navbar />
        
        <div className='nav'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/interest" element={<Interest />} />
        
      </Routes>  
      </div>
      <div className='footer' style={border}>
        <Footer/>   
      </div>
      
       
      </>

  
  );
}

export default App;