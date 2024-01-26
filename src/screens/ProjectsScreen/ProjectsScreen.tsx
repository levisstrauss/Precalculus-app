// import React from "react";
// import Styled from "styled-components/native";
// import Project from "../../components/Project";
// import { Animated, PanResponder } from "react-native";
// import { connect } from "react-redux";
//
// function mapStateToProps(state: any) {
//   return { action: state.action };
// }
//
// function getNextIndex(index: number) {
//   const nextIndex = index + 1;
//   if (nextIndex > projects.length - 1) {
//       return 0;
//    }
//   return nextIndex
// }
//
// class ProjectsScreen extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       pan: new Animated.ValueXY(),
//       scale: new Animated.Value(0.9),
//       translateY: new Animated.Value(44),
//       thirdScale: new Animated.Value(0.8),
//       thirdTranslateY: new Animated.Value(-50),
//       index: 0,
//       opacity: new Animated.Value(0)
//     };
//     // @ts-ignore
//     this._panResponder = PanResponder.create({
//       // Grant access to the panResponder
//       onMoveShouldSetPanResponder: (event, gestureState) => {
//         // @ts-ignore
//         if (gestureState.dx === 0 && gestureState.dy === 0) {
//           return false;
//         } else {
//        // @ts-ignore
//           if (this.props.action === "openCard") {
//             return false;
//           } else {
//             return true;
//           }
//         }
//       },
//       onPanResponderGrant: () => {
//         // @ts-ignore
//         Animated.spring(this.state.scale, { toValue: 1, useNativeDriver: false }).start();
//         // @ts-ignore
//         Animated.spring(this.state.translateY, { toValue: 0, useNativeDriver: false }).start();
//         // @ts-ignore
//         Animated.spring(this.state.thirdScale, { toValue: 0.9, useNativeDriver: false }).start();
//         // @ts-ignore
//         Animated.timing(this.state.opacity, { toValue: 1, useNativeDriver: false }).start();
//
//         // @ts-ignore
//         Animated.timing(this.state.opacity, { toValue: 1, useNativeDriver: false }).start();
//       },
//
//       // Move the card
//       onPanResponderMove: Animated.event([
//           null, // @ts-ignore
//           { dx: this.state.pan.x, dy: this.state.pan.y}, // x,y are Animated.Value
//         ],
//         { useNativeDriver: false } // add this line
//       ),
//
//       // Drop the card
//       onPanResponderRelease: () => {
//         // @ts-ignore
//         const positionY = this.state.pan.y.__getValue(); // get the value of the animated value
//         // @ts-ignore
//         Animated.timing(this.state.opacity, { toValue: 0, useNativeDriver: false }).start();
//
//         // Dropping the card at certain position which 200
//         if (positionY > 200) {
//           // @ts-ignore
//           Animated.timing(this.state.pan, {
//             toValue: { x: 0, y: 1000 },
//             useNativeDriver: false
//           }).start(() => {
//             // @ts-ignore
//             this.state.pan.setValue({ x: 0, y: 0 });
//             // @ts-ignore
//             this.state.scale.setValue(0.9);
//             // @ts-ignore
//             this.state.translateY.setValue(44);
//             // @ts-ignore
//             this.state.thirdScale.setValue(0.8);
//             // @ts-ignore
//             this.state.thirdTranslateY.setValue(-50);
//             // @ts-ignore
//             this.setState({ index: getNextIndex(this.state.index),
//             })
//           });
//         } else { // Otherwise live the card at the original position
//           Animated.spring(
//             // @ts-ignore
//             this.state.pan,
//             { toValue: { x: 0, y: 0 }, useNativeDriver: false }
//           ).start(); // @ts-ignore
//           Animated.spring(this.state.scale, { toValue: 0.9, useNativeDriver: false }).start();
//           // @ts-ignore
//           Animated.spring(this.state.translateY, { toValue: 44, useNativeDriver: false }).start();
//           // @ts-ignore
//           Animated.spring(this.state.thirdScale, { toValue: 0.8, useNativeDriver: false }).start();
//           // @ts-ignore
//           Animated.spring(this.state.thirdTranslateY, { toValue: -50, useNativeDriver: false }).start();
//         }
//       }
//     })
//   }
//
//   render() {
//     return (
//       <Container>
//         <AnimatedMask style={{ opacity: this.state.opacity }}/>
//         <Animated.View style={{ transform: [
//             // @ts-ignore
//           { translateX: this.state.pan.x },
//             // @ts-ignore
//           { translateY: this.state.pan.y },
//           ]}}
//           // @ts-ignore
//           {...this._panResponder.panHandlers}
//         >
//           <Project
//             // @ts-ignore
//             title={projects[this.state.index].title}
//             // @ts-ignore
//             image={projects[this.state.index].image}
//             // @ts-ignore
//             author={projects[this.state.index].author}
//             // @ts-ignore
//             text={projects[this.state.index].text}
//             canOpen={true}
//           />
//         </Animated.View>
//         <Animated.View style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//           width: "100%",
//           height: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//           transform: [
//             // @ts-ignore
//             { scale: this.state.scale },
//             // @ts-ignore
//             { translateY: this.state.translateY }
//           ]
//         }}
//         >
//         <Project
//           // @ts-ignore
//           title={projects[getNextIndex(this.state.index)].title}
//           // @ts-ignore
//           image={projects[getNextIndex(this.state.index)].image}
//           // @ts-ignore
//           author={projects[getNextIndex(this.state.index)].author}
//           // @ts-ignore
//           text={projects[getNextIndex(this.state.index)].text}
//         />
//         </Animated.View>
//         <Animated.View style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: -3,
//             width: "100%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             transform: [
//               // @ts-ignore
//               { scale: this.state.thirdScale },
//               // @ts-ignore
//               { translateY: this.state.thirdTranslateY }
//             ]
//         }}
//         >
//           <Project
//             // @ts-ignore
//             title={projects[getNextIndex(this.state.index + 1)].title}
//             // @ts-ignore
//             image={projects[getNextIndex(this.state.index + 1)].image}
//             // @ts-ignore
//             author={projects[getNextIndex(this.state.index + 1)].author}
//             // @ts-ignore
//             text={projects[getNextIndex(this.state.index + 1)].text}
//           />
//         </Animated.View>
//       </Container>
//     )
//   }
// }
//
// export default connect(mapStateToProps)(ProjectsScreen);
//
// //
// const Mask = Styled.View`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0,0,0,0.25);
//   z-index: -3;
// `;
//
// const AnimatedMask = Animated.createAnimatedComponent(Mask);
//
// const Container = Styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #f0f3f5;
// `;
//
// const Text = Styled.Text``;
//
//
// const projects = [
//   {
//     title: "Price Tag",
//     image: require("../../assets/background5.jpg"),
//     author: "Some Author",
//     text: "Remember, these changes are part of Reacts ongoing improvements for performance and " +
//       "safety. It's always a good practice to keep your React applications updated Remember, these changes are part " +
//       "of Reacts ongoing improvements for performance and " +
//       "safety. It's always a good practice to keep your React applications updated"
//   },
//
//   {
//     title: "The DM App - Anonymous Chat",
//     image: require("../../assets/background6.jpg"),
//     author: "Some Author",
//     text: "Remember, these changes are part of Reacts ongoing improvements for performance and " +
//       "safety. It's always a good practice to keep your React applications updated"
//   },
//   {
//     title: "Military",
//     image: require("../../assets/background7.jpg"),
//     author: "Some Author",
//     text: "Remember, these changes are part of Reacts ongoing improvements for performance and " +
//       "safety. It's always a good practice to keep your React applications updated"
//   }
// ]
