import React from 'react';
import Headline from '../components/Headline';
import Input from '../components/Input';
import NextStepButton from '../components/NextStepButton';

const Step1 = () => {
    return (
        <>  
            <Headline title={"Personal Info"} description={"Please provide your name, email address, and phone number."} />
            <Input name={"Name"} label={"name"} placeholderText={"e.g. Stephen King"} />
            <Input name={"Email Address"} label={"email-address"} placeholderText={"e.g. stephenking@lorem.com"} />
            <Input name={"Phone Number"} label={"phone-number"} placeholderText={"e.g. +1 234 567 890"} />
            <NextStepButton />
        </>
    )
}

export default Step1;