import React from "react";
import styled from "styled-components/native";
import ProgressBar from "../ProgressBard";
//@ts-ignore
import heart from "../../assets/heart.png";


/**
 * `Header` is a React functional component that displays a progress bar and a lives counter.
 * It shows the user's progress in a quiz or game and the number of lives remaining.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.progress - The current progress of the user, represented as a decimal.
 * @param {number} props.lives - The number of lives the user has remaining.
 * @returns The JSX elements to render the Header.
 */
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
