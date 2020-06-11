import React from "react";
import styled from "styled-components";
import Pointer from './Pointer';

const PointerContainer = () => <PointerContainerStyled>
    <Pointer />
</PointerContainerStyled>;

const PointerContainerStyled = styled.div`
  position: absolute;
  top: -40px;
  left: 140px;
  width: 20px;
  height: 190px;
  animation: rotate 18s linear forwards infinite;
  transform-origin: bottom center;

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: -44px;
    left: 62px;
    height: 120px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default PointerContainer;
