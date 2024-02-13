import React from 'react';
import '../components/styles/Timer.css';

function Timer(props) {
    return (
        <div>
            <span>
                {('0' + Math.floor(props.time / 60000) % 60).slice(-2)}:
            </span>
            <span>
                {('0' + Math.floor(props.time / 1000) % 60).slice(-2)}
            </span>
    </div>
    );
}

export default Timer;
