import './App.css';

import Homepage from './components/Homepage';
import Lodging from './components/Lodging';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';

import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="lodging" element={<Lodging />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>    </div>
  );
}

const navStyle = {textDecoration: "none", color: "#FF1515"};
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/lodging">Lodging</Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

