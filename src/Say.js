import React, {useState} from 'react';


const Say = ()=> {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('Hello~');
    const onClickLeave = () => setMessage('Goodbye~');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enterence</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{ color:'red'}} onClick={()=> setColor('Red')}>Red</button>
            <button style={{ color:'green'}} onClick={()=> setColor('green')}>Green</button>
            <button style={{ color:'blue'}} onClick={()=> setColor('blue')}>Blue</button>
        </div>
    );
}

export default Say;