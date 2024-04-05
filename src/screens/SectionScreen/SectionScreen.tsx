import React from "react";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, StatusBar, ScrollView } from "react-native";
import Markdown from 'react-native-showdown';

/**
 * `SectionScreen` is a React class component that renders the detailed view of a specific section.
 * This includes a cover image, title, subtitle, caption, and markdown content. It also provides
 * a close button to return to the previous screen.
 *
 * The content of the section is rendered using the `Markdown` component, which converts markdown text
 * into styled native components.
 */
class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }
  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  /**
   * Renders the section screen including the cover, markdown content, and a close button.
   *
   * @returns The JSX elements to render the Section screen.
   */
  render() {
    // @ts-ignore
    const { route } = this.props;
    // const { title, image, logo, subtitle, caption} = route.params;
    const { section } = route.params;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <StatusBar hidden />
          <Cover>
            <Image source={section.image} />
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </Cover>
          <TouchableOpacity onPress={() => {
            // @ts-ignore
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 20, right: 20 }}
          >
            <CloseView>
              <Ionicons
                name="close-circle-outline"
                size={36}
                color="#4775f2"
                style={{ marginTop: -2 }}
              />
            </CloseView>
          </TouchableOpacity>
          <Content>
            <Markdown markdown={section.content}
               pureCSS={htmlStyles}
               scalesPageToFit={false}
               scrollEnabled={false}
            />
          </Content>
        </Container>
      </ScrollView>
    )
  }
}

export default SectionScreen;
const htmlContent=`
   <h2>This is a title</h2>
   <p>This <strong>is</strong> a <a href="https://designcode.io">link</a></p>
   <img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg"  alt="background"/>
`;

const htmlStyles =`
      * {
      font-family: -apple-system, Roboto;
      margin: 0;
      padding: 0;
      font-size: 17px;
      font-weight: normal;
      color: #3c4560;
      line-height: 24px;
    }

    h2 {
      font-size: 20px;
      text-transform: uppercase;
      color: #b8bece;
      font-weight: 600;
      margin-top: 50px;
    }
  
    p {
      margin-top: 20px;
    }
  
    a {
      color: #4775f2;
      font-weight: 600;
      text-decoration: none;
    }
  
    strong {
      font-weight: 700;
    }

    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }

    pre {
      padding: 20px;
      background: #212C4F;
      overflow: hidden;
      word-wrap: break-word;
      border-radius: 10px;
      margin-top: 20px;
    }
    
    code {
      color: white;  
    }
`;

// @ts-ignore
const Content = styled.View`
  height: 1000px;
  padding: 12px;
`;
// @ts-ignore
const Container = styled.View`
  flex: 1;
`;
// @ts-ignore
const Cover = styled.View`
  height: 375px;
`;
// @ts-ignore
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
// @ts-ignore
const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
// @ts-ignore
const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;
// @ts-ignore
const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
// @ts-ignore
const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;
// @ts-ignore
const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
// @ts-ignore
const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;





