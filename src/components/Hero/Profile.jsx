import Picture from '../../assets/dp.svg';
import Map from '../../assets/map.svg';
import Github from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import './Hero.css'

function Profile () {
    return (
      <div
        className="profile"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "250px",
        }}
      >
        <img style={{ width: "70%" }} src={Picture} alt="dp" />
        <h1 style={{ fontSize: "24px", margin: "0" }}>Aditya Raj Sharma</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#D65A31",
            margin: "5px 0 0 0",
          }}
        >
          <img style={{ width: "20%" }} src={Map} />
          <p style={{ paddingBottom: "7px", margin: "0" }}>San Diego</p>
        </div>
        <p
          style={{
            fontFamily: "Roboto Condensed",
            marginTop: "0",
            fontSize: "18px",
          }}
        >
          My core focus and drive revolves around HCI principles and their
          integration into modern Software solutions.
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            className="scale-on-hover"
            href="https://github.com/Rebooting-Me"
            target="#"
          >
            <img style={{ width: "30px" }} src={Github} alt="GitHub" />
          </a>
          <a
            className="scale-on-hover"
            href="https://www.linkedin.com/in/aditya-raj-sharma-/"
            target="#"
          >
            <img style={{ width: "30px" }} src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    );
}

export default Profile;