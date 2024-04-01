import React from "react";
import { Animated, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import Styled from "styled-components";

const screenHeight = Dimensions.get("window").height;


/**
 * `Loading` is a React class component that displays an animated loading indicator.
 * The `isActive` prop controls the component's visibility and animation.
 * It animates into view when active and out of view when inactive.
 */
class Loading extends React.Component {
  animation = React.createRef();
  state = {
    top: new Animated.Value(0),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    // @ts-ignore
    if (this.props.isActive) {
      Animated.timing(this.state.top, {
        toValue: 0, duration: 0,
        useNativeDriver: false
      }).start();
      Animated.timing(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false
      }).start();
      // @ts-ignore
      this.animation.play();

    } else {
      Animated.timing(this.state.top, {
        toValue: screenHeight,
        duration: 0,
        useNativeDriver: false
      }).start();
      Animated.timing(this.state.opacity, {
        toValue: 0,
        useNativeDriver: false
      }).start();
      // @ts-ignore
      this.animation.loop = false;
    }
  }

  render(){
    // @ts-ignore
    return (
      <AnimatedContainer style={
        {top: this.state.top, opacity: this.state.opacity}
      }>
        <LottieView
          source={require("../../assets/lottie-loading-fluid.json")}
          style={{width: 300,height: 300}}
          autoPlay={false}
          loop={true}
          ref={animation => {
            // @ts-ignore
            this.animation = animation;
          }}
        />
      </AnimatedContainer>
    )
  }
}

export default Loading;
// @ts-ignore
const Container = Styled.View`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
