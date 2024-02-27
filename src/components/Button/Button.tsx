import React from 'react';
import { Pressable } from 'react-native';
import Styled from "styled-components";
import PropTypes from "prop-types";

// @ts-ignore
const Button = ({text, onPress, disabled}) => {
  return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
      style={{
        height: 50,
        marginVertical: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderBottomWidth: 5,
        backgroundColor: disabled ? 'lightgrey' : '#58CC02',
        borderColor: disabled ? 'grey' : '#57A600',
      }}
      >
        <Text>{text}</Text>
      </Pressable>
    )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

Button.defaultProps = {
  text: "Default",
  onPress: () => {},
}

export default Button;

// @ts-ignore
const Text = Styled.Text`
   font-size: 20px;
   color: white;
   font-weight: bold;
   
   border-color: white;
   border-bottom-width: 2px;
`;
