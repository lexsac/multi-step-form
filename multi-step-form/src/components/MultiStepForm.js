import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Step1 from '../pages/Step1';
import Step2 from '../pages/Step2';
import Step3 from '../pages/Step3';
import Step4 from '../pages/Step4';

function MultiStepForm() {
    // const [step, setStep] = useState(1);

    return (
        <div className="App">
            <Router>  
                <Route exact path="/step1">
                    <Step1 />
                </Route>
                <Route exact path="/step2">
                    <Step2 />
                </Route>
                <Route exact path="/step3">
                    <Step3 />
                </Route>
                <Route exact path="/step4">
                    <Step4 />
                </Route>
            </Router>  
        </div>
    );
}

export default MultiStepForm;
