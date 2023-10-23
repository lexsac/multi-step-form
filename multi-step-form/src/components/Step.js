import React from 'react';

const Step = ({ num, text }) => {
    return (
        <div className="step">
            <div className="number-circle">
                <p>{num}</p>
            </div>
            <h1>Step {num}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Step;