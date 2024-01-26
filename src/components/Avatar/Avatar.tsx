import React from "react";
import Styled from "styled-components/native";

class Avatar extends React.Component {
  state = {
    photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg"
  }

  render() {
    return <Image source={{uri: this.state.photo}}/>;
  }
}

export default Avatar;

const Image = Styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
