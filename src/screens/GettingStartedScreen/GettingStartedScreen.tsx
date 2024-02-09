import React from "react";
import Styled from "styled-components";
import {  TouchableOpacity } from "react-native";


// @ts-ignore
const GettingStartedScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.push('Login');
  }
  return (
    <Container>
      <Content>
        <Image source={require("../../assets/getting-started.png")} />
        <Title>Pre-Calculus</Title>
        <Subtitle>Learn pre-{'\n'}calculus concepts</Subtitle>
        <Quote>
          "Mathematics is the most beautiful and most powerful creation of the human spirit." – Stefan Banach
        </Quote>
        <Button onPress={handlePress}>
         <ButtonText>Get Started</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};

export default GettingStartedScreen;

// @ts-ignore
const Container = Styled.View`
    flex: 1;
    background-color: #ffffff;
`;

// @ts-ignore
const Image = Styled.Image`
     width: 100%;
     margin-top: 40%;
`;
// @ts-ignore
const Title = Styled.Text`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
`;

// @ts-ignore
const Content = Styled.View`
    justify-content: center;
    align-items: center;
    color: black;
`;

// @ts-ignore
const Subtitle = Styled.Text`
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
`;

// @ts-ignore
const Quote = Styled.Text`
    font-style: italic;
    font-weight: 500;
    text-align: center;
    font-size: 16px;
    color: #606060;
    margin-bottom: 30px;
`;

const Button = Styled(TouchableOpacity)`
    background-color: #546bfb;
    padding-vertical: 12px;
    padding-horizontal: 130px;
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
`;

// @ts-ignore
const ButtonText = Styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
`;

