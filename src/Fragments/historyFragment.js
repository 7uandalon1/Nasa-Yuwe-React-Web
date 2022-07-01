import React from 'react';

import { useEffect, useRef } from 'react';

import { render } from 'react-dom';

import { Link } from 'react-scroll';
import { BsBoxArrowDown, BsArrowBarDown } from 'react-icons/bs';

import {motion, useAnimation} from 'framer-motion';

import {useInView} from 'react-intersection-observer';

function HistoryFragment() { 
 
     const arrow = <BsArrowBarDown/>;
     const controlItemHistory = useAnimation();
     const historyVariants ={
        h1Starter: {y: 0, x: -50},
        h1OnView: {top: '5%', x: -50},
        pStarter: {opacity: 0},
        pOnView: {opacity: 1} 
     }

    return (
    <React.Fragment>
    <section id='history-section'>
    <div className="history-container">
        <div className='history-item first-part'>
            <motion.h1 viewport={{once: true}} initial='h1Starter' whileInView='h1OnView' animate='h1Starter' transition={{delay: 1,duration: 1}} variants={historyVariants} >History</motion.h1>
            <motion.p viewport={{once: true}} initial='pStarter' whileInView='pOnView' animate='pStarter' transition={{delay: 2, duration: 1}} variants={historyVariants}>Lorem, ipsum dolor.</motion.p>

            <Link type='button' className='goDown' spy={true} offset={0} duration={250} to='second-part'>{arrow}</Link>
        
        </div>
        <div className='history-item second-part'>
        <motion.h1 viewport={{once: true}} initial='h1Starter' whileInView='h1OnView' animate='h1Starter' transition={{delay: 1,duration: 1}} variants={historyVariants} >History</motion.h1>
            <motion.p viewport={{once: true}} initial='pStarter' whileInView='pOnView' animate='pStarter' transition={{delay: 2, duration: 1}} variants={historyVariants}>Lorem, ipsum dolor.</motion.p>
            <Link type='button' className='goDown' spy={true} offset={0} duration={250} to='third-part'>{arrow}</Link>
        </div>
        <div className='history-item third-part' >
        <motion.h1 viewport={{once: true}} initial='h1Starter' whileInView='h1OnView' animate='h1Starter' transition={{delay: 1,duration: 1}} variants={historyVariants} >History</motion.h1>
            <motion.p viewport={{once: true}} initial='pStarter' whileInView='pOnView' animate='pStarter' transition={{delay: 2, duration: 1}} variants={historyVariants}>Lorem, ipsum dolor.</motion.p>
        <Link type='button' className='goDown' spy={true} offset={0} duration={250} to='team-title-container'>{arrow}</Link>
        </div>
        <Link type='button' offset={0} duration={250} className='goDownProvisional' to='team-title-container'><BsBoxArrowDown size={25}></BsBoxArrowDown></Link>
    </div>

    </section>

    </React.Fragment>
    );
}
export {HistoryFragment};