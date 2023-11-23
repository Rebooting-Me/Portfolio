import './App.css';
import Hero from './components/Hero/Hero';
import PC from './assets/PC.svg'

function App() {

  return (
    <>
      <Hero />
      <div
        id="line"
        style={{
          borderLeft: "5px solid #4FAA41",
          height: "20em",
          borderRadius: "5px",
          zIndex: "4",
        }}
      ></div>
      <img id="pc" src={PC} alt="PC icon" />
    </>
  );
}

export default App
