import React from 'react';

import { useEffect, useRef } from 'react';

import { render } from 'react-dom';

import { gsap } from 'gsap';

import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { hover } from '@testing-library/user-event/dist/hover';


function HistoryFragment() {
    gsap.registerPlugin(CSSRulePlugin);
    const animateHover = ({currentTarget}) => {
        // get the object by function call on event
        let target = currentTarget;
        // make an array for get the property
        let array = new Array(target);
        // get the class name from the array
        const classname = array[0].classList[1];
        // make a css rule for animate the before pseudo element
        let ruleBefore = CSSRulePlugin.getRule(('.'+ classname + '::before'));
        // make a css rule for animate the h1 element
        const ruleText = document.querySelector('.' + classname + ' h1');
        // make a css rule for animate the p element
        const ruleP = document.querySelector('.' + classname + ' p');
        // add the animation to the css rule
        gsap.timeline().to(ruleBefore, {duration: 0.5, background: 'rgba(0,0,0,0.3)'})
                       .to(ruleText, {duration: 0.5, top: '5%'}) 
                       .to(ruleP, {duration: 0.5, opacity: 1 , display: 'block' , y: 100, stagger: 0.5}); 
    }
    const animateUnhover = ({currentTarget}) => {
        // get the object by function call on event
        let target = currentTarget;
        // make an array for get the property
        let array = new Array(target);
        // get the class name from the array
        const classname = array[0].classList[1];
        // make a css rule for animate the before pseudo element
        let ruleBefore = CSSRulePlugin.getRule(('.'+ classname + '::before'));
        // make a css rule for animate the h1 element
        const ruleText = document.querySelector('.' + classname + ' h1');
        // make a css rule for animate the p element
        const ruleP = document.querySelector('.' + classname + ' p');
        // add the animation to the css rule
        gsap.timeline().to(ruleBefore, {duration: 0.5, background: 'rgba(0,0,0,0.7)'})
                        .to(ruleP, {duration: 0.5, opacity: 0 , display: 'none' , y: -100, stagger: 0.5})
                        .to(ruleText, {duration: 0.5, top: '50%'}) 
                       ; 
                       
                    };         
    


    return (
    <React.Fragment>
    <div className="history-container">
        <div className='history-item first-part' onMouseEnter={animateHover} onMouseOut={animateUnhover}>
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='history-item second-part' onMouseEnter={animateHover} onMouseOut={animateUnhover}>
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='history-item third-part' onMouseEnter={animateHover} onMouseOut={animateUnhover} >
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
    </div>
    </React.Fragment>
    );
}
export {HistoryFragment};