import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { ActivityIndicator, Alert } from "react-native";
import ImageMultipleChoiceQuestion from "../../components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "../../components/OpenEndedQuestion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import FillInTheBlank from "../../components/FillInTheBlank";
import { getDatabase, ref, runTransaction } from "firebase/database";
import { getAuth } from "firebase/auth";
import Animation from "../../components/Animation";
import { BlurView } from "@react-native-community/blur";
import Sound from 'react-native-sound';

interface QuizDetailRouteParams {
  quiz: {
    id: string;
    title: string;
    questions: any[];
  };
}

/**
 * `QuizDetailScreen` is a React functional component that displays the detailed view of a quiz,
 * including questions of different types (fill-in-the-blank, multiple choice with images, open-ended).
 * It manages quiz progress, including user responses, sounds for correct/incorrect answers,
 * and saving/loading progress with AsyncStorage.
 *
 * @returns The JSX elements to render the QuizDetail screen.
 */
const QuizDetailScreen = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{ params: QuizDetailRouteParams }, 'params'>>();
  const { quiz } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz?.questions[currentQuestionIndex] ?? {});
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  const [correctSound, setCorrectSound] = useState(null);
  const [wrongSound, setWrongSound] = useState(null);
  const [gameoverSound, setgameoverSound] =  useState(null);

  const quizToBadgeMapping = {
    '1': 'Function Master',
    '2': 'Trigonometry Wizard',
    '3': 'Complex Genius',
    '4': 'Rational Champion',
    '5': 'Conics Expert',
    '6': 'Vector Vanguard',
    '7': 'Matrix Master',
  };

  useEffect(() => {
    // Initialize the sound objects
    const loadSounds = () => {
      let correct = new Sound('correct.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Failed to load the correct sound', error);
        }
      });
      let wrong = new Sound('wrong.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Failed to load the wrong sound', error);
        }
      });

      let gameover = new Sound('gameovers.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Failed to load the wrong sound', error);
        }
      });

      //@ts-ignore
      setCorrectSound(correct);
      //@ts-ignore
      setWrongSound(wrong);
      //@ts-ignore
      setgameoverSound(gameover);
    };

    loadSounds();

    // Cleanup function to release the sounds
    return () => {
      //@ts-ignore
      correctSound?.release();
      //@ts-ignore
      wrongSound?.release();
      //@ts-ignore
      gameoverSound?.release();
    };
  }, []);


  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  useEffect(() => {
    if (quiz && currentQuestionIndex >= quiz.questions.length) {
      setLives(5); // Reset lives
      // Enable playback in silence mode
      Sound.setCategory('Playback');
      let whoosh = new Sound('clapping1.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // Loop the sound indefinitely
        whoosh.setNumberOfLoops(-1);
        whoosh.play();
      });

      setShowAnimation(true);
      setTimeout(() => {
        // Wait for the animation to play, then show the alert
        Alert.alert("Congratulations", "You've completed the quiz!", [
          {
            text: "OK",
            onPress: () => {
              // Stop and release the sound when the user presses "OK"
              whoosh.stop(() => {
                whoosh.release();
              });
              navigation.goBack(); // Navigate back or to another screen as needed
            }
          }
        ]);
      }, 2000);

      const db = getDatabase();
      const userId = getAuth().currentUser?.uid;

      if (userId) {
        const userRef = ref(db, `users/${userId}`);
        runTransaction(userRef, (currentData) => {
          if (currentData) {
            updateUserData(currentData, quiz.id);
          }
          return currentData;
        }).then(handleTransactionResponse)
          .catch(handleTransactionError);
      }
    } else if (quiz) {
      setCurrentQuestion(quiz.questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, quiz]);

  //@ts-ignore
  const updateUserData = (userData, quizId) => {
    userData.points = (userData.points || 0) + 10;
    userData.quizCompleted = (userData.quizCompleted || 0) + 1;


    //@ts-ignore
    const badgeToUnlock = quizToBadgeMapping[quizId];
    if (badgeToUnlock && (!userData.unlockedBadges ||
      !userData.unlockedBadges.includes(badgeToUnlock))) {
      if (!userData.unlockedBadges) {
        userData.unlockedBadges = [];
      }
      userData.unlockedBadges.push(badgeToUnlock);
    }

    const nextQuizId = String(parseInt(quizId) + 1);
    if (!userData.unlockedQuizzes.includes(nextQuizId)) {
      userData.unlockedQuizzes.push(nextQuizId);
    }
  };

  //@ts-ignore
  const handleTransactionResponse = (result) => {
    if (result.committed) {
      console.log("User progress updated successfully.");
      setCurrentQuestionIndex(0);
    } else {
      console.log("Transaction not committed.");
    }
  };
  //@ts-ignore
  const handleTransactionError = (error) => {
    console.error("Transaction failed: ", error);
  };


  const onCorrect = () => {
    //@ts-ignore
    correctSound.play((success) => {
      if (!success) {
        console.log('Playback failed for correct sound');
      }
    });
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    //@ts-ignore
    wrongSound.play((success) => {
      if (!success) {
        console.log('Playback failed for wrong sound');
      }
    });
    //@ts-ignore
    setLives(lives > 1 ? lives - 1 : triggerGameOver());
  };

  const restartGame = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const triggerGameOver = () => {
    //@ts-ignore
    gameoverSound.play((success) => {
      if (!success) {
        console.log('Playback failed for wrong sound');
      }
    });
    Alert.alert("Game Over", "Try again",
      [{ text: "Try again", onPress: restartGame }])
  };

  const saveData = async () => {
    await AsyncStorage.setItem("lives", String(lives));
    await AsyncStorage.setItem("currentQuestionIndex", String(currentQuestionIndex));
  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem("lives");
    const loadedQuestionIndex = await AsyncStorage.getItem("currentQuestionIndex");
    if (loadedLives) setLives(parseInt(loadedLives));
    if (loadedQuestionIndex) setCurrentQuestionIndex(parseInt(loadedQuestionIndex));
    setHasLoaded(true);
  };
  if (!hasLoaded) return <ActivityIndicator size="large" color="#0000ff" />;
  return (
    <Container>
      {showAnimation ? (
        <>
          <StyledBlurView
            blurType="light"
            blurAmount={5}
            reducedTransparencyFallbackColor="white"
          />
          <AnimationOverlay>
            <Animation />
          </AnimationOverlay>
        </>
      ) : (
        <>
          <Header
            progress={currentQuestionIndex / (quiz?.questions.length ?? 1)} lives={lives}
          />
          {
            currentQuestion.type === "FILL_IN_THE_BLANK" &&
            <FillInTheBlank
              question={currentQuestion}
              onCorrect={onCorrect}
              onWrong={onWrong}
            />
          }
          {
            currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" &&
            <ImageMultipleChoiceQuestion
              question={currentQuestion}
              onCorrect={onCorrect}
              onWrong={onWrong}
            />
          }
          {
            currentQuestion.type === "OPEN_ENDED" &&
            <OpenEndedQuestion
              question={currentQuestion}
              onCorrect={onCorrect}
              onWrong={onWrong}
            />
          }
        </>
      )}
    </Container>
  );
};

export default QuizDetailScreen;

//@ts-ignore
const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: white;
`;

//@ts-ignore
const StyledBlurView = Styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

//@ts-ignore
const AnimationOverlay = Styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
