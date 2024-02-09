import React from "react";
import Styled from "styled-components";
import { StatusBar } from "react-native";

// @ts-ignore
const SignupScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.push('Login');
  };
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <BackgroundImage source={require("../../assets/background.png")} />
      {/*light-content*/}
      <LightImages>
        <LightImage1 source={require("../../assets/light.png")} />
        <LightImage2 source={require("../../assets/light.png")} />
      </LightImages>
      {/*Title and form*/}
      <ContentWrapper>
        <Content>
          <Title>Pre-Calculus</Title>
          <Subtitle>Sign up and start learning now!</Subtitle>
        </Content>

        <FormContainer>
          <Text>Username*</Text>
          <StyledInput placeholder="Enter your Username"/>
          <Text>Email Address*</Text>
          <StyledInput placeholder="Enter your email or password"/>
          <Text>Password*</Text>
          <StyledInput placeholder="Enter your password"/>
          <Text>Repeat Password*</Text>
          <StyledInput placeholder="Enter your password"/>
        </FormContainer>
        <SubmitButton onPress={handleSignup}>
          <ButtonText>Sign Up</ButtonText>
        </SubmitButton>

        <SignupContainer>
          <SignUpText>Already have an account then - </SignUpText>
          <SignupButton onPress={handleSignup}>
            <SignupButtonText>Log In</SignupButtonText>
          </SignupButton>
        </SignupContainer>
      </ContentWrapper>

    </Container>
  );
};

export default SignupScreen;


// @ts-ignore
const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;


// @ts-ignore
const ContentWrapper = Styled.View`
  justify-content: center;
  color: black;
  margin-left:  15px;
  margin-right: 15px;
  margin-top: 95%;
`;

// @ts-ignore
const BackgroundImage = Styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
// @ts-ignore
const LightImages = Styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  position: absolute;
`;
// @ts-ignore
const LightImage1 = Styled.Image`
  height: 225px;
  width: 90px;
`;

// @ts-ignore
const LightImage2 = Styled.Image`
  height: 160px;
  width: 65px;
`;

// @ts-ignore
const Title = Styled.Text`
   font-size: 28px;
   font-weight: bold;
   color: black;
`;

// @ts-ignore
const Subtitle = Styled.Text`
  font-size: 18px;
  color: black;
`;

// @ts-ignore
const Content = Styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

// @ts-ignore
const FormContainer = Styled.View`
     margin-bottom: 20px;
     justify-content: space-between;
`;

// @ts-ignore
const StyledInput = Styled.TextInput`
  height: 35px;
  margin-bottom: 10px;
  border-width: 1px;
  border-color: grey;
  border-radius: 5px;
  padding-horizontal: 10px;

       
`;

// @ts-ignore
const SubmitButton = Styled.TouchableOpacity`
  background-color: #546bfb;
  padding-vertical: 12px;
  color: white;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
`;
// @ts-ignore
const Text = Styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
`;


// @ts-ignore
const ButtonText = Styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

// @ts-ignore
const SignupContainer = Styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
`;

// @ts-ignore
const SignUpText = Styled.Text`
  font-size: 16px;
  color: grey;
`;

// @ts-ignore
const SignupButton = Styled.TouchableOpacity`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
`;

// @ts-ignore
const SignupButtonText = Styled.Text`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
  margin-left: 5px;
`;
