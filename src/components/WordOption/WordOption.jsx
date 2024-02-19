import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";

const  WordOption = ({text, onPress, isSelected}) =>{
  return (
    <Pressable onPress={onPress}
      style={{
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 15,
        margin: 10,
        backgroundColor: isSelected ? "lightgrey" : "white",
      }}
    >
      <Text style={{ color: isSelected ? "lightgray" : "black", }}>
        {text}
      </Text>
    </Pressable>
  );
}


export default WordOption;


// @ts-ignore
const Root = styled.View`
    border-width: 2px;
    border-bottom-width: 4px;
    border-color: lightgrey;
    border-radius: 5px;
    padding: 10px;
    padding-horizontal: 15px;
    margin: 10px;
`;

// @ts-ignore
const Text = styled.Text`

`;
