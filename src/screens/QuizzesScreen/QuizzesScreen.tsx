// import React from "react";
// import { ScrollView } from "react-native";
// import styled from "styled-components";
//
// const QuizzesScreen  = () => {
//   return (
//     <Container>
//       <Text>QuizzesScreen</Text>
//     </Container>
//   );
// }
//
// export default QuizzesScreen ;
//
// //@ts-ignore
// const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;
//
// //@ts-ignore
// const Text = styled.Text``;

//
// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
//
// const quizzes = [
//   { id: '1', title: 'Quiz 1'},
//   { id: '2', title: 'Quiz 2' },
//   // ... add more quizzes as needed
// ];
//
// const QuizButton = ({ title, onPress }) => (
//   <TouchableOpacity style={styles.button} onPress={onPress}>
//     <Text style={styles.buttonText}>{title}</Text>
//   </TouchableOpacity>
// );
//
// const QuizzesScreen = () => {
//   const navigation = useNavigation();
//
//   return (
//     <View style={styles.container}>
//       {quizzes.map((quiz) => (
//         <QuizButton
//           key={quiz.id}
//           title={quiz.title}
//           icon={quiz.icon}
//           onPress={() =>  console.log("Hello")} //navigation.navigate('QuizDetailScreen', { quizId: quiz.id })}
//         />
//       ))}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   button: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     marginVertical: 10,
//     borderRadius: 50,
//     elevation: 3, // Only works on Android for shadow
//     // For iOS shadow:
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     alignItems: 'center',
//   },
//   icon: {
//     width: 50,
//     height: 50, // Adjust size accordingly
//     marginBottom: 10, // Space between icon and text
//   },
//   buttonText: {
//     fontSize: 18,
//   },
// });
//
// export default QuizzesScreen;


// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
//
// const QuizzesScreen = () => {
//   const quizzes = [
//     { id: '1', title: 'Quiz 1', iconName: 'ios-star-outline' },
//     { id: '2', title: 'Quiz 2', iconName: 'ios-star-half-outline' },
//     { id: '3', title: 'Quiz 3', iconName: 'ios-star' },
//     { id: '4', title: 'Quiz 4', iconName: 'ios-star-half' },
//     { id: '5', title: 'Quiz 5', iconName: 'ios-star-outline' },
//     // ... add more quizzes as needed
//   ];
//
//   const renderButton = (quiz, index) => {
//     const isEven = index % 2 === 0;
//     return (
//       <TouchableOpacity key={quiz.id} style={[styles.button, isEven ? null : styles.buttonOdd]}>
//         <Ionicons name={quiz.iconName} size={30} color="#000" />
//         <Text style={styles.buttonText}>{quiz.title}</Text>
//       </TouchableOpacity>
//     );
//   };
//
//   return (
//     <View style={styles.container}>
//       {quizzes.map(renderButton)}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     flexDirection: 'row',
//   },
//   button: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     margin: 10,
//     width: '40%', // Adjust the width as per your styling needs
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//     // For iOS shadow:
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   buttonOdd: {
//     alignSelf: 'flex-end',
//   },
//   buttonText: {
//     fontSize: 18,
//     marginTop: 8, // Space between icon and text
//   },
// });
//
// export default QuizzesScreen;

//
// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
//
// const QuizzesScreen = () => {
//   const quizzes = [
//     { id: '1', title: 'Quiz 1', iconName: 'ios-star-outline' },
//     { id: '2', title: 'Quiz 2', iconName: 'ios-star-half-outline' },
//     { id: '3', title: 'Quiz 3', iconName: 'ios-star' },
//     { id: '4', title: 'Quiz 4', iconName: 'ios-star-half' },
//     { id: '5', title: 'Quiz 5', iconName: 'ios-star-outline' },
//   ];
//
//   const renderButton = (quiz, index) => {
//     // Calculate offset for snake-like alignment
//     let additionalStyle = {};
//     if (index % 2 === 0) {
//       additionalStyle = {
//         // For even indices, place button a bit to the right (if not the first one)
//         marginRight: index === 0 ? 0 : 20,
//       };
//     } else {
//       additionalStyle = {
//         // For odd indices, place button a bit to the left
//         marginLeft: 20,
//       };
//     }
//
//
//     return (
//       <TouchableOpacity
//         key={quiz.id}
//         style={[styles.button, additionalStyle]}
//         onPress={() => console.log(`Quiz ${index + 1} pressed`)}
//       >
//         <Ionicons name={quiz.iconName} size={30} color="#000" />
//         <Text style={styles.buttonText}>{quiz.title}</Text>
//       </TouchableOpacity>
//     );
//   };
//
//   return (
//     <View style={styles.container}>
//       {quizzes.map(renderButton)}
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     alignItems: 'center', // This is removed to allow snake-like alignment
//     paddingHorizontal: 50, // This padding is to ensure there is space for the snake effect
//
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20, // Space between buttons vertically
//   },
//   button: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   buttonText: {
//     fontSize: 18,
//   },
//   // ... other styles you might have
// });
//
// export default QuizzesScreen;

import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import QuizDetailScreen from "../QuizDetailScreen";

const QuizzesScreen = () => {

  const navigation = useNavigation();

  const quizzes = [
    { id: '1', title: 'Functions', iconName: 'git-compare-outline' },
    { id: '2', title: 'Trigo', iconName: 'move-sharp' },
    { id: '3', title: 'Complex', iconName: 'extension-puzzle-outline' },
    { id: '4', title: 'Rationals', iconName: 'easel-outline' },
    { id: '5', title: 'Conics', iconName: 'construct-sharp' },
    { id: '6', title: 'Vectors', iconName: 'analytics-outline' },
    { id: '7', title: 'Matrix', iconName: 'apps-sharp' },
  ];

  //
  // @ts-ignore
  const renderButton = (quiz, index) => {
    // Calculate offset for snake-like alignment
    let additionalStyle = {};
    if (index % 2 === 0) {
      additionalStyle = {
        // For even indices, place button a bit to the right (if not the first one)
        marginRight: index === 0 ? 15 : 25,
      };
    } else {
      additionalStyle = {
        // For odd indices, place button a bit to the left
        marginLeft: 90,
      };
    }


    return (
      <TouchableOpacity
        key={quiz.id}
        style={[styles.button, additionalStyle]}
        // onPress={() => console.log(`Quiz ${index + 1} pressed`)}
        // @ts-ignore
        onPress={() => navigation.navigate('Quiz', { quizId: quiz.id })}
      >
        <Ionicons name={quiz.iconName} size={30} color="#000" />
        <Text style={styles.buttonText}>{quiz.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {quizzes.map(renderButton)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'flex-start', // Align items to the start of the screen
  //   alignItems: 'stretch', // Stretch items to fit the container
  //   paddingVertical: 20, // Padding at the top and bottom of the scroll view
  // },
  // button: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#f0f0f0',
  //   marginVertical: 10, // Reduced vertical space between the buttons
  //   // Same elevation and shadow styles as before
  //   elevation: 3,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  // },
  // buttonText: {
  //   fontSize: 18,
  // },

  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center', // This is removed to allow snake-like alignment
    paddingHorizontal: 50, // This padding is to ensure there is space for the snake effect

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20, // Space between buttons vertically
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
  },

});

export default QuizzesScreen;
