import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Principal from './components/Principal';
import GoogleMap from './components/GoogleMap';
import Pruebas from './components/Pruebas';

function App() {
  return (
    <div className="App">
      <h1>Integración Google Maps</h1>
        <div className="container">
          <Router>
            <nav>
              <Link to="/"> 
                <button className="btn_principal" >HOME</button> 
              </Link>
              {/* <Link to="/Pruebas"> 
                <button className="btn_pruebas" >Pruebas</button> 
              </Link> */}
              <Link to="/GoogleMap"> 
                <button className="btn_api" >API</button> 
              </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Principal />} />
              <Route path="/Pruebas" element={<Pruebas />} />
              <Route path="/GoogleMap" element={<GoogleMap />} />
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;
