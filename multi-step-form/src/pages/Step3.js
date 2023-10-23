import React from 'react';
import Headline from '../components/Headline';
import NextStepButton from '../components/NextStepButton';
import BackButton from '../components/BackButton';

const Step3 = () => {
    return (
        <>  
            <Headline title={"Pick add-ons"} description={"Add-ons help enhance your gaming experience."} />
        
            <BackButton />
            <NextStepButton />
        </>
    )
}

export default Step3;