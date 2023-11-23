import styles from './Hero.css';
import Profile from './Profile';
import Express from "../../assets/icons/Express.svg"
import Figma from "../../assets/icons/Figma.svg"
import Git from "../../assets/icons/Git.svg"
import Javascript from "../../assets/icons/Javascript.svg"
import Mongodb from "../../assets/icons/Mongodb.svg"
import Nodejs from "../../assets/icons/Nodejs.svg"
import Python from "../../assets/icons/Python.svg"
import React from "../../assets/icons/React.svg"
import Typescript from "../../assets/icons/Typescript.svg"
import Controller from "../../assets/Controller.svg"

function Hero() {
    return (
      <div className="hero">
        <img
          src={Controller}
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
          }}
          alt=""
        />
        <div className="material">
          <h1 id="welcome">
            <span>Hi</span> and welcome to my <span>Virtual Home!</span>
          </h1>
          <div className="logoContainer">
            <p id="ts">Tech Stack</p>
            <div
              style={{
                borderLeft: "5px solid #4FAA41",
                height: "4em",
                borderRadius: "5px",
                marginLeft: "5px",
              }}
            ></div>
            <div className="logos">
              <div className="logo-slide">
                <img src={React} alt="React" />
                <img src={Javascript} alt="Javascript" />
                <img
                  src={Typescript}
                  style={{ marginBottom: "5px" }}
                  alt="Typescript"
                />
                <img src={Nodejs} alt="Nodejs" />
                <img src={Express} alt="Express" />
                <img src={Mongodb} alt="Mongodb" />
                <img src={Python} alt="Python" />
                <img src={Git} alt="Git" />
                <img src={Figma} alt="Figma" />
              </div>
              <div className="logo-slide">
                <img src={React} alt="React" />
                <img src={Javascript} alt="Javascript" />
                <img
                  src={Typescript}
                  style={{ marginBottom: "5px" }}
                  alt="Typescript"
                />
                <img src={Nodejs} alt="Nodejs" />
                <img src={Express} alt="Express" />
                <img src={Mongodb} alt="Mongodb" />
                <img src={Python} alt="Python" />
                <img src={Git} alt="Git" />
                <img src={Figma} alt="Figma" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="line"
          style={{
            borderLeft: "5px solid #4FAA41",
            height: "20em",
            borderRadius: "5px",
          }}
        ></div>
        <Profile />
      </div>
    );
}

export default Hero;

/* 
<svg xmlns="http://www.w3.org/2000/svg" width="96" height="50" viewBox="0 0 99 53" fill="none" style={{flexShrink: 0}}>
        <motion.path
          d="M99 50H45C21.804 50 3 31.196 3 8V0"
          stroke="#4FAA41"
          strokeWidth="5"
          fill="transparent"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2 }}
        />
      </svg>
*/