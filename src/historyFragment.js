import React from 'react';

import { useEffect, useRef } from 'react';

import { render } from 'react-dom';

import { hover } from '@testing-library/user-event/dist/hover';
import { Link } from 'react-scroll';
import { BsBoxArrowDown } from 'react-icons/bs';

function HistoryFragment() { 

    return (
    <React.Fragment>
    <section id='history-section'>
    <div className="history-container">
        <div className='history-item first-part' >
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='history-item second-part'>
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='history-item third-part' >
            <h1>History</h1>
            <p>Lorem, ipsum dolor.</p>
        </div>
        <div className='textContent' id='history-button-container'>
         <Link type="button" spy={true} offset={0} duration={250} className="a-button" to ='team-title'><BsBoxArrowDown></BsBoxArrowDown> <h2>Nuestro Equipo</h2> </Link>
    </div>
    </div>

    </section>

    </React.Fragment>
    );
}
export {HistoryFragment};