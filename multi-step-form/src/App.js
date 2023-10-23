import './styles/App.css';
import Step from './components/Step';
import StepLeft from './components/StepLeft';
import InfoRight from './components/InfoRight';

function App() {
  return (
    <div className="App">
      <div className="Step-left">
        <StepLeft />
      </div>
      <div className="App-header">
        <InfoRight />
      </div>
    </div>
  );
}

export default App;
