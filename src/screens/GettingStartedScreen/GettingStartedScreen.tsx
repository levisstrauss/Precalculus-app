import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity} from "react-native";
import Animated, {FadeInUp} from "react-native-reanimated";

/**
 * `GettingStartedScreen` is a React component that serves as the introductory screen
 * for a Pre-Calculus learning application. It displays a welcome message, a motivational quote,
 * and a "Get Started" button that navigates to the login screen.
 *
 * The component uses animations from `react-native-reanimated` to create a dynamic entrance for the
 * elements on the screen, making the introduction more engaging.
 *
 * @param {Object} props - The properties passed to the GettingStartedScreen component.
 * @param {Object} props.navigation - The navigation prop used for navigating to other screens.
 * @returns The JSX for the GettingStartedScreen component.
 */
// @ts-ignore
interface GettingStartedScreenProps {
  navigation: {
    push: (screen: string) => void;
  };
}

const GettingStartedScreen: React.FC<GettingStartedScreenProps> = ({ navigation }) => {
  const handlePress = () => {
    navigation.push('Login');
  };

  return (
    <Container>
      <Content>
        <Animated.Image
          source={require("../../assets/getting-started.png")}
          style={{ width: '100%', marginTop: '40%' }}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        />
        <Animated.Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginBottom: 10,
          }}
          entering={FadeInUp.duration(1000).springify()}
        >
          Pre-Calculus
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: 20,
            color: '#606060',
            textAlign: 'center',
            marginHorizontal: 20,
            marginBottom: 30,
          }}
          entering={FadeInUp.duration(1000).springify()}
        >
          Learn pre-{'\n'}calculus concepts
        </Animated.Text>
        <Animated.Text
          style={{
            fontStyle: 'italic',
            fontSize: 16,
            color: '#606060',
            textAlign: 'center',
            marginHorizontal: 20,
            marginBottom: 30,
          }}
          entering={FadeInUp.duration(1000).springify()}
        >
          "Mathematics is the most beautiful and most powerful creation of the human spirit." – Stefan Banach
        </Animated.Text>
        <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
          <Button onPress={handlePress}>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Animated.View>
      </Content>
    </Container>
  );
};

export default GettingStartedScreen;

// @ts-ignore
const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

// @ts-ignore
const Content = styled.View`
    justify-content: center;
    align-items: center;
    color: black;
`;

const Button = styled(TouchableOpacity)`
    background-color: #546bfb;
    padding-vertical: 12px;
    padding-horizontal: 130px;
    color: white;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
`;

// @ts-ignore
const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
`;

