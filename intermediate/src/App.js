import React, {Component} from 'react';
import Header from './header';
import Nav from './nav'
import Article from './article';
import Ads from './ads';
import Footer from './footer';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Header/>
        <Nav/>
        <Article/>
        <Ads/>
        <Footer/>
      </div>
      );
}
}
export default App;
