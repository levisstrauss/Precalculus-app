import React, { useState } from "react";
import Styled from "styled-components";
import Button from "../Button";
import WordOption from "../WordOption";
import MathText from "react-native-math-view/src/MathText";


/**
 * `FillInTheBlank` is a React functional component that presents a fill-in-the-blank style question.
 * Users select the correct word to complete the sentence, and feedback is given based on their selection.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.question - The question object containing the text, correct answer, and options.
 * @param {Function} props.onCorrect - Callback function that is called when the correct option is selected.
 * @param {Function} props.onWrong - Callback function that is called when an incorrect option is selected.
 * @returns The JSX elements to render the fill-in-the-blank question.
 */
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
  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

  function handleBlankPress() {
    if (selectedOption) {
      setSelectedOption(null);
    }
  }

  if (!question || !Array.isArray(question.options)) {
    return <Title>Error: No options provided</Title>;
  }

  const questionText = `$$${question.text}$$`;
  return (
    <>
      <Title>Complete the sentence</Title>
      <Row>
        <MathText value={questionText} />
        <Blank onPress={handleBlankPress}>
          {selectedOption && (
            <MathText value={`$$${selectedOption}$$`} />
          )}
        </Blank>
      </Row>
      <OptionsContainer>
        {question.options.map((option, index) => (
          <WordOption
            key={index}
            text={option}
            isSelected={selectedOption === option}
            onPress={() => handleOptionSelect(option)}
          />
        ))}
      </OptionsContainer>
      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={!selectedOption}
      />
    </>
  );
}

export default FillInTheBlank;

// @ts-ignore
const Title = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  align-self: flex-start;
`;

// @ts-ignore
const Row = Styled.View`
    flex-direction: column;
    align-self: flex-start;
    margin-vertical: 10px;
    margin-horizontal: 5px;
    height: 62px;
`;

// @ts-ignore
const Blank = Styled.View`
  border-bottom-width: 2px;
  border-color: grey;
  width: 110px;
  align-self: center;
  align-items: center;
  height: 50px;
  margin-top: 25px;
  justify-content: center;
`;

// @ts-ignore
const Text = Styled.Text`
  align-self: flex-end;
    font-size: 18px;
`;

// @ts-ignore
const OptionsContainer = Styled.View`
    flex: 1;
    align-items: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
