import React, { Component } from 'react';
import './CSS/App.css';
import NavBarMaterial from "./Components/Navbar";
import Routing from "./Components/Routing";
import FooterBar from "./Components/Footer";







class App extends Component {
  render() {
    return (
      <div className="feu">
        <div >
          <NavBarMaterial />
          <Routing />
          <FooterBar />
        </div>
      </div >
    );
  }
}

export default App;
