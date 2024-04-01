import React, { useState, useRef} from "react";
import styled from "styled-components";
// @ts-ignore
import mascot from "../../assets/mascot.png";
import { TextInput, Animated } from "react-native";
import Button from "../Button";


/**
 * `OpenEndedQuestion` is a React functional component that presents an open-ended question to the user.
 * It allows the user to input a text answer, checks if the answer is correct, and provides visual feedback.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.question - The question object containing the text and answer.
 * @param {Function} props.onCorrect - Callback function that is called when the correct answer is provided.
 * @param {Function} props.onWrong - Callback function that is called when an incorrect answer is provided.
 * @returns The JSX elements to render the open-ended question.
 */
// @ts-ignore
const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");
  const scaleAnim = useRef(new Animated.Value(1)).current; // For correct answer scale animation
  const shakeAnim = useRef(new Animated.Value(0)).current;

 const animateMascot = (isCorrect: boolean) => {
  if (isCorrect) {
    // Correct answer scale animation
    Animated.timing(scaleAnim, {
      toValue: 1.5,
      duration: 500,
      useNativeDriver: true,
    }).start(() => scaleAnim.setValue(1)); // Reset scale after animation
  } else {
    // Wrong answer shake animation
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  }
};
  const onButtonPress = () => {
    const isCorrect = question.answer.toLowerCase().trim() === input.toLowerCase().trim();
    animateMascot(isCorrect);
    // Add a delay to allow the animation to be seen
    setTimeout(() => {
      if (isCorrect) {
        onCorrect();
      } else {
        onWrong();
      }
      setInput("");
    }, 1200);
  };

  return (
    <>
      <Title>This is a yes or no question</Title>
      <Row>
      <Animated.Image
          source={mascot}
          style={{
            width: "30%",
            aspectRatio: 3 / 4,
            marginRight: 10,
            transform: [
              { scale: scaleAnim },
              {
                translateX: shakeAnim.interpolate({
                  inputRange: [-1, 1],
                  outputRange: [-10, 10], // Adjust based on the desired shake amount
                }),
              },
            ],
          }}
        />
        <SentenceContainer>
          <Sentence>

            {question.text.split(' ').reduce((acc, word) => {
              const last = acc[acc.length - 1];
              if (last && (last + word).length > 35) {
                acc.push('\n' + word);
              } else {
                acc[acc.length - 1] = (last ? last + ' ' : '') + word;
              }
              return acc;
            }, ['']).join('')}
          </Sentence>
        </SentenceContainer>
      </Row>
      <TextInput
        style={{
          backgroundColor: "#ebebeb",
          alignSelf: "stretch",
          flex: 1,
          borderWidth: 1,
          borderColor: "lightgrey",
          borderRadius: 10,
          padding: 10,
          fontSize: 16,
        }}
        textAlignVertical="top"
        onChangeText={setInput}
        value={input}
        placeholder="Write your answer here"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={!input}/>
    </>
  );
};

export default OpenEndedQuestion;

// @ts-ignore
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

// @ts-ignore
const Row = styled.View`
    flex-direction: row;
    align-self: stretch;
    align-items: center;
    margin: 10px 10px 0;
`;

// @ts-ignore
const Image = styled.Image`
   width: 30%;
   aspect-ratio: 3/4;
   margin-right: 10px;
`;

// @ts-ignore
const SentenceContainer = styled.View`
  border-width: 1px;
  border-color: lightgrey;
  border-radius: 5px;
`;

// @ts-ignore
const Sentence = styled.Text`
  font-size: 16px;
`;

