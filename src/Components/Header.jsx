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

    let [stands, setStand] = useState(1);
    let [guards, setGuard] = useState(1);


    // stand increment
    const handleStandIncrement = () => {
        setStand(stands + 1)
        // console.log('yes')
    }

    // stand decrement
    const handleStandDecrement = () => {
        setStand(stands - 1)
    }

    // guard increment
    const handleGuardIncrement = () => {
        setGuard(guards + 1)
    }
    // guard decrement
    const handleGuardDecrement = () => {
        setGuard(guards - 1)
    }

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
                <form className='parameters'>
                    <div>
                        <div>
                            # of stands
                        </div>
                        <span class="input-number-decrement" onClick={handleStandDecrement}>–</span>
                        <input class="input-number" type="text" value={stands} min="0" max="10"></input>
                        <span class="input-number-increment" onClick={handleStandIncrement}>+</span>
                    </div>
                    <div>
                        <div>
                            # of guards
                        </div>
                        <span class="input-number-decrement" onClick={handleGuardDecrement}>–</span>
                        <input class="input-number" type="text" value={guards} min="0" max="10"></input>
                        <span class="input-number-increment" onClick={handleGuardIncrement}>+</span>
                    </div>
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