import React from 'react'
import styled from 'styled-components'

function StyledComponents() {
    return (
        <div>
            <Wrap>Blommor o Bin</Wrap>
        </div>
    )
}

export default StyledComponents

const Wrap = styled.div`
    font-size: 35px;
    color: pink;
    background-color: grey;
    text-align: left;
    padding-left: 5px;
`
