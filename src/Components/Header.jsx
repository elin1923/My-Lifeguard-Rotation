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
    let [duration, setDuration] = useState(15);
    
    let [start, setStart] = useState('12:00');
    let [end, setEnd] = useState('6:00');


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

    // duration Increment
    const handleDurationIncrement = () => {
        setDuration(duration + 1)
    }

    // duration decrement
    const handleDurationDecrement = () => {
        setDuration(duration - 1)
    }

    // submit
    const handleGenerateForm = e => {
        e.preventDefault()

        console.log('submitted')
        console.log(start)
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
                <form className='parameters' onSubmit={handleGenerateForm} id='userForm'>
                    <div>
                        <div>
                            # of stands
                        </div>
                        <span class="input-number-decrement" onClick={handleStandDecrement}>–</span>
                        <input class="input-number" type="text" value={stands} min="0" max="10" aria-readonly></input>
                        <span class="input-number-increment" onClick={handleStandIncrement}>+</span>
                    </div>
                    <div>
                        <div>
                            # of guards
                        </div>
                        <span className="input-number-decrement" onClick={handleGuardDecrement}>–</span>
                        <input className="input-number" type="text" value={guards} min="0" max="10" aria-readonly></input>
                        <span className="input-number-increment" onClick={handleGuardIncrement}>+</span>
                    </div>
                    <div>
                        <div>
                            Duration
                        </div>
                        <span className="input-number-decrement" onClick={handleDurationDecrement}>–</span>
                        <input className="input-number" type="text" value={duration} min="0" max="10" aria-readonly></input>
                        <span className="input-number-increment" onClick={handleDurationIncrement}>+</span>
                    </div>

                    <div>
                        <div>
                            Start
                        </div>
                        <input type="time" id="startTime" value={start} onChange={
                            (e) => setStart(e.target.value)}>
                        </input>
                    </div>

                    <div>
                        <div>
                            End
                        </div>
                        <input type="time" id='endTime' value={end} onChange={
                            (e) => setEnd(e.target.value)}>
                        </input>
                    </div>
                    <input type='submit'></input>
                </form>
            </div>
            
            <div className='clock'>
                {clock.toLocaleTimeString()}
            </div>
        </div>
    )
}