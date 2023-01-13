import "./Card.css";
import Header from "./Header";
function Card() {
  return (
    <div className="Card">
      <div className="row">
        <div className="backdrop">
          <Header />
          <h3 className="tagline">It's a delight to have you on board</h3>
          <h3 className="tagline1">
            Help us know you better.
            <br />
            (This is how we optimize Wobot as per your business needs)
          </h3>
          <div className="container">
            <h3 className="details">Company Name</h3>
            <input
              type="text"
              name="Company Name"
              placeholder="   e.g. Example lnc"
            />
          </div>
          <div className="container">
            <h3 className="details">Industry</h3>
            <select name="Industry">
              <option defaultValue>Select</option>
              <option>Grapefruit</option>
              <option>Lime</option>
              <option>Coconut</option>
            </select>
          </div>
          <div className="container">
            <h3 className="details">Company size</h3>
            <div className="flex-detail">
              <button className="comp-button">1-20</button>
              <button className="comp-button">21-50</button>
              <button className="comp-button">51-200</button>
              <button className="comp-button">201-500</button>
              <button className="comp-button">500+</button>
            </div>
          </div>
          <button className="start-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
