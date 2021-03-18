import styled from 'styled-components'

const StyledInput = styled.input`
    width: fit-content;
    outline: none;
    margin: 3%;
    border-radius: 2em;
    text-align: center;
    font-size: 20px;
    -webkit-transition: 0.5s;
    &:focus {
        border: 3px solid pink;
    }
`

export default StyledInput