import React from 'react';

class Partner extends React.Component {
    render(props) {
        <div className='partner'>
            <div className="team-img-holder">
                <img src={props.img} alt=""/>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="job">
                <h2>{props.job}</h2>
            </div>
            <div className="social-media">
                <a href={props.facebook}><BsFacebook></BsFacebook></a>
                <a href={props.twitter}><BsTwitter></BsTwitter></a>
                <a href={props.instagram}><BsInstagram></BsInstagram></a>
            </div>
        </div>
        
    }    
}


function TeamFragment(props) {
    return (
        <React.Fragment>
            <section id='team-section'>
                <div className='team-container'>
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