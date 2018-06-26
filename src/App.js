import React, { Component } from 'react';
import Header from './components/Header'

		import MainArea from './components/MainArea'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
		<MainArea />
		<Footer />
      </div>
    );
  }
}

export default App;
