import { ChangeEvent, FormEvent, useState } from 'react'
import StyledInput from '../styledComponents/StyledInput'
import StyledFormContainer from '../styledComponents/StyledFormContainer'
import StyledSelect from '../styledComponents/StyledSelect'
import styled from 'styled-components'
import StyledBtn from '../styledComponents/StyledBtn'

type FormProps = {
    submitHandler: (minutes: number, seconds: number, minsGained:number, secsGained:number) => void;
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
            const gainedTime:number = totalSeconds - (newMinutes * 60 + newSeconds)
            const minsGained:number = Math.floor(gainedTime / 60)
            const secsGained:number = gainedTime - minsGained * 60
            submitHandler(newMinutes, newSeconds, minsGained, secsGained)
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
        <StyledFormContainer>
            <form onSubmit={localSubmitHandler}>
                <label htmlFor="minutes"></label>
                <StyledInput 
                    id="minutes"
                    type="number" 
                    name="minutes" 
                    placeholder="original minutes" 
                    value={minutes} 
                    onChange={minuteHandler}
                />
                <label htmlFor="seconds"></label>
                 <StyledInput 
                    id="seconds"
                    type="number" 
                    name="seconds" 
                    placeholder="original seconds" 
                    value={seconds} 
                    onChange={secondHandler}
                />
                <br></br>
                <StyledSelect name="speed" onChange={speedHandler}>
                    <option selected disabled>How speedy are you?</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="1.75">1.75x</option>
                    <option value="2">2x</option>
                </StyledSelect>
                <br></br>
                <StyledBtn>Calculate! </StyledBtn>
            </form>
        </StyledFormContainer>
    )
}