import './App.css';
import {useState} from 'react'
import {Form} from './components/Form';

function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  // const originalLength:string = "original length"
  // const speed:string = "speed"

  const submitHandler = (minutes: number, seconds: number) => {
    setMinutes(minutes)
    setSeconds(seconds)
    // return minutes ? <h2>{`Your new time is: ${minutes} & ${seconds}`}</h2> : null
  }

  return (
    <div className="main-container">
      <Form submitHandler={submitHandler} />
      <div>
        {minutes || seconds 
          ? 
          <h2>{`The video is now only ${minutes} minutes and ${seconds.toFixed(0)} seconds long!`}</h2> 
          : 
          null
        }
      </div>
    </div>
  );
}

export default App;
