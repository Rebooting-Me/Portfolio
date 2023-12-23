import './App.css';
import Hero from './components/Hero/Hero';
import PC from './assets/PC.svg'
import Education from './components/Education';
import Experience from './components/Experience';

function App() {

  return (
    <>
      <Hero />
      <div
        style={{
          display: "flex",
          position: "relative",
          marginLeft: "7em",
        }}
      >
        <div
          id="line"
          style={{
            borderLeft: "6px solid #4FAA41",
            borderRadius: "5px",
            zIndex: "-4",
          }}
        />
        <div style={{ flex: 1 }}>
          <Education />
          <Experience />
          {/* Add more components here */}
          <div style={{ height: "4em" }} />
        </div>
      </div>
      <img id="pc" src={PC} alt="PC icon" />
    </>
  );
}

export default App
