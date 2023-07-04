import '../App.css';

export default function Header() {
    return (
        <div className='header'>
            <h1>
                Lifeguard Rotation  
            </h1>
            <input type='radio' name='rotation'></input>
            <input type='radio' name='rotation'></input>
            <input type='radio' name='rotation'></input>
            <input type='number' placeholder='# of stands'></input>
            <input type='number' placeholder='Duration'></input>
        </div>
    )
}