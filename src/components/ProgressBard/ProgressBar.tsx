import React from "react";
import styled from "styled-components";

/**
 * `ProgressBar` is a React functional component that renders a progress bar to visually represent a percentage.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.progress - The current progress value, expected to be between 0 and 1, where 1 is 100%.
 * @returns The JSX elements to render the progress bar.
 */
// @ts-ignore
const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Content style={{ width: `${progress * 100}%` }}>
        <Hightlight />
      </Content>
    </Container>
  );
};

export default ProgressBar;

// @ts-ignore
const Container = styled.View`
    background-color: lightgrey;
    height: 30px;
    border-radius: 15px;
    flex: 1;
`;

// @ts-ignore
const Content = styled.View`
    flex: 1;
    background-color: #FAC800;
    border-radius: 15px;
`;

// @ts-ignore
const Hightlight = styled.View`
    background-color: #FAD131;
    width: 90%;
    height: 5px;
    border-radius: 5px;
    margin-top: 5px;
    align-self: center;
`;
