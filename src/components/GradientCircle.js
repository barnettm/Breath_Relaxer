import React from "react";
import styled from "styled-components";

const GradientCircle = () => <StyledGradient></StyledGradient>;

const StyledGradient = styled.div`
  background: conic-gradient(
    #8d9bdb 0%,
    #8d9bdb 40%,
    #fff 40%,
    #fff 60%,
    #7a8de6 60%,
    #697edf 100%
  );
  height: 320px;
  width: 320px;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: -2;
  border-radius: 50%;


  @media only screen and (max-width: 600px) {
    height: 170px;
    width: 170px;
  }

`;

export default GradientCircle;
