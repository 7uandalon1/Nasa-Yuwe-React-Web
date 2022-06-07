import React from 'react';
import {BsFlag} from 'react-icons/bs';

function Services (props){
    const Icon = (props.Icon);
    return(
        
        <div className='service-item'>
        
            <div className='icon-holder'>
        
                <BsFlag></BsFlag>
        
            </div>
        
            <h1>{props.Title}</h1>
        
            <p>{props.Description}</p>

        </div>
    )
}

export {Services};