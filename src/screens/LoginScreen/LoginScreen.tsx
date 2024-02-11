import React from "react";
import Styled from "styled-components";
import { StatusBar } from "react-native";
import Animated, {FadeInUp} from "react-native-reanimated";

// @ts-ignore
const LoginScreen = ({ navigation }) => {
  const handleSignup = () => {
    navigation.push('Signup');
  };

  const handleLogin = () => {
    navigation.push('Feed');
  }
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <BackgroundImage source={require("../../assets/background.png")} />
      {/*light-content*/}
      <LightImages>
        <Animated.Image
          style={{height: 225, width: 90}}
          source={require("../../assets/light.png")}
          entering={
          FadeInUp.delay(200)
            .duration(1000)
            .springify()
          }
        />
        <Animated.Image
          style={{height: 160, width: 65}}
          source={require("../../assets/light.png")}
          entering={
            FadeInUp.delay(400)
              .duration(1000)
              .springify()
          }
        />
      </LightImages>
      <Animated.Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          position: "absolute",
          marginLeft: "35%",
          marginTop: "70%",
        }}
        entering={FadeInUp.duration(1000).springify()}
      >
        Login
      </Animated.Text>
      {/*Title and form*/}
      <ContentWrapper>
        <Content>
          <Animated.Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "black",
            }}
          entering={FadeInUp.duration(1000).springify()}
          >
            Pre-Calculus
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 18,
              color: "black",
              textAlign: "center",
              marginVertical: 10,
            }}
            entering={FadeInUp.duration(1000).springify()}
          >
            Join the fun and start learning now!
          </Animated.Text>
        </Content>
        <FormContainer>
          <Text>Email Address* or Username* </Text>
          <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
             <StyledInput placeholder="Enter your email or password"/>
          </Animated.View>
          <Text>Password*</Text>
          <Animated.View entering={FadeInUp.delay(200).duration(1000).springify()}>
             <StyledInput placeholder="Enter your password"/>
          </Animated.View>
        </FormContainer>
        <SubmitButton onPress={handleLogin}>
          <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()}>
             <ButtonText>Login</ButtonText>
          </Animated.View>
        </SubmitButton>
        <SignupContainer>
          <Animated.View entering={FadeInUp.delay(500).duration(1000).springify()}>
            <SignUpText>Don't have an account yet?</SignUpText>
          </Animated.View>
            <SignupButton onPress={handleSignup}>
              <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
                 <SignupButtonText>Sign Up</SignupButtonText>
              </Animated.View>
            </SignupButton>
        </SignupContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LoginScreen;

// @ts-ignore
const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
  position: relative;
`;
// @ts-ignore
const ContentWrapper = Styled.View`
  justify-content: center;
  color: black;
  margin-left:  15px;
  margin-right: 15px;
  margin-top: 110%;
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
  height: 40px;
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


