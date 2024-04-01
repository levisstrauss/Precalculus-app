import React from "react";
import Styled from "styled-components";
import {
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity ,
} from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import {connect } from "react-redux";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const tabBarHeight = 25;  // Fixed height of the tab bar later on
function mapStateToProps(state: any) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch: any) {
  return {
    openCard: () =>
      dispatch({
        type: "OPEN_CARD"
      }),
    closeCard: () =>
      dispatch({
        type: "CLOSE_CARD"
      })
  };
}

class Project extends React.Component {
  state = {
    cardWidth: new Animated.Value(315),
    cardHeight: new Animated.Value(460),
    titleTop: new Animated.Value(20),
    opacity: new Animated.Value(0),
    textHeight: new Animated.Value(100)
  }

  openCard = () => {
    // @ts-ignore
    if (!this.props.canOpen) return;
    Animated.spring(this.state.cardWidth, { toValue: screenWidth , useNativeDriver: false }).start();
    Animated.spring(this.state.cardHeight, { toValue: screenHeight- tabBarHeight, useNativeDriver: false }).start();
    Animated.spring(this.state.titleTop, { toValue: 40, useNativeDriver: false }).start();
    Animated.timing(this.state.opacity, { toValue: 1, useNativeDriver: false }).start();
    Animated.spring(this.state.textHeight, { toValue: 1000, useNativeDriver: false }).start();

    StatusBar.setHidden(true);
    // @ts-ignore
    this.props.openCard();
  }

  closeCard = () => {
    Animated.spring(this.state.cardWidth, { toValue: 315, useNativeDriver: false }).start();
    Animated.spring(this.state.cardHeight, { toValue: 460, useNativeDriver: false }).start();
    Animated.spring(this.state.titleTop, { toValue: 20, useNativeDriver: false }).start();
    Animated.timing(this.state.opacity, { toValue: 0, useNativeDriver: false }).start();
    Animated.spring(this.state.textHeight, { toValue:  100, useNativeDriver: false }).start();

    StatusBar.setHidden(false);
    // @ts-ignore
    this.props.closeCard();
  }
  render(){
    return (
      <TouchableWithoutFeedback onPress={this.openCard}>
        <AnimatedContainer style={{
          width: this.state.cardWidth,
          height: this.state.cardHeight
        }}
        >
          <Cover>
            <Image source={this.props.image} />
            <AnimatedTitle style={{ top: this.state.titleTop }}>
              {this.props.title}
            </AnimatedTitle>
            <Author>by:{this.props.author}</Author>
          </Cover>
          <AnimatedText style={{ height: this.state.textHeight}}>{this.props.text}</AnimatedText>
          <AnimatedLinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
            style={{
              position: 'absolute',
              top: 330,
              width: "100%",
              height: this.state.textHeight
            }}
          >
          </AnimatedLinearGradient>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              right: 20
            }}
            onPress={this.closeCard}
          >
            <AnimatedCloseView style={{ opacity: this.state.opacity}}>
              <Ionicons name="close" size={32} color="#546bfb"/>
            </AnimatedCloseView>
          </TouchableOpacity>
        </AnimatedContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// @ts-ignore
const CloseView = Styled.View`
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);

// @ts-ignore
const Container = Styled.View`
  width: 315px;
  height: 460px;
  border-radius: 14px; 
  background-color: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

// @ts-ignore
const Cover = Styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

// @ts-ignore
const Image = Styled.Image`
  width: 100%;
  height: 290px;
`;
// @ts-ignore
const Title = Styled.Text`
   position: absolute;
   top: 20px;
   left: 20px;
   font-size: 24px;
   font-weight: bold;
   color: white;
   width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

// @ts-ignore
const Author = Styled.Text`
   position: absolute;
   bottom: 20px;
   left: 20px;
   color: rgba(255, 255, 255, 0.8);
   font-size: 15px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.5px;
`;

// @ts-ignore
const Text = Styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);

