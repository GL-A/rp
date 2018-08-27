import React, { Component } from 'react';
import TweenLite from 'gsap'
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import logo from './logo.svg';
import Nav from './components/Nav/Nav'
import Bio from './components/Bio/Bio'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css';

class App extends Component {
  navigate = (anchor) => {

    TweenLite.to(window, 1, { scrollTo: { y: `#${anchor}`, offsetY: 0 } })
  }

  render() {
    return (
      <div className="App">
        <div id="top-anchor" className="top-bg">
          <div className="top-bg-filter">
            <div>
              <p>George Lopez-Ayala</p>
              <p>Interactive portfolio</p>
              <button onClick={() => this.navigate('bio-anchor')} href="#my-a" className="top-nav-button">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        <Nav navigate={ this.navigate } />
        <Bio />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    );
  }
}

export default App;
