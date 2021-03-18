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
    box-sizing: border-box;
    text-decoration:none;
    border:0.16em solid rgba(255,255,255,0);
    &:hover {
        border-color: pink;
    }
`

export default StyledBtn