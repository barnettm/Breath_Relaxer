import React from "react";
import styled from "styled-components";

const Pointer = () => <PointerStyled></PointerStyled>;

const PointerStyled = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: block;
`;

export default Pointer;
