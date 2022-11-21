import React from 'react'

function Coffee (props) {
    return(
        <React.Fragment>
            <article className='coffee-article'>
                    <div className='coffee-meter'>
                        <section className='coffee-active coffee'></section>
                        <section className='coffee-active coffee'></section>
                        <section className='coffee-inactive coffee'></section>
                    </div>
                    <p>Tostión media</p>
                    
            </article>
        </React.Fragment>
    )
};

export {Coffee};