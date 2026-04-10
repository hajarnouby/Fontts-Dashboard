import React from 'react';
import './StatCard.css';

const StatCard = (props) => {
    return ( 
        <>
        <div className='col sct'>
        <div className='center sic'>
        <img src={props.icon} className='simg' />
        </div>
        <p className='dgrey s3'>{props.title}</p>
        <h3 className='s1 snum'>{props.value}</h3>
        {props.line && <div className='row sln'>{props.arrow && <img src={props.arrow} className='sarr' />}<p className={`s3 ${props.lclr}`}>{props.line}</p></div>}
        </div>
        </>
     );
}
 
export default StatCard;
