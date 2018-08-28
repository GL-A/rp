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

  state = { navShow: false, currentAnchor: { anchor: 'bio-anchor', id: 'sticky-nav-2'} }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  navigate = (anchor, id) => {
    TweenLite.to(window, 1, { scrollTo: { y: `#${anchor}`, offsetY: 0 } })
    console.log("id", id)
    this.setState({ currentAnchor: {anchor: anchor, id: id} })
  }
  onScroll = () => {
    const bottom = (this.refs.top.getBoundingClientRect().bottom)
    // const anchorPoints = ['bio-anchor', 'skills-anchor', 'projects-anchor', 'contacts-anchor'].map((anchor, idx) => {
    //   return {
    //     name: anchor,
    //     point: Math.round(document.getElementById(anchor).getBoundingClientRect().top)
    //   }
    // })
    
    // const anchorPoint = anchorPoints.filter(point => point.point === 0)[0]
    
    // if(anchorPoint) {
    //   console.log("anchor", document.getElementById(this.state.currentAnchor.id))
    //   TweenLite.to(document.getElementById(this.state.currentAnchor.id), 0.5, {css: {background: '#018080'}})
    //   TweenLite.set(["bio-anchor", "skills-anchor", "projects-anchor", "contacts-anchor"], 0.5, {css: {background: 'white'}})
    //   console.log([...anchorPoints.map(anchor => anchor.name)])
    // }
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
              <button onClick={() => this.navigate('bio-anchor')} href="#my-a" className="top-nav-button">
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
