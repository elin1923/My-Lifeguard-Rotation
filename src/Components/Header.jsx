import '../App.css';

export default function Header() {

    const date = new Date()
    const clock = date.getHours() + ':' + date.getMinutes()

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
                time
            </div>
        </div>
    )
}