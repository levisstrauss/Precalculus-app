import React from "react";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";


interface MenuItemProps {
  icon: string;
  title: string;
  text: string;
}
const MenuItem = ({icon, title, text}: MenuItemProps) => (
  <Container>
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
const Container = styled.View`
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
