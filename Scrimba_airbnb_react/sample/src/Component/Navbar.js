import React, { useState, useEffect } from 'react'
import axios from "axios";
import logo from '../images/logo.png'



export default function Navbar(props) {
    
    
    return (
        <div> 
            <nav> 
                <img src={logo}/>
            </nav>
        </div>
    )
}
