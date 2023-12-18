import Eduicon from '../assets/edu-icon.svg'
import Trigger from '../assets/trigger.svg'
import './shared.css';

const Education = () => {
    return (
      <div className="education">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2em",
            marginLeft: "3.5em",
          }}
        >
          <img src={Eduicon} alt="education icon" />
          <h1 id="edu">Education</h1>
        </div>
        <Card
          date="2021 - Present"
          degree="Master's in Computer Science and Engineering"
          school="University of California, San Diego"
        />
        <Card
          date="2027 - 2021"
          degree="Bachelors in Computer Science and Engineering"
          school="Oriental Institute of Science and Technology"
        />
      </div>
    );
}

const Card = ({ date, degree, school }) => {
  return (
    <div style={{ display: "flex", gap:"1em", margin: "0em 0 0 5.95em" }}>
      <img src={Trigger} alt="trigger" style={{ alignSelf: "flex-start" }} />
      <div style={{ alignSelf: "flex-end", marginTop: "22px" }}>
        <p style={{ color: "#616F87" }}>{date}</p>
        <h2 id="degree">{degree}</h2>
        <p style={{ color: "#4FAA41", width: "250px" }}>{school}</p>
      </div>
    </div>
  );
};

export default Education;
