import React from "react";
import styled from "styled-components";
import {Pressable} from "react-native";
import PropTypes from "prop-types";


/**
 * `ImageOption` is a React functional component that renders an image as a selectable option.
 * It changes its appearance based on whether it is selected, and it can trigger an action when pressed.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.image - The URL of the image to be displayed.
 * @param {boolean} [props.isSelected=false] - Indicates whether the option is currently selected.
 * @param {Function} [props.onPress] - The function to call when the image option is pressed.
 * @returns The JSX elements to render the ImageOption.
 */
// @ts-ignore
const ImageOption = ({image, isSelected, onPress}) => {
  return (
      <Pressable
        onPress={onPress}
        style={{
          width: '48%',
          height: '48%',
          alignItems: 'center',
          backgroundColor: isSelected ? '#DDF4FE' : '#ffffff',
          borderColor: isSelected ? '#81D5FE' : '#40BEF7',
          borderWidth: 5,
          borderRadius: 10,
          marginBottom: 10,
        }}
        // @ts-ignore
        isSelected={isSelected}
      >
        <OptionImage source={{ uri: image }} />
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
const OptionImage = styled.Image`
  width: 100%;
  flex: 1;
  resize-mode: contain;
  border-radius: 15px;
`;
