import React from "react";
import styled from "styled-components/native";
import { ImageSourcePropType, Dimensions } from "react-native";


interface CourseProps {
  subtitle: string;
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  avatar: ImageSourcePropType;
  caption: string;
  name: string;
  title: string;
}
const screenWidth = Dimensions.get("window").width;

// @ts-ignore
function getCourseWidth(screenWidth ) {
  var cardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    cardWidth = (screenWidth - 60) / 2;
  }
  if(screenWidth >= 1024) {
    cardWidth = (screenWidth - 80) / 3;
  }
  return cardWidth;
}

/**
 * `Course` is a React class component that displays a course card, including an image, logo, title,
 * subtitle, and other information. The component dynamically adjusts its width based on the screen size.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the course.
 * @param {string} props.subtitle - The subtitle of the course.
 * @param {ImageSourcePropType} props.image - The source of the course image.
 * @param {ImageSourcePropType} props.logo - The source of the course logo.
 * @param {ImageSourcePropType} props.avatar - The source of the instructor's avatar image.
 * @param {string} props.caption - A short description or caption for the course.
 * @param {string} props.name - The name of the instructor or author of the course.
 */
class Course extends React.Component<CourseProps> {
  state = {
    cardWidth: getCourseWidth(screenWidth)
  }
  componentDidMount() {
    Dimensions.addEventListener("change", this.adaptLayout);
  }
  // @ts-ignore
  adaptLayout = dimensions => {
    this.setState({
      cardWidth: getCourseWidth(dimensions.window.width)
    });
  }
  render() {
    const {caption, title, name, avatar, subtitle, image, logo} = this.props;
    return (
      <Container style={{ width: this.state.cardWidth }}>
        <Cover>
          <Image source={image} />
          <Logo source={logo} resizeMode="contain" />
          <Subtitle>{subtitle}</Subtitle>
          <Title>{title}</Title>
        </Cover>
        <Content>
          <Avatar source={avatar} />
          <Caption>{caption}</Caption>
          <Author>Taught by: {name}</Author>
        </Content>
      </Container>
    );
  }
}

export default Course;

// @ts-ignore
const Container = styled.View`
    width: 335px;
    height: 335px;
    background: white;
    margin: 10px 10px;
    border-radius: 14px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
    height: 260px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    justify-content: flex-end;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const Logo = styled.Image`
    width: 48px;
    height: 48px;
    position: absolute;
    top: 90px;
    left: 50%;
    margin-left: -24px;
`;

const Title = styled.Text`
    font-size: 24px;
    color: white;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 20px;
    margin-left: 20px;
    width: 170px;
`;

const Subtitle = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    margin-left: 20px;
`;

const Content = styled.View`
    padding-left: 62px;
    justify-content: center;
    height: 75px;
`;

const Avatar = styled.Image`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    left: 20px;
    border-radius: 16px;
`;

const Caption = styled.Text`
    font-size: 14px;
    color: #3c4560;
    font-weight: 500;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;

