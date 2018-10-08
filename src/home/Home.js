import React, { Component } from 'react';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';

class App extends Component {
  render() {
    return (
    	<div>
      		<Header title="ReactJs - Todo App" />
      		<Footer />
      	</div>
    );
  }
}

export default App;
