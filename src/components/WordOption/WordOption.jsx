import React from "react";
import { Pressable } from "react-native";
import MathText from "react-native-math-view/src/MathText";

/**
 * `WordOption` is a React functional component that displays a selectable word or phrase
 * formatted using LaTeX, typically used within an interactive math quiz or similar context.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text to be displayed, formatted in LaTeX.
 * @param {Function} props.onPress - The function to call when the component is pressed.
 * @param {boolean} props.isSelected - Indicates whether the option is currently selected.
 * @returns The JSX elements to render the WordOption.
 */
const  WordOption = ({text, onPress, isSelected}) =>{
  const displayText = `$$${text}$$`;
  return (
    <Pressable onPress={onPress}
      style={{
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 15,
        margin: 8,
        backgroundColor: isSelected ? "lightgrey" : "white",
      }}
    >
      <MathText value={displayText} style={{ color: isSelected ? "lightgray" : "black" }} />
    </Pressable>
  );
}


export default WordOption;
