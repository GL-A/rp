import React from 'react';
import './skills.css'

const skills = [
    {text: 'JavaScript', class: 'icon-javascript-alt'},
    {text: 'React', class: 'icon-reactjs'},
    {text: 'Angular', class: 'icon-angular'},
    {text: 'jQuery', class: 'icon-jquery'},
    {text: 'Node JS', class: 'icon-nodejs'},
    {text: 'postgres', class: 'icon-postgres'},
    {text: 'HTML5', class: 'icon-html5-alt'},
    {text: 'CSS', class: 'icon-css3-alt'},
    {text: 'Sass', class: 'icon-sass'},
    {text: 'Bootstrap', class: 'icon-bootstrap'},
    {text: 'Gulp', class: 'icon-gulp'},
    {text: 'Git', class: 'icon-git'}
]
const Skills = () => {
    return (
        <div id="skills-anchor" className="skills">
            <div className="skills-abilities">
            <h1>Abilities</h1>
            <p>"There is no substitute for hard work"</p>
            <p>-Thomas A. Edison</p>
        </div>
        <div className="skills-icons">
            { skills.map((skill, idx) => {
                return (
                    <div key={idx} className="skills-icon">
                        <span className="glyph-sample"><i style={{fontSize: '80px'}} className={skill.class}></i></span>
                        <p>{ skill.text }</p>
                    </div>
                )
            })}
        </div>
    </div>
    );
};

export default Skills;