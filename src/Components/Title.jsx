import React, { Component } from 'react';
const Title = (props) => {
    return ( 
        <>
        <div className='col tcont'>
        <h1>{props.title}</h1>
        <br />
        <p className='dgrey'>{props.subtitle}</p>
        </div>
        </>
     );
}
 
export default Title;