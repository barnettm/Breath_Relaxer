import React from 'react';
import styled from 'styled-components';


const ClockCircle = () => (
    <Circle></Circle>
);


const Circle = styled.div`

background-color: #010f1c;
height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
border-radius: 50%;
`

export default ClockCircle;