import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeBanner from './Components/HomeBanner';
import AboutUsSection from './Components/AboutUsSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeBanner/>
        {/* <div className="divider" />
        <AboutUsSection/>
        <div className="divider" /> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
