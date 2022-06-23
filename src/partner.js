import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs';




function Partner (props) {
    return(
        <div className='partner'>
            <div className="team-img-holder">
                <picture>
                    <img src={props.img} alt=""/>
                </picture>
            </div>
            <div className="title">
                <h2>{props.title}</h2>
                <h2>{props.job}</h2>
            </div>
            <div className="social-media">
                <a href={props.facebook}><BsFacebook></BsFacebook></a>
                <a href={props.twitter}><BsTwitter></BsTwitter></a>
                <a href={props.instagram}><BsInstagram></BsInstagram></a>
            </div>
        </div>
    )
        
}
export {Partner};