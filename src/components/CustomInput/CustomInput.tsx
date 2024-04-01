import Styled from "styled-components";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface CustomInputProps {
  control: Control;
  name: string;
  label: string;
  multiline?: boolean;
  rules?: object;
}

/**
 * `CustomInput` is a React functional component that renders an input field controlled by react-hook-form.
 * It supports text input, including multi-line text areas, and displays validation errors.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Control} props.control - The react-hook-form control object for managing form state.
 * @param {string} props.name - The name of the input field, which links it to the react-hook-form context.
 * @param {string} props.label - The text label displayed beside the input field.
 * @param {boolean} [props.multiline=false] - Determines if the input field should allow multi-line text input.
 * @param {object} [props.rules={}] - Validation rules for the input field defined by react-hook-form.
 * @returns The JSX elements to render the custom input field.
 */
const CustomInput = ({control, name, label, multiline = false, rules={}}: CustomInputProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules = {rules}
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
          return (
            <InputContainer>
              <Label>{label}:</Label>
              <Content>
                  <Input
                     autoCapitalize="none"
                     error={false}
                     multiline={multiline}
                     placeholder={label}
                     value={value}
                     onBlur={onBlur}
                     onChangeText={onChange}
                  />
                {error && <Text>{error.message || "Error"}</Text>}
              </Content>
            </InputContainer>
          )
        }}
      />
    </>
  );
}
export default CustomInput;


// @ts-ignore
const InputContainer = Styled.View`
  flex-direction: row;
  align-items: center;
  align-self: stretch;
`;

// @ts-ignore
const Label = Styled.Text`
  width: 75px;

`;

// @ts-ignore
const Content = Styled.View`
  flex: 1;
  padding-vertical: 14px;
`;

// @ts-ignore
const Input = Styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${(props: { error: any; }) => props.error ? '#c60f22' : '#9e9e9e'};
`;

// @ts-ignore
const Text = Styled.Text`
  font-size: 12px;
  color: #c60f22;
`;
