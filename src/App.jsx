import './App.css';
import Hero from './components/Hero/Hero';
import PC from './assets/PC.svg'
import Education from './components/Education';
import Experience from './components/Testing';

function App() {

  return (
    <>
      <Hero />
      <div
        id="line"
        style={{
          borderLeft: "6px solid #4FAA41",
          height: "200%",
          borderRadius: "5px",
          marginLeft: "6em",
          position: "absolute",
          zIndex: "-4",
        }}
       />
       <Education />
       <Experience />
      <img id="pc" src={PC} alt="PC icon" />
    </>
  );
}

export default App
