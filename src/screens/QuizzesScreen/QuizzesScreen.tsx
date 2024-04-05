import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import Styled from 'styled-components';
import { Alert } from "react-native";
import Sound from 'react-native-sound';

// Assuming you've added a wrong.mp3 file in the correct location
const wrongSound = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Failed to load the wrong sound', error);
    return;
  }
  // Sound is loaded successfully
});

// Initialize the "click" sound
const correctSound = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('Failed to load the click sound', error);
    return;
  }
  // Sound is loaded successfully
});

/**
 * `QuizzesScreen` is a React functional component that displays a list of quizzes.
 * Each quiz can be clicked to navigate to its detailed view. The quizzes are fetched
 * from Firebase Realtime Database, and the user's progress determines which quizzes
 * are unlocked and can be accessed.
 *
 * Uses sound effects to give feedback when a quiz is clicked. A correct sound is played
 * when an unlocked quiz is selected, and a wrong sound is played when a locked quiz is selected.
 *
 * @returns The JSX elements to render the Quizzes screen.
 */
const QuizzesScreen = () => {
  const [quizzes, setQuizzes] = useState([])
  const [unlockedQuizzes, setUnlockedQuizzes] = useState(['1']); // Assume only the first quiz is unlocked by default
  const navigation = useNavigation();
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  useEffect(() => {
    const db = getDatabase();
    const quizzesRef = ref(db, 'Quizzes');

    onValue(quizzesRef, (snapshot) => {
      const quizzesData = snapshot.val();
      const quizzesList = quizzesData ? Object.keys(quizzesData).map(key => ({
        ...quizzesData[key],
        id: key
      })) : [];
      // @ts-ignore
      setQuizzes(quizzesList);
    });

    // Fetch user progress
    if (userId){
      const userRef = ref(db, `users/${userId}`);
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData && userData.unlockedQuizzes) {
          setUnlockedQuizzes(userData.unlockedQuizzes);
        }
      });
     }
    }, [userId]);

  /**
   * Creates a button for each quiz in the list. The button's appearance and behavior
   * change based on whether the quiz is unlocked.
   *
   * @param {Object} quiz - The quiz data object.
   * @returns The JSX elements to render the quiz button.
   */
  // @ts-ignore
  const renderButton = (quiz) => {
    const isUnlocked = unlockedQuizzes.includes(quiz.id);
    return (
      <QuizButton
        key={quiz.id}
        onPress={() => {
          if (isUnlocked) {
            correctSound.play((success) => {
              if (!success) {
                console.log('Playback failed for click sound');
              }
              // Navigate after sound plays successfully or even if it fails
              //@ts-ignore
              navigation.navigate("QuizDetail", { quiz: quiz });
            });
          } else {
            wrongSound.play((success) => {
              if (!success) {
                console.log('Playback failed for wrong sound');
              }
            });
            Alert.alert("Locked", "Complete previous quizzes to unlock this one.");
          }
        }}
        style={{
          backgroundColor: isUnlocked ? "#f0f0f0" : "#d3d3d3"
        }}
      >
        <Ionicons name={quiz.iconName} size={30} color="#000" />
        <ButtonText>{quiz.title}</ButtonText>
      </QuizButton>
    );
  };
  return (
    <Container key={quizzes.keys()}>
      {quizzes.map(renderButton)}
    </Container>
  );
  };

export default QuizzesScreen;

// @ts-ignore
const Container = Styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

// @ts-ignore
const QuizButton = Styled.TouchableOpacity`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
`;

// @ts-ignore
const ButtonText = Styled.Text`
  font-size: 18px;
  margin-top: 10px;
`;
