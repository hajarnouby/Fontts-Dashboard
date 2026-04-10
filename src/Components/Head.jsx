import React, { Component } from 'react';
import './Head.css';
const Head = (props) => {
    return (  
        <>
        <div className='row g1 hh1 pad1'>
            <h4 className='s1'>{props.h} </h4>
            <p className='s2 dgrey'>{props.ar}</p>
        </div>

        </>

    );
}
 
export default Head;