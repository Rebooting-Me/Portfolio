import "./shared.css";
import Expicon from "../assets/exp-icon.svg";
import Trigger from "../assets/trigger.svg";

const Experience = () => {
  return (
    <div className="experience">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <img src={Expicon} alt="experience icon" />
        <h1 id="exp">Experience</h1>
      </div>
      <Card
        date="04/2022 - 02/2023"
        post="Automation Engineer STDT"
        company="UC San Diego"
        desc="Handled mostly the DevOps work for the ITS department at UC San Diego including Requirements Gathering, writing POC's, applying Agile methodology to devise UI/UX and Product Architectures and releasing weekly monitored MySQL reports to reduce system vulnerabilities"
      />
      <Card
        date="05/2021 - 07/2021"
        post="Software Engineer Intern"
        company="Compport"
        desc="I assessed and enhanced the operational efficiency of the company's software solutions. I conducted system analysis, recommended policy changes, and achieved a 40% productivity boost through clear code and documentation. My contributions played a key role in accomplishing engineering tasks with high efficiency."
      />
    </div>
  );
};

const Card = ({ date, post, company, desc }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        margin: "0 0 0 2.5em",
        padding: "0",
      }}
    >
      <img src={Trigger} alt="trigger" style={{ alignSelf: "flex-start" }} />
      <div
        className="exp-card"
        style={{
          marginTop: "22px",
          display: "flex",
          gap: "2em",
          alignItems: "center",
        }}
      >
        <Content date={date} post={post} company={company} desc={desc} />
      </div>
    </div>
  );
};

const Content = ({ date, post, company, desc }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ color: "#616F87" }}>{date}</p>
      <div
        style={{
          backgroundColor: "#181C22",
          borderRadius: "29px",
          padding: "1em",
          boxShadow: "8px 12px 10px black",
        }}
      >
        <h2
          id="post"
          style={{
            padding: "0",
            margin: "0",
            letterSpacing: "1.8px",
            color: "white",
          }}
        >
          {post}
        </h2>
        <p style={{ color: "#4FAA41", fontWeight: "bolder", width: "auto" }}>
          {company}
        </p>
        <p style={{ color: "#aab1bc", width: "500px" }}>{desc}</p>
      </div>
    </div>
  );
};

export default Experience;
