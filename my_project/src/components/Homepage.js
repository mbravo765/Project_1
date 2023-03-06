//import './Homepage.css';
import map from './img/map.jpg';

function Homepage() {
  return (
    <div className="content">
      This is the landing page for the site. 
      <h1 style={{fontFamily: "Georgia", color: "blue"}}>Welcome to Hawkins!</h1>
      <img src={map} alt="stranger's things map"/>
    </div>
  );
}

export default Homepage;

