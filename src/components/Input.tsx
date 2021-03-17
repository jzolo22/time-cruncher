import React, { useState } from 'react'

type InputProps = {
    placeholder: string;
}

export const Input = ({placeholder}: InputProps) => {
    return (
        <input type="text" placeholder={placeholder}/>
    )
}