import React from 'react';
import MultiStepForm from './components/MultiStepForm';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <MultiStepForm />
    </div>
  );
}

export default App;
