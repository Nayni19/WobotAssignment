import "./Background.css";
import Card from "./Card";
import logo from "../assets/wobot-logo.png";
function Background() {
  return (
    <div className="Background">
      <img src={logo} alt="Wobot-Logo" />
      <div className="boxContainer">
        <div className="box"></div>
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <Card />
      <h3 className="terms">Terms of use  |  Privacy policy </h3>
    </div>
  );
}

export default Background;
