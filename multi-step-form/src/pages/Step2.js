import React from 'react';
import Headline from '../components/Headline';
import BackButton from '../components/BackButton';
import NextStepButton from '../components/NextStepButton';

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