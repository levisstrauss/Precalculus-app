import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth > 500 ? 500 : screenWidth;
const screenHeight = Dimensions.get("window").height;
import { getAuth, signOut } from "firebase/auth";
import { getFirebaseApp } from "../../utils/firebaseHelper";
import { UserContext } from "../../UserContext/UserContext";

interface MenuProps {
  icon: string;
  title: string;
  text: string;
  onPress: () => void;
}

// @ts-ignore
const Menu = () => {
  const navigation = useNavigation();
  const [top] = useState(new Animated.Value(screenHeight));
  // @ts-ignore
  const action = useSelector(state => state.action); // Assuming you have a Redux setup
  const dispatch = useDispatch();
  useEffect(() => {
    toggleMenu();
  }, [action]);

  const toggleMenu = () => {
    if (action === "openMenu") {
      Animated.spring(top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    } else if (action === "closeMenu") {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  //@ts-ignore
  const navigateToScreen = (screenName) => {
    //@ts-ignore
    navigation.navigate(screenName);
    dispatch({ type: "CLOSE_MENU" });
  };

  const handleLogout = () => {
    const firebaseApp = getFirebaseApp(); // Ensure Firebase is initialized
    const auth = getAuth(firebaseApp);
    signOut(auth).then(() => {
      console.log('Logged out successfully');
      navigateToScreen('Login');
      dispatch({ type: "USER_LOGGED_OUT" });
    }).catch((error) => {
      console.error('Logout failed', error);
    });
  };

  return (
    <AnimatedContainer style={{ top }}>
      <Cover>
        <Image source={require("../../assets/background2.jpg")} />
        <UserContext.Consumer>
          {user => (
            // @ts-ignore
            <Title>{user ? user.username : 'Guest'}!</Title>
          )}
        </UserContext.Consumer>
        <Subtitle>Mathematics learner</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={() => dispatch({ type: "CLOSE_MENU" })}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 1,
        }}
      >
        <CloseView>
          <Ionicons name="close-circle-outline" size={44} color="#546bfb" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        <MenuItem
          icon="settings"
          title="Profile"
          text="settings"
          onPress={() => navigateToScreen('Profile')}
        />
        <MenuItem
          icon="card"
          title="Billing"
          text="payments"
          onPress={() => navigateToScreen('BillingScreen')}
        />
        <MenuItem
          icon="compass"
          title="Learn Math"
          text="start course"
          onPress={() => navigateToScreen('MathCourseScreen')}
        />
        <MenuItem
          icon="exit"
          title="Log out"
          text="see you soon!"
          onPress={handleLogout}
        />
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;


// width: ${cardWidth};
const Container = styled.View`
    position: absolute;
    background: white;
    width: ${cardWidth}px;
    align-self: center;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;
// ${screenHeight};
const Content = styled.View`
    height: 667px;
    background: #f0f3f5;
    padding: 50px;
`;

const items = [
  {
    icon: "settings",
    title: "Profile",
    text: "settings"
  },
  {
    icon: "card",
    title: "Billing",
    text: "payments"
  },
  {
    icon: "compass",
    title: "Learn Math",
    text: "start course"
  },
  {
    icon: "exit",
    title: "Log out",
    text: "see you soon!"
  }
];
