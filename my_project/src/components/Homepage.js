import './css/Homepage.css';
import map from './img/map.jpg';

function Homepage() {
  return (
    <div className="content">
      <h1 style={{fontFamily: "Georgia", color: "$ff1515"}}>Welcome to Hawkins!</h1>

      <div className="map">
        <img src={map} alt="stranger's things map" />
      </div>
    </div>
);
}

export default Homepage;

