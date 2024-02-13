import React from "react";

function ControlButtons(action) {
    const { isActive, isPaused, startTimer, stopTimer, pauseTimer } = action;

    const StartButton = (
        <button onClick={startTimer}>
            I'm Ready
        </button>
    );

    const ActiveButton = (
        <>
            <button onClick={stopTimer}>I'm done</button>
            <button onClick={pauseTimer}>{isPaused ? 'Ok! Resume' : 'Give me a break!'}</button>
        </>
    );

    return (
        <div>
            {isActive ? ActiveButton : StartButton}
        </div>
    )
}

export default ControlButtons;