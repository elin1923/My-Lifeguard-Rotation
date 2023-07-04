import '../App.css';

export default function Header() {
    return (
        <div className='header'>
            <h1>
                Lifeguard    
            </h1>
            <input type='number' placeholder='# of rotation' value={2}></input>
            <input type='number' placeholder='# of stands'></input>
        </div>
    )
}