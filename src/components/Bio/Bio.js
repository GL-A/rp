import React from 'react';
import './bio.css'

const Bio = () => {
    return (
        <div id="bio-anchor" className="bio">
          <div className="bio-container">
            <div className="bio-header">
              <p>Profile</p>
              <p>I'm a creative Javascript Developer</p>
            </div>
            <div className="bio-info-container">
              <div className="bio-info-about">
                <h1>About me</h1>
                <p>I am a full-stack web developer. In between<br className="remove-linebreak" /> practicing jiu-jitsu and watching anime, I <br className="remove-linebreak" />love expanding my knowledge of front-end <br className="remove-linebreak"  /> techniques, frameworks and technologies.<br className="remove-linebreak" /> I enjoy spending time building full-stack<br className="remove-linebreak"/> web applications on my own. But it's also <br className="remove-linebreak"/>very rewarding when I collaborate with others.<br className="remove-linebreak"  /> To quote my friend Mr. Luccock: 'No one can whistle<br className="remove-linebreak" /> a symphony.  It takes a whole orchestra to play it.'</p>
              </div>
              <div alt="picture of me" className="bio-info-pic"><div></div></div>
              <div className="bio-info-details">
                <h3>Details</h3>
                <h4>Name:</h4>
                <p>George Lopez-Ayala</p>
                <h4>Age:</h4>
                <p>22 years</p>
                <h4>Location:</h4>
                <p>Portland, Oregon</p>
                <a href="https://www.linkedin.com/in/georgelopez-ayala/" target="_blank" rel="noopener noreferrer"><button><i className="fa fa-linkedin-square" aria-hidden="true"></i>Connect</button></a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Bio;