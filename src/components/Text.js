import React from 'react';
import styled from 'styled-components';



const Text = ({message}) => (
    <TextStyled>{message}</TextStyled>
)

const TextStyled = styled.p`
    color: #fff;
`

export default Text;