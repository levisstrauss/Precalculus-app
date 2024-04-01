import React, { useState } from "react";
import ImageOption from "../ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import MathText from "react-native-math-view/src/MathText";


/**
 * `ImageMultipleChoiceQuestion` is a React functional component that renders an image-based multiple-choice question.
 * Users select one of the provided image options and submit their answer to check if it's correct or wrong.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.question - The question object containing the question text and options.
 * @param {Function} props.onCorrect - Callback function that is called when the correct option is selected.
 * @param {Function} props.onWrong - Callback function that is called when an incorrect option is selected.
 * @returns The JSX elements to render the image-based multiple-choice question.
 */
// @ts-ignore
const ImageMultipleChoiceQuestion = ({question, onCorrect, onWrong}) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    // @ts-ignore
    if (selected.correct) {
      //Alert.alert("Correct Answer");
      onCorrect();
      setSelected(null);
    }else {
      onWrong();
    }
  };

  const questionText = `$$${question.question}$$`;
  return (
    <>
      <MathText value={questionText}/>
      <OptionsContainer>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            // @ts-ignore
            isSelected={selected?.id == option.id}
            // @ts-ignore
            onPress={() => setSelected(option)}
          />
        ))}
      </OptionsContainer>
      <Button text="Check" onPress={onButtonPress} disabled={!selected}/>
    </>
  );
};

ImageMultipleChoiceQuestion.prototype = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,

}

export default ImageMultipleChoiceQuestion;

// @ts-ignore
const OptionsContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;


