import React, { useRef, useEffect } from "react";
import { Animated, Dimensions } from "react-native";
import LottieView from "lottie-react-native";
import Styled from "styled-components/native"; // Ensure you're using styled-components/native
const screen = Dimensions.get("window");

/**
 * `Animation` is a React functional component that renders a full-screen animation using Lottie.
 * The animation is meant to cover the entire screen, playing automatically in a loop.
 *
 * @returns The JSX elements to render the animation.
 */
const Animation = () => {
  const animation = useRef(null);
  useEffect(() => {
  }, []);

  return (
    <AnimatedContainer style={{ width: screen.width, height: screen.height }}>
      <LottieView
        source={require("../../assets/confetti.json")}
        style={{ width: '100%', height: '100%' }} // Use '100%' to cover the AnimatedContainer's dimensions
        autoPlay={true}
        loop={true}
        ref={animation}
      />
    </AnimatedContainer>
  );
};

export default Animation;

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
