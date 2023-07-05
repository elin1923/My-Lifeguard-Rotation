import '../App.css';
import React, {useState, useEffect} from 'react';

export default function Header() {

    var [clock, setClock] = useState(new Date());
    
    // useEffect(() => {
    //     var timer = setInterval( () => setClock(new Date()), 1000 )
    //     return function cleanup() {
    //         clearInterval(timer)
    //     }
    
    // });

    return (
        <div className='header'>
            <h1>
                Lifeguard Rotation  
            </h1>
            <div>
                {/* number of rotation will be stretch goal */}
                {/* <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-1'></input>
                <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-2' checked></input>
                <input type='radio' name='rotation' className='btn btn-scale btn-scale-asc-3'></input> */}
                <form>
                    <input type='number' placeholder='# of stands'></input>
                    <input type='number' placeholder='# of guards'></input>
                    <input type="time" id="appt" placeholder='start'></input>
                    <input type="time" id="appt" placeholder='end'></input>
                    <input type='number' placeholder='Duration'></input>
                    <input type='submit'></input>
                </form>
            </div>
            
            <div className='clock'>
                {clock.toLocaleTimeString()}
            </div>
        </div>
    )
}