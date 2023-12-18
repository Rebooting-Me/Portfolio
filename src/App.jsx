import './App.css';
import Hero from './components/Hero/Hero';
import PC from './assets/PC.svg'
import Education from './components/Education';

function App() {

  return (
    <>
      <Hero />
      <div
        id="line"
        style={{
          borderLeft: "5.5px solid #4FAA41",
          height: "100%",
          borderRadius: "5px",
          marginLeft: "6em",
          position: "absolute",
          zIndex: "-4",
        }}
       />
       <Education />
      <img id="pc" src={PC} alt="PC icon" />
    </>
  );
}

export default App
