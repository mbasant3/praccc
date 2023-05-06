import React from "react";
import "./page.css";
import HTML from "./Image/html.png";
import CSS from "./Image/css.png";
import Js from "./Image/js.png";
import RJS from "./Image/react.png";
import Python from "./Image/python.png";
import Travelling from "./Image/travell.jpg";
import Progamming from "./Image/programmer.jpeg";
import Basketball from "./Image/basketball.jpeg";

function Interest() {
  return (
    // <div className="interest">
    //   <h1>Interest</h1>
    // </div>
    <>
      <div>
        <div className="neonText">
          <h1 className="heading font">Interest</h1>
        </div>

        <div className="section">
          <div className="text">
            <h1>Travelling</h1>
            <p>
              I like to travell alone or with some people, firstly me try to
              explore all places from Mumbai and U.P then all over world.
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consequatur nostrum ipsam necessitatibus explicabo voluptas
              delectus impedit possimus asperiores nisi perferendis officia
              eaque soluta modi aliquid, ratione nobis non ad? */}
            </p>
          </div>
          <img src={Travelling} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>Progamming</h1>
            <p>
              I like to Progamming for a money and I try to explore all
              developer area ,because of i want to become a Software Developer.
            </p>
          </div>
          <img src={Progamming} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>Basketball</h1>
            <p>
              I love to play a basketball with my team and they encourage me to
              play well and they teach me a lot . I always try to give good
              support from my side
            </p>
          </div>
          <img src={Basketball} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>HTML</h1>
            <p>
              HTML is the standard markup language for creating Web pages. HTML
              is not a programming language. It's a markup language. In fact,
              that is the technology's name: HyperText Markup Language. That
              self-identified fact alone should settle the debate.
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consequatur nostrum ipsam necessitatibus explicabo voluptas
              delectus impedit possimus asperiores nisi perferendis officia
              eaque soluta modi aliquid, ratione nobis non ad? */}
            </p>
          </div>
          <img src={HTML} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>Css</h1>
            <p>
              CSS (Cascading Style Sheets) is used to style and layout web pages
              — for example, to alter the font, color, size, and spacing of your
              content, split it into multiple columns, or add animations and
              other decorative features.
              <b>There are three types of CSS which are given below:</b>
              <ul>
                <li>Inline CSS.</li>
                <li>Internal or Embedded CSS.</li>
                <li>External CSS.</li>
              </ul>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              consequatur nostrum ipsam necessitatibus explicabo voluptas
              delectus impedit possimus asperiores nisi perferendis officia
              eaque soluta modi aliquid, ratione nobis non ad? */}
            </p>
          </div>
          <img src={CSS} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>Java-Script</h1>
            <p>
              It is used by programmers across the world to create dynamic and
              interactive web content like applications and browsers. It is
              popular that is it's most used programming language in the world.
            </p>
          </div>
          <img src={Js} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>React</h1>
            <p>
              The React. js framework is an open-source JavaScript framework and
              library developed by Facebook. It's used for building interactive
              user interfaces and web applications quickly and efficiently with
              significantly less code than you would with vanilla JavaScript.
            </p>
          </div>
          <img src={RJS} alt="" />
        </div>

        <div className="section">
          <div className="text">
            <h1>Python</h1>
            <p>
              Python is a computer programming language often used to build
              websites and software, automate tasks, and conduct data analysis.
              Python is a general-purpose language, meaning it can be used to
              create a variety of different programs and isn't specialized for
              any specific problems.
            </p>
          </div>
          <img src={Python} alt="" />
        </div>
      </div>
    </>
  );
}

export default Interest;
