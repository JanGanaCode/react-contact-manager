import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from './context';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Contacts from './components/contacts/Contacts';

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
                <Route path="/contact/edit/:id" exact component={EditContact}/>
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
