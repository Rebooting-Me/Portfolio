import styles from './Hero.css';
import Profile from './Profile';

function Hero() {
    return (
      <div className="hero">
        <h1 id="welcome">
          <span>Hi</span> and welcome to my <span>Virtual Home!</span>
        </h1>
        <div id="line"
          style={{
            borderLeft: "5px solid #4FAA41",
            height: "20em",
            borderRadius: "5px",
          }}>
        </div>
        <Profile />
      </div>
    );
}

export default Hero;