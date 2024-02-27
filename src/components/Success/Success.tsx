import React from "react";
import Styled from "styled-components";
import LottieView from "lottie-react-native";
import { Animated, Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;


class Success extends React.Component {

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

  // componentWillUnmount() {
  //     if (this.props.isActive) {
  //       Animated.timing(this.state.top, {
  //         toValue: 0, duration: 0,
  //         useNativeDriver: false
  //       }).start();
  //       Animated.timing(this.state.opacity, {
  //         toValue: 1,
  //         useNativeDriver: false
  //       }).start();
  //       // @ts-ignore
  //       this.animation.play();
  //
  //     } else {
  //       Animated.timing(this.state.top, {
  //         toValue: screenHeight,
  //         duration: 0,
  //         useNativeDriver: false
  //       }).start();
  //       Animated.timing(this.state.opacity, {
  //         toValue: 0,
  //         useNativeDriver: false
  //       }).start();
  //
  //       // @ts-ignore
  //       this.animation.loop = false;
  //     }
  // }


  render(){
    // @ts-ignore
    return (
      <AnimatedContainer style={
        {top: this.state.top, opacity: this.state.opacity}
      }>
         <LottieView
           source={require("../../assets/lottie-checked-done.json")}
           style={{width: 300,height: 300}}
           autoPlay={false}
           loop={false}
           ref={animation => {
             // @ts-ignore
             this.animation = animation;
           }}
         />
      </AnimatedContainer>
    )
  }
}

export default Success;


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


// import React, { useState, useEffect, useRef } from "react";
// import Styled from "styled-components";
// import LottieView from "lottie-react-native";
// import { Animated, Dimensions } from "react-native";
//
// const screenHeight = Dimensions.get("window").height;
//
// interface SuccessProps {
//   isActive: boolean;
// }
// const Success = ({ isActive }: SuccessProps) => {
//   const [top] = useState(new Animated.Value(0));
//   const [opacity] = useState(new Animated.Value(0));
//   const animation = useRef(null);
//
//   useEffect(() => {
//     if (isActive) {
//       Animated.timing(top, {
//         toValue: 0,
//         duration: 0,
//         useNativeDriver: false
//       }).start();
//       Animated.timing(opacity, {
//         toValue: 1,
//         useNativeDriver: false
//       }).start();
//
//       if (animation.current) {
//         // @ts-ignore
//         animation.current.play();
//       }
//     } else {
//       Animated.timing(top, {
//         toValue: screenHeight,
//         duration: 0,
//         useNativeDriver: false
//       }).start();
//       Animated.timing(opacity, {
//         toValue: 0,
//         useNativeDriver: false
//       }).start();
//
//       if (animation.current) {
//         // @ts-ignore
//         animation.current.loop = false;
//       }
//     }
//   }, [isActive, top, opacity]);
//
//   return (
//     <AnimatedContainer style={{ top, opacity }}>
//       <LottieView
//         source={require("../../assets/lottie-checked-done.json")}
//         style={{ width: 200, height: 200 }}
//         autoPlay={false}
//         loop={false}
//         ref={animation}
//       />
//     </AnimatedContainer>
//   );
// };
//
// export default Success;

// Styled components remain the same
// @ts-ignore
// const Container = Styled.View`
//   width: 100%;
//   height: 100%;
//   background: rgba(255, 255, 255, 0.9);
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;
//
// const AnimatedContainer = Animated.createAnimatedComponent(Container);
