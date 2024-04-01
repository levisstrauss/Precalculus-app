import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

interface LogoProps {
  image: ImageSourcePropType
  text: string;
}

/**
 * `Logo` is a React functional component that displays a logo image alongside a text label.
 * It's typically used to represent a brand or section within an app.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ImageSourcePropType} props.image - The source of the logo image.
 * @param {string} props.text - The text to display next to the logo image.
 * @returns The JSX elements to render the Logo component.
 */
const Logo = ({image, text}: LogoProps) => (
  <Container>
    <Image source={image} resizeMode="contain"/>
    <Text>{text}</Text>
  </Container>
);

export default Logo;

// @ts-ignore
const Container = styled.View`
    flex-direction: row;
    background: white;
    height: 60px;
    padding: 12px 16px 12px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    align-items: center;
    margin: 0 8px;
`;

// @ts-ignore
const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

// @ts-ignore

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
