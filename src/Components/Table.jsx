import React, { Component } from 'react';
import './Table.css';
const Table = (props) => {
    return ( 
        <>
        <div className="table">
            <div className='categories'>
            <p>{props.c1}</p>
            <p>{props.c2}</p>
            <p>{props.c3}</p>
            <p>{props.c4}</p>
            <p>{props.c5}</p>
            <p>{props.c6}</p>
            <p>{props.c7}</p>
            </div>
        </div>
        </>
     );
}
 
export default Table;