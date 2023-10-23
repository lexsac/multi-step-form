import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import StepLeft from './components/StepLeft';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <StepLeft />
      <MultiStepForm />
    </div>
  );
}

export default App;
