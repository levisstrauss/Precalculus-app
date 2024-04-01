import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuItem from "./MenuItem";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth > 500 ? 500 : screenWidth;
const screenHeight = Dimensions.get("window").height;
import { getAuth, signOut } from "firebase/auth";
import { getFirebaseApp } from "../../utils/firebaseHelper";
import { UserContext } from "../../UserContext/UserContext";


/**
 * `Menu` is a React functional component that provides a slide-in menu with user options.
 * It uses animations to slide in and out of view and displays user-related information and menu items.
 *
 * @returns The JSX elements to render the Menu component.
 */
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
    signOut(auth).then( async () => {
      console.log('Logged out successfully');
      navigateToScreen('Login');
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
            <Title>{user ? user.username : 'Guest'}</Title>
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
          // @ts-ignore
          onPress={() => navigateToScreen('Profile')}
        />
        <MenuItem
          icon="card"
          title="Billing"
          text="payments"
          // @ts-ignore
          onPress={() => navigateToScreen('BillingScreen')}
        />
        <MenuItem
          icon="compass"
          title="Learn Math"
          text="start course"
          // @ts-ignore
          onPress={() => navigateToScreen('MathCourseScreen')}
        />
        <MenuItem
          icon="exit"
          title="Log out"
          text="see you soon!"
          // @ts-ignore
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
