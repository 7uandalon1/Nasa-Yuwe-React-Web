import React from 'react';

import { Partner } from '../Components/partner.js';
 

import {Link} from 'react-scroll';

import {BsBoxArrowDown} from 'react-icons/bs';

function TeamFragment(props) {
    const sandra_milena = require('../assets/img/team/na.png')
    return (
        <React.Fragment>
            <section id='team-section'>
                <div id='team-row-container'>
                    <div id='team-title-container'>
                        <h1 id='team-title' className='title'>Nuestro Equipo</h1>
                    </div>
                <div className='team-container'>
                    
                    
                    <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {sandra_milena}
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                        id='1'
                        to='2'
                    />
                    <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {sandra_milena   }
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                        id='2'
                        to='3'
                   />
                    <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {sandra_milena}
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                        id = '3'
                        to='contact-us-container' 
                    />
                    
                </div>
                </div>
                <Link type='button' class='btn a-button team-button' to='contact-us-container'><BsBoxArrowDown size={50}></BsBoxArrowDown> Contactanos</Link>
            </section>
        </React.Fragment>
    )
}
export {TeamFragment};