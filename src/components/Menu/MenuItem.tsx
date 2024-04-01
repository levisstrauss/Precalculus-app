import React from "react";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
interface MenuItemProps {
  icon: string;
  title: string;
  text: string;
}


/**
 * `MenuItem` is a React functional component that displays an interactive menu item.
 * It consists of an icon, a title, and a short text. When pressed, it triggers an action defined by the `onPress` prop.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.icon - The name of the icon to display, which corresponds to an Ionicons icon name.
 * @param {string} props.title - The title of the menu item.
 * @param {string} props.text - A short description or additional text for the menu item.
 * @param {Function} [props.onPress] - The function to call when the menu item is pressed.
 * @returns The JSX elements to render the MenuItem.
 */
// @ts-ignore
const MenuItem = ({icon, title, text, onPress}: MenuItemProps) => (
  <Container onPress={onPress}>
    <IconView>
      <Ionicons name={icon} size={24} color="#546bfb" />
    </IconView>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

// @ts-ignore
const Container = styled(TouchableOpacity)`
  flex-direction: row;
  margin: 15px 0;
`;
// @ts-ignore
const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
// @ts-ignore
const Content = styled.View`
  padding-left: 20px;
`;
// @ts-ignore
const Title = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
// @ts-ignore
const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
