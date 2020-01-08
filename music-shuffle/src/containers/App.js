import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import './App.css';
import Header from '../components/Header/Header';
import Public from '../components/Public/Public';
// import Footer from '../components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <Header></Header>
        <Public></Public>
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

export default App;
