import React from "react";
import "./page.css";
import Vector1 from "./Image/Vector1.png";
import Vector2 from "./Image/Vector2.png";
import Own from "./Image/own2.png";

function About() {
  return (
    <>
    <div className="neonText" style={{}}>
      <h1 className="About">About-Me</h1>
    </div>
      <div className="intro">
        <div className="i-left">
          <div className="a-name">
            {/* <span>Hey, I AM</span>
            <span>Pradeepkumar Prajapati</span> */}
            <span className="span">
              Frontend Devloper with some experience in web designing and
              developement, producting the Quality work and worked with some
              comapany. Also , learn and work on some project.
            </span>
          </div>
        </div>
        <div className="a-right">
          <img src={Vector1} alt="" className="own" />
          <img src={Vector2} alt="" className="own" />
          <img src={Own} alt="" className="own pic" />
        </div>
      </div>
      <div>
        <div className="">
          <center className="Details">
            <h2 className="neonText">Details</h2>
          </center>
          <div className="table">
            <p  className="Details">Education:</p>
            <center>
              <table>
                <tr>
                  <th>Education (Mention your Course name)</th>
                  <th>Institution</th>
                  <th>Year</th>
                  <th>Percentage and GPA/Grade</th>
                </tr>
                <tr>
                  <td>B.Sc. CS Sem IV</td>
                  <td>Thakur College of Science & Commerce, Mumbai, Maharashtra 400101</td>
                  <td>2022</td>
                  <td>79.10%</td>

                </tr>
                <tr>
                  <td>B.Sc. CS Sem III</td>
                  <td>Thakur College of Science & Commerce, Mumbai, Maharashtra 400101</td>
                  <td>2021</td>
                  <td>77.40%</td>
                </tr>
                <tr>
                  <td>B.Sc. CS Sem II</td>
                  <td>Thakur College of Science & Commerce, Mumbai, Maharashtra 400101</td>
                  <td>2021</td>
                  <td>75.60%</td>

                </tr>
                <tr>
                  <td>B.Sc. CS Sem I</td>
                  <td>Thakur College of Science & Commerce, Mumbai, Maharashtra 400101</td>
                  <td>2020</td>
                  <td>70.60%</td>

                </tr>
              </table>
            </center>
            <p  className="Details">Address:</p>
            <center>
              <p>S-10 Shitala Chawal ,Gokul Nagar ,Akurli Road ,Kandivali-East Mumbai-400101</p>
            </center>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default About;
