import React from "react";
import styled from "styled-components/native";
import ProgressBar from "../ProgressBard";
//@ts-ignore
import heart from "../../assets/heart.png";


// @ts-ignore
const Header = ({ progress, lives }) => {
  return (
    <Container>
      <ProgressBar progress={progress} />
      <Icon source={heart} />
      <Lives>{lives}</Lives>
    </Container>
  );
};

export default Header;

// @ts-ignore
const Container = styled.View`
  flex-direction: row;
    align-items: center;
`;
// @ts-ignore
const Lives = styled.Text`
    color: red;
    font-weight: bold;
    font-size: 18px;
`;

// @ts-ignore
const Icon = styled.Image`
    height: 30px;
    width: 30px;
    resize-mode: contain;
    margin-horizontal: 10px;
`;
