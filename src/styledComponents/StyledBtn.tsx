import styled from 'styled-components'

const StyledBtn = styled.button`
    width: 25%;
    outline: none;
    -webkit-transition: 0.5s;
    &:focus {
        border: 3px solid pink;
    }
`

export default StyledBtn