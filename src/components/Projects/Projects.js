import React from 'react'
import './projects.css'
import myfamilystoryPic from './../../assets/images/Screen Shot 2017-04-13 at 4.48.04 PM (2) copy.png'
import rootsOfFightPic from './../../assets/images/roots-of-fight-screenshot.png'
import movieAppPic from './../../assets/images/Screen Shot 2018-08-26 at 10.26.54 PM copy.png'

const projects = [
  {pic: myfamilystoryPic ,name: 'My Family Story', site: 'myfamilystory.swiftcode.design', github: 'https://github.com/GL-A/my-family-story', video: '', tech: ['Angular', 'jQuery', 'Node', 'Mongo', 'Bootstrap', 'Gulp', 'Sass'], overview: 'Interactive E-commerce site'},
  {pic: rootsOfFightPic ,name: 'Roots of Fight', site: 'rootsoffight.swiftcode.design', github: 'https://github.com/GL-A/roots-of-fight', video: '', tech: ['Angular','jQuery','Node','JWT','Postgres', 'Gulp','Sass'], overview: 'Clone of Roots of Fight clothing store'},
  {pic: movieAppPic, name: 'Movie App', site: 'movieapp123.netlify.com', github: 'https://github.com/GL-A/MovieApp', video: '', tech: ['React'], overview: 'React application pulling data from the moviedb api'}
]

const Projects = () => {
    return (
        <div id="projects-anchor" className="projects">
      <div className="projects-div-1">
        <h1>Projects</h1>
        <p>"People can cheat or rob<br /> you of almost any possession<br /> but hard work belongs to you, and you alone."</p>
        <h4>- Firas Zahabi</h4>
      </div>
      <div className="projects-div-2">
        { projects.map((project, idx) => {
          return (
            <div key={idx} className="project-box">
              <h3>{ project.name }</h3>
              <img alt={`screenshot of ${project.name}`} src={ project.pic } />
              <div className="project-box-buttons">
                <a href={ project.site } target="blank"><button  ><i  className="fa fa-external-link" aria-hidden="true"></i> Visit page</button></a>
                <a href={ project.github } target="blank"><button ><i className="fa fa-github" aria-hidden="true"></i> View code</button></a>
                <a href={ project.video } target="blank"><button><i className="fa fa-youtube-play" aria-hidden="true"></i> Demo video</button></a>
              </div>
              <p >{ project.overview }</p>
              <div className="project-box-ul">
                <ul>
                  {project.tech.map((t, idx) => {
                    return <li key={idx}>{t}</li>
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    );
};

export default Projects;