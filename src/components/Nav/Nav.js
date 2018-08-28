import React from 'react';
import './nav.css'

const sections = [
    {text: 'profile', id: 'sticky-nav-2', anchor: 'bio-anchor'},
    {text: 'Abilities', id: 'sticky-nav-3', anchor: 'skills-anchor'},
    {text: 'Projects', id: 'sticky-nav-4', anchor: 'projects-anchor'},
    {text: 'Contact', id: 'sticky-nav-5', anchor: 'contacts-anchor'}
]
export default function Nav({ navigate, navShow, currentAnchor }) {
    // console.log('nav', navShow)
    return (
    <div style={{ opacity: (navShow ? '1' : '0')}} className="sticky-nav">
    { sections.map((section, idx) => {
        return (
            <div 
                id={ section.id } className="sticky-nav-div" 
                key={ idx }
                onClick={ () => navigate(section.anchor, section.id)}
            >
                <p>{ section.text}</p>
            </div>
        )
    }) }
    </div>
    );


}