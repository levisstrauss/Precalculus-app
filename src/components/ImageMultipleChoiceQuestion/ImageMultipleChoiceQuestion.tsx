import React, { useState } from "react";
import ImageOption from "../ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";
import styled from "styled-components/native";

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

  return (
    <>
      <Title>{question.question}</Title>
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

// @ts-ignore
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: stretch;
`;


