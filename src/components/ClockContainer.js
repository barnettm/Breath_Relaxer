import React from "react";
import styled from "styled-components";
import ClockCircle from './ClockCircle';
import Text from './Text';
import PointerContainer from './PointerContainer';
import GradientCircle from './GradientCircle';


const ClockContainer = ({message, grow}) => (
    <Container className={grow}>
        <ClockCircle />
        <Text message={message}/>
        <PointerContainer />
        <GradientCircle />
    </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  margin: auto;
  position: relative;
  transform: scale(1);
  margin-top: 50%;


  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }

  &&&.grow {
    animation: grow 7s linear forwards;
  }

  &&&.shrink {
    animation: shrink 7s linear forwards;
  }

  @keyframes grow {
    from {
        transform: scale(1)
    }
    to {
        transform: scale(1.2)
    }
}

@keyframes shrink {
    from {
        transform: scale(1.2)
    }
    to {
        transform: scale(1)
    }
}
`;

export default ClockContainer;
