import React from 'react';
import Step from './Step';

const StepLeft = () => {
    return (
        <div className="step">
            <Step num={"1"} text={"Your Info"} />
            <Step num={"2"} text={"Select Plan"} />
            <Step num={"3"} text={"Add-Ons"} />
            <Step num={"4"} text={"Summary"} />
        </div>
    )
}

export default StepLeft;