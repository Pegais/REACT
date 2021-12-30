import React from 'react'


export default function Card(props) {
    console.log(props.openSpots);
   
    return (
        <div className='card-container'>
            {props.openSpots===0 &&<div className='card-badge'>Sold out</div>}
            <div className="card-line">
                    <div className="card1" />   
                <span className='text' >{props.description}</span>
                <span className='text1'>{props.value }</span>
                    
                </div>
            </div>
    )
}
