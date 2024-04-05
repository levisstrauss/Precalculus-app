import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType } from "react-native";

interface CardProps {
  title: string;
  caption: string;
  logo: string;
  image: ImageSourcePropType;
  subtitle: string;
}

/**
 * `Card` is a React functional component that displays a card layout including a cover image,
 * title, logo, caption, and subtitle. It's used to represent a piece of content, like an article,
 * a course, or a profile, in a visually appealing manner.
 *
 * @param {Object} props - The props for the Card component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.caption - A short descriptive text for the card.
 * @param {string} props.logo - The URL of the logo image.
 * @param {ImageSourcePropType} props.image - The source of the cover image.
 * @param {string} props.subtitle - A subtitle for the card, displayed in uppercase.
 * @returns The JSX elements to render the Card component.
 */
const Card = ({title, caption, logo, image, subtitle}: CardProps) => {
  return (
    <Container style={{ elevation: 10}}>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={logo} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle.toUpperCase()}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;


// @ts-ignore
const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;
// @ts-ignore
const Logo = styled.Image`
    width: 44px;
    height: 44px;
`;
// @ts-ignore
const Caption = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`;
// @ts-ignore
const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    margin-top: 4px;
`;
// @ts-ignore
const Wrapper = styled.View`
    margin-left: 10px;
`;
// @ts-ignore
const Container = styled.View`
    background: white;
    width: 315px;
    height: 280px;
    border-radius: 14px;
    margin: 20px 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
// @ts-ignore
const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;
// @ts-ignore
const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;
// @ts-ignore
const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;
`;

