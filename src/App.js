import React, { Component } from 'react';
import TweenLite from 'gsap'
import scrollTo from '../node_modules/gsap/ScrollToPlugin';
import Nav from './components/Nav/Nav'
import Bio from './components/Bio/Bio'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css';

class App extends Component {

  state = { navShow: false, currentAnchor: { anchor: 'bio-anchor', id: 'sticky-nav-2'} }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  navigate = (anchor, id) => {
    TweenLite.to(window, 1, { scrollTo: { y: `#${anchor}`, offsetY: 0 } })
    this.setState({ currentAnchor: {anchor: anchor, id: id} })
  }
  onScroll = () => {
    const bottom = (this.refs.top.getBoundingClientRect().bottom)
    
    if(bottom <= 0) {
      this.setState({ navShow: true })
    } else {
      this.setState({ navShow: false })
    }

  }

  render() {
    return (
      <div className="App" style={{ position: 'relative' }}>
        <div ref="top" id="top-anchor" className="top-bg">
          <div className="top-bg-filter">
            <div>
              <p>George Lopez-Ayala</p>
              <p>Personal Website</p>
              <button onClick={() => this.navigate('bio-anchor', 'stick-nav-2')} href="#my-a" className="top-nav-button">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
          <Nav navShow={ this.state.navShow } navigate={ this.navigate } currentAnchor={ this.currentAnchor } />
          <Bio />
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
    );
  }
}

export default App;
