import '../App.css';
import React, {useState, useEffect} from 'react';

export default function Header() {

 
    return (
        <div className='header'>
            <h1>
                Lifeguard Rotation  
            </h1>
            <div>
                <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-1'></input>
                <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-2' checked></input>
                <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-3'></input>
                <input type='number' placeholder='# of stands'></input>
                <input type='number' placeholder='Duration'></input>
            </div>
            <div>
                {clock}
            </div>
        </div>
    )
}