import "./Hero.css";
import Express from "../../assets/icons/Express.svg";
import Figma from "../../assets/icons/Figma.svg";
import Git from "../../assets/icons/Git.svg";
import Javascript from "../../assets/icons/Javascript.svg";
import Mongodb from "../../assets/icons/Mongodb.svg";
import Nodejs from "../../assets/icons/Nodejs.svg";
import Python from "../../assets/icons/Python.svg";
import React from "../../assets/icons/React.svg";
import Typescript from "../../assets/icons/Typescript.svg";

const TechStack = () => {

  return (
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
  );
};

export default TechStack;
