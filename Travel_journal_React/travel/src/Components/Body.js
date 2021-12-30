import React from 'react';


const Body = (props) => {
    console.log(props.item);
    return (
        <div>
            <div className='body'>
                <div className='image-body'></div>
                <div className='body-content'>
                    <span>{props.item.location}</span>
                    <h2>{props.item.title}</h2>
                    <h4>{props.item.startDate}</h4>
                    <div>{props.item.description}</div>
                </div>
            </div>
        </div>
    );
}

export default Body;
