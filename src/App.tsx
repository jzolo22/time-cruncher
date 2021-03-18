import './App.css';
import {Form} from './components/Form';

function App() {

  // const originalLength:string = "original length"
  // const speed:string = "speed"

  const submitHandler = (minutes: number, seconds: number) => {
    console.log(minutes, seconds)
  }

  return (
    <div className="main-container">
      <Form submitHandler={submitHandler} />
    </div>
  );
}

export default App;
