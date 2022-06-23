import React from 'react';

import { Partner } from './partner.js';
 


function TeamFragment(props) {
    return (
        <React.Fragment>
            <section id='team-section'>
                <div className='team-container'>
                    <h1 id='team-title' className='title'>Nuestro Equipo</h1>
                    <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {require('./img/team/na.png')}
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                    />
                                        <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {require('./img/team/na.png')}
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                    />
                                        <Partner
                        title='Sandra Milena Herrera'
                        job = 'Representante Legal'
                        img = {require('./img/team/na.png')}
                        facebook = 'https://www.facebook.com/sandra.milena.herrera'
                        twitter = 'https://twitter.com/sandra_milena'
                        instagram = 'https://www.instagram.com/sandra_milena'
                    />
                </div>
            </section>
        </React.Fragment>
    )
}
export {TeamFragment};