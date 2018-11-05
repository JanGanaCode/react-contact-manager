import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import  'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe"
                    email="john.doe@gmail.com"
                    phone="555-555-555"          
          />
        </div>
      </div>
    );
  }
}

export default App;
