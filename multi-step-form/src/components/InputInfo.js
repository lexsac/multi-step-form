import React from 'react';
import Input from './Input';
import NextStepButton from './NextStepButton';

const InputInfo = () => {
    return (
        <div className="input-info">
            <form>
                <Input name={"Name"} label={"name"} placeholderText={"e.g. Stephen King"} />
                <Input name={"Email Address"} label={"email-address"} placeholderText={"e.g. stephenking@lorem.com"} />
                <Input name={"Phone Number"} label={"phone-number"} placeholderText={"e.g. +1 234 567 890"} />
            </form>
            <NextStepButton />
        </div>
    )
}

export default InputInfo;