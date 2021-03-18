import styled from 'styled-components'

const StyledInput = styled.input`
    width: fit-content;
    outline: none;
    margin: 3%;
    padding: 1%;
    border-radius: 2em;
    text-align: center;
    font-size: 20px;
    -webkit-transition: 0.5s;
    box-shadow: 4px;
    &:focus {
        border: 5px solid pink;
    }
`

export default StyledInput