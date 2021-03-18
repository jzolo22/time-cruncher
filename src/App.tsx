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
  }

  const numberText = (minutes: number = 0, seconds: number = 0) => {
    if (minutes) {
      return minutes === 1 ? "minute" : "minutes"
    } else if (seconds) {
      return seconds === 1 ? "second" : "seconds"
    }
  }

  return (
    <div className="main-container">
      <Form submitHandler={submitHandler} />
      <div>
        {
          minutes && seconds 
          ? 
          <h2>{`The video is now only ${minutes} ${numberText(minutes)} and ${seconds.toFixed(0)} seconds long!`}</h2> 
          : 
          null
        }
        {
          minutes && !seconds 
          ? 
          <h2>{`The video is now only ${minutes} ${numberText(minutes)} long!`}</h2> 
          : 
          null
        }
        {
          !minutes && seconds 
          ? 
          <h2>{`The video is now only ${seconds.toFixed(0)} ${numberText(0, seconds)} long!`}</h2> 
          : 
          null
        }
      </div>
    </div>
  );
}

export default App;
