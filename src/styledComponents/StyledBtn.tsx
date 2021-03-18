import styled from 'styled-components'

const StyledBtn = styled.button`
    outline: none;
    font-size: 20px;
    border-radius: 2em;
    padding: 1%;
    background-color: white;
    margin: 3%;
    color: black;
    -webkit-transition: 0.5s;
    &:hover {
        border: 5px solid pink;
    }
`

export default StyledBtn