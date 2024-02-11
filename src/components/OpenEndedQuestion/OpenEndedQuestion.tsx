import React, { useState } from "react";
import styled from "styled-components";
// @ts-ignore
import mascot from "../../assets/mascot.png";
import { TextInput } from "react-native";
import Button from "../Button";

// @ts-ignore
const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");

  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Title>Write down the correct answer</Title>
      <Row>
        <Image source={mascot} />
        <SentenceContainer>
          <Sentence>{question.text}</Sentence>
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

