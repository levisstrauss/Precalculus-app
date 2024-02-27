import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { ActivityIndicator, Alert } from "react-native";
import ImageMultipleChoiceQuestion from "../../components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "../../components/OpenEndedQuestion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute, RouteProp } from '@react-navigation/native';
import Header from "../../components/Header";
import FillInTheBlank from "../../components/FillInTheBlank";
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import { runTransaction } from "firebase/database";

interface QuizDetailRouteParams {
  quiz: {
    id: string;
    title: string;
    questions: any[]; // Replace `any[]` with a more specific type according to your question structure
  };
}

const QuizDetailScreen = () => {
  const route = useRoute<RouteProp<{ params: QuizDetailRouteParams }, 'params'>>();
  const { quiz } = route.params; // Now TypeScript knows about the `quiz` property


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz?.questions[currentQuestionIndex] ?? {});
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  // useEffect(() => {
  //   if (currentQuestionIndex >= quiz.questions.length) {
  //     Alert.alert("You won the game!");
  //     setCurrentQuestionIndex(0);
  //   } else if(quiz){
  //     setCurrentQuestion(quiz.questions[currentQuestionIndex]);
  //   }
  // }, [currentQuestionIndex, quiz]);

  useEffect(() => {
    if (quiz && currentQuestionIndex >= quiz.questions.length) {
      // User has completed the quiz successfully
      Alert.alert("Congratulations", "You've completed the quiz!");

      const db = getDatabase();
      const userId = getAuth().currentUser?.uid;

      if (userId) {
        // Reference to user progress
        const userRef = ref(db, `users/${userId}`);

        // Perform a transaction to update user progress
        //@ts-ignore
        runTransaction(userRef, (currentData) => {
          if (currentData) {
            currentData.points = (currentData.points || 0) + 10; // Increment points by 10
            currentData.quizCompleted = (currentData.quizCompleted || 0) + 1; // Increment quizCompleted count

            // Unlock the next quiz by adding its id to unlockedQuizzes
            const nextQuizId = String(parseInt(quiz.id) + 1); // Assuming quiz ids are sequential numbers
            if (!currentData.unlockedQuizzes.includes(nextQuizId)) {
              currentData.unlockedQuizzes.push(nextQuizId);
            }
          }
          return currentData; // Return the modified data for the transaction
          //@ts-ignore
        }).then((result) => {
          if (result.committed) {
            console.log("User progress updated successfully.");
            // Reset the currentQuestionIndex or navigate the user as needed
            setCurrentQuestionIndex(0);
          } else {
            console.log("Transaction not committed.");
          }
          //@ts-ignore
        }).catch((error) => {
          console.error("Transaction failed: ", error);
        });
      }
    } else if (quiz) {
      // Set the current question
      setCurrentQuestion(quiz.questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, quiz]);


  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if(hasLoaded){
       saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const restartGame = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }
  const onWrong = () => {
    if (lives <= 1){
      Alert.alert("Game Over", "Try again", [
        {
          text: "Try again",
          onPress: restartGame,
        },
      ]);
    }else {
      Alert.alert("Wrong answer");
      setLives(lives - 1);
    }
  }

  const saveData = async () => {
    await AsyncStorage.setItem("lives", String(lives));
    await AsyncStorage.setItem("currentQuestionIndex", String(currentQuestionIndex));
  }

  const loadData = async () => {
     const loadedLives = await AsyncStorage.getItem("lives");
     if (loadedLives) {
       setLives(parseInt(loadedLives));
     }
     const currentQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex");
      if (currentQuestionIndex) {
        setCurrentQuestionIndex(parseInt(currentQuestionIndex));
      }

      setHasLoaded(true);
  };

  if (!hasLoaded) {
    return (<ActivityIndicator size="large" color="#0000ff" />);
  }

  return (
    <Container>
      <Header
        progress={currentQuestionIndex / (quiz?.questions.length ?? 1)}
        lives={lives}
      />
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
      )}

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          // @ts-ignore
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          // @ts-ignore
           question={currentQuestion}
           onCorrect={onCorrect}
           onWrong={onWrong}
        />
      ) : null}
    </Container>
  );
};

export default QuizDetailScreen;

// @ts-ignore
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: white;
`;

