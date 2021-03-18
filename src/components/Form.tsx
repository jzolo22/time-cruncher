import React, { ChangeEvent, FormEvent, useState } from 'react'

type FormProps = {
    submitHandler: (minutes: number, seconds: number) => void;
}

export const Form = ({submitHandler}: FormProps) => {
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")
    const [speed, setSpeed] = useState("")

    const localSubmitHandler = (e: FormEvent) => {
        e.preventDefault()
        let totalSeconds:number 
        if (minutes && seconds){
            totalSeconds = (parseInt(minutes) * 60 + parseInt(seconds))
        } else if (!minutes && seconds){
            totalSeconds = parseInt(seconds)
        } else if (minutes && !seconds){
            totalSeconds = (parseInt(minutes) * 60)
        } else {
            window.alert("Please enter a video length!")
            totalSeconds = 0
        }
        if (totalSeconds){
            const speedyTime:number = totalSeconds / parseFloat(speed)
            const newMinutes:number = Math.floor(speedyTime / 60)
            const newSeconds:number = speedyTime - newMinutes * 60
            submitHandler(newMinutes, newSeconds)
        }
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
                <label htmlFor="minutes"></label>
                <input 
                    id="minutes"
                    type="number" 
                    name="minutes" 
                    placeholder="original minutes" 
                    value={minutes} 
                    onChange={minuteHandler}
                />
                <label htmlFor="seconds"></label>
                 <input 
                    id="seconds"
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