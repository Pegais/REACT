import logo from './logo.svg';
import './App.css';
import './style.css';
import Body from './Component/Body';
import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import Footer from './Component/Footer';
import object from './Component/object';
function App() {
     const cards_data = object.map((data) => {
        console.log(data.openSpots);
        return (
            <Card
                description={data.description}
                value={data.value}
                openSpots={data.openSpots}
                
            
            
            
            
            
            />
        )
    })
    return (
        <div className="App" >
            <Navbar />
            <Body />
            <div className='card-list'>
                {cards_data}
                </div>
            
            <Footer/>
        </div>
    );
}

export default App;