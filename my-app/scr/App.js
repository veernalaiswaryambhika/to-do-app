import React from "react";
// import { Button } from 'reactstrap';

//import './App.css';
import './Main.css';
import Web from './Web';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Web/>
    </div>
  );
}

export default App;
