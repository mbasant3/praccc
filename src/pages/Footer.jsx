import React from "react";
// import "./Footer.css";
import Github from "./Image/github.png";
import Facebook from "./Image/Facebook.png";
import Instagram from "./Image/instagram.png";

function Footer() {
  return (
    <div className="i-cons">
        <a href="/">
            <img src={Github} alt="" />
        </a>
        <a href="/">
            <img src={Facebook} alt="" />
        </a>
        <a href="/">
            <img src={Instagram} alt="" />
        </a>
        
    </div>
    // <div className="main-footer">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col">
    //                 <h1>Address</h1>
    //                 <ul className="unstyled">
    //                     <li>Kranti Nagar, Lokhandwala</li>
    //                     <li>Kandiavli-(East)</li>
    //                     <li>Mumbai-400101</li>
    //                 </ul>
    //             </div>
    //             <div className="col">
    //                 <ul>
    //                     <li>Mobile No</li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    //   <h1>footer</h1>
    // </div>
  );
}

export default Footer;
