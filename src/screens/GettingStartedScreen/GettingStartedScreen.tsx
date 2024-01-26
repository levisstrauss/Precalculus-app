import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Styled from "styled-components";
// @ts-ignore
const GettingStartedScreen = ({ navigation }) => {

  const handlePress = () => {
    navigation.push('Login');
  }

  return (
    <Container>
    </Container>
  );
};

export default GettingStartedScreen;

// @ts-ignore
const Container = Styled.View`
 flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
`;

