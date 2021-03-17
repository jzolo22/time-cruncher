import './App.css';
import {Input} from './components/Input';

function App() {

  const originalLength:string = "original length"
  const speed:string = "speed"

  return (
    <div className="main-container">
      <Input placeholder={originalLength}/>
      <Input placeholder={speed}/>
    </div>
  );
}

export default App;
