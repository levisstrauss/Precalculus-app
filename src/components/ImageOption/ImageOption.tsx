import React from "react";
import styled from "styled-components";
import {Pressable} from "react-native";
import PropTypes from "prop-types";

// @ts-ignore
const ImageOption = ({image, text, isSelected, onPress}) => {
  return (
      <Pressable
        onPress={onPress}
        style={{
          width: '48%',
          height: '48%',
          alignItems: 'center',
          backgroundColor: isSelected ? '#DDF4FE' : '#ff5396',
          borderColor: isSelected ? '#81D5FE' : '#40BEF7',
          borderWidth: 5,
          borderRadius: 10,
          marginBottom: 10,
        }}
        // @ts-ignore
        isSelected={isSelected}
      >
        <OptionImage source={{ uri: image }} />
        <OptionText isSelected={isSelected}>{text}</OptionText>
      </Pressable>
  );
}

ImageOption.prototype = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
}

ImageOption.defaultProps = {
  text: "Default",
  isSelected: false,
  onPress: () => {},
}

export default ImageOption;
// @ts-ignore
// const OptionContainer = styled.View`
//     border-witdh: 5px;
//     border-bottom-width: 4px;
//     border-radius: 10px;
//     width: 48%;
//     height: 48%;
//     padding: 10px;
//     align-items: center;
//     background-color: ${({ isSelected }) => isSelected ? '#DDF4FE' : '#ff5396'};
//     border-color: ${({ isSelected }) => isSelected ? '#81D5FE' : '#40BEF7'};
// `;

// @ts-ignore
const OptionImage = styled.Image`
  width: 100%;
  flex: 1;
  resize-mode: contain;
  border-radius: 15px;
`;

// @ts-ignore
const OptionText = styled.Text`
    font-weight: bold;
`;
// color: ${({ isSelected }) => isSelected ? '#40BEF7' : ''};
