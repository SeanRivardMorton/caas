import React, { Component } from 'react';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <SideBar />
          <MainArea />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
