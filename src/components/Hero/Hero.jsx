import './Hero.css';
import TechStack from './TechStack';
import Profile from './Profile';
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
          <TechStack />
        </div>
        <div
          id="line"
          style={{
            borderLeft: "5px solid #4FAA41",
            height: "20em",
            borderRadius: "5px",
            zIndex: "4"
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