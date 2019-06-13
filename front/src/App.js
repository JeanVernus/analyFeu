import React, { Component } from 'react';
// import ContactMe from './Components/ContactMe';
import './CSS/App.css';
import NavBarMaterial from "./Components/Navbar";
import Routing from "./Components/Routing";




class App extends Component {
  render() {
    return (
      <div>
        <NavBarMaterial/>
        <Routing/>
      </div>
    );
  }
}

export default App;
