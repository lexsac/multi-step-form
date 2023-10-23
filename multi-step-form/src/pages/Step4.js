import React from 'react';
import Headline from '../components/Headline';
import NextStepButton from '../components/NextStepButton';
import BackButton from '../components/BackButton';

const Step4 = () => {
    return (
        <>  
            <Headline title={"Finishing up"} description={"Double-check everything looks OK before confirming."} />
    
            <BackButton />
            <NextStepButton />
        </>
    )
}

export default Step4;