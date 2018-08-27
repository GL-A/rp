import React, { Component } from 'react';
import ScrollToPlugin, { TweenMax } from 'gsap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
  <button id="section1Btn">Section 1</button>
  <button id="section2Btn">Section 2</button>
  <button id="section3Btn">Section 3</button>
</div>
<div className="content">
<h2 refs="section1">Section 1</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh quam, egestas eu eros molestie, eleifend viverra augue. Suspendisse potenti. Quisque commodo consectetur quam, non pretium orci viverra at. Maecenas eget iaculis nunc. </p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>

<h2 id="section2">Section 2</h2>
<p>consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>

<h2 id="section3">Section 3</h2>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementes, nascetur ridiculus mus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh quam, egestas eu eros molestie, eleifend viverra augue. Suspendisse potenti. Quisque commodo consectetur quam, non pretium orci viverra at. Maecenas eget iaculis nunc. </p>
<p>Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
  <p>consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
  <p>consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
  <p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
  <p>consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
  <p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
  <p>consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa.</p>
<p>Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis tincidunt consectetur condimentum. Suspendisse pharetra purus urna, ac pretium mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
<p>Mi elementum et. Praesent dui nibh, ullamcorper in justo sed, volutpat cursus orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et magnis dis parturient montes,</p>
</div>

      </div>
    );
  }
}

export default App;
