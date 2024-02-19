import React, { useEffect, useRef } from 'react';
import styled from "styled-components/native";
import { Animated, useWindowDimensions, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

const screenWidth = Dimensions.get('window').width;
const cardWidth = screenWidth > 500 ? 500 : screenWidth;

const screenHeight = Dimensions.get("window").height;


//------- Map State To Props -----------------
// @ts-ignore
function mapStateToProps(state) {
  return { action: state.action };
}

// @ts-ignore
function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}




class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    // @ts-ignore
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
    }

    // @ts-ignore
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {

    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../../assets/background2.jpg")} />
          <Title>Zakaria Coulibaly</Title>
          <Subtitle>Mathematics learner</Subtitle>
        </Cover>
        <TouchableOpacity
          // @ts-ignore
          onPress={this.props.closeMenu}
          style={{
            position:"absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Ionicons name="close-circle-outline" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
              onPress={() => console.log("pressed")}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

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
