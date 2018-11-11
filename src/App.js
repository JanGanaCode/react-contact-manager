import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from './context';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
import  'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Contacts}/>
                <Route path="/contact/add" exact component={AddContact}/>
                <Route path="/about" exact component={About}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
