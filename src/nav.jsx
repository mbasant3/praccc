import React from 'react';
// import Link from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
return (
	<>
        <nav className='navbar'>

            <ul className='nav-links menu'>
                {/* <div className="menu"> */}
                <li>
                    <Link to="/" className='name'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='name'>AboutUs</Link>
                </li>
                <li className='li'>
                    <Link to="/interest" className='name'>Interest</Link>
                </li>
                {/* </div> */}
            </ul>
        </nav>
    
	</>
);
};


export default Navbar;
