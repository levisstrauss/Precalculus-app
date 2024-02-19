import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../Button";
import WordOption from "../WordOption";

const FillInTheBlank = ({question, onCorrect, onWrong}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  function onButtonPress() {
     if(selectedOption === question.correct) {
       onCorrect();
     } else {
       onWrong()
     }
    setSelectedOption(null);
  }
  return (
    <>
      <Title>Complete the sentence</Title>
      <Row>
        <Text>{question.text}</Text>
        <Blank>
          {selectedOption && (
          <WordOption
            text={selectedOption}
            onPress={() => setSelectedOption(null)}
          />
          )}
        </Blank>
      </Row>

      <OptionsContainer>
        {question.options.map((option) => (
          <WordOption
            text={option}
            isSelected={selectedOption === option}
            onPress={() => setSelectedOption(option)}
          />
        ))}
      </OptionsContainer>
      <Button text="Check" onPress={onButtonPress} disabled={!selectedOption}/>
    </>
  );
}

export default FillInTheBlank;

// @ts-ignore
const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

// @ts-ignore
const Row = styled.View`
    flex-direction: row;
    align-self: flex-start;
    margin-vertical: 10px;
    margin-horizontal: 25px;
    height: 62px;
`;

// @ts-ignore
const Blank = styled.View`
  border-bottom-width: 2px;
  border-color: grey;
  width: 100px;
`;

// @ts-ignore
const Text = styled.Text`
  align-self: flex-end;
    font-size: 18px;
`;

// @ts-ignore
const OptionsContainer = styled.View`
    flex: 1;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
