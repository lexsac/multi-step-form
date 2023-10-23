import React from 'react';
import Headline from '../components/Headline';
import NextStepButton from '../components/NextStepButton';
import BackButton from '../components/BackButton';

const Step2 = () => {
    return (
        <>  
            <Headline title={"Select Your Plan"} description={"You have the option of monthly or yearly billing."} />
            
            <BackButton />
            <NextStepButton />
        </>
    )
}

export default Step2;