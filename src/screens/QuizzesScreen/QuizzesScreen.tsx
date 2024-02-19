
import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

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
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center', // This is removed to allow snake-like alignment
    paddingHorizontal: 50, // This padding is to ensure there is space for the snake effect

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15, // Space between buttons vertically
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
