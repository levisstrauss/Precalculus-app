import { TextInput } from "react-native";
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
