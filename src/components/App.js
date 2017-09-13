import React, { Component } from 'react';
import '../styles/App.css';

import NavBar from './navbar.js';
import Form from './form.js';
import Header from './header.js';
import Section from './section.js';
import Footer from './footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
