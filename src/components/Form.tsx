import React, { ChangeEvent, FormEvent, useState } from 'react'

// type FormProps = {
//     calculateHandler: (length: number, speed: number) => number;
// }

export const Form = () => {
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")
    const [speed, setSpeed] = useState("")

    const localSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        const totalSeconds:number = (parseInt(minutes) * 60 + parseInt(seconds))
        const newTime:number = (totalSeconds / (parseFloat(speed)))
        // console.log(newTime.toFixed(2))
    }

    const minuteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinutes(e.target.value)
    }

    const secondHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSeconds(e.target.value)
    }

    const speedHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSpeed(e.target.value)
    }

    return (
        <div>
            <form onSubmit={localSubmitHandler}>
                <input 
                    type="number" 
                    name="minutes" 
                    placeholder="original minutes" 
                    value={minutes} 
                    onChange={minuteHandler}
                />
                 <input 
                    type="number" 
                    name="seconds" 
                    placeholder="original seconds" 
                    value={seconds} 
                    onChange={secondHandler}
                />

                <select name="speed" onChange={speedHandler}>
                    <option selected disabled>How speedy are you?</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                </select>

                <button>Calculate</button>
            </form>
        </div>
    )
}