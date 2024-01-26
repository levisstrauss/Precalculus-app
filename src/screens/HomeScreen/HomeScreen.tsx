import React from 'react';
import { Animated, Easing, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Text, Modal, ImageSourcePropType } from "react-native";
import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo/Logo";
import Card from "../../components/Card";
import Course from "../../components/Course";
import { connect } from "react-redux";
import Avatar from "../../components/Avatar";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import ModalLogin from "../../components/ModalLogin";

// const CardsQuery = gql`
//   {
//   cardsCollection{
//     items{
//       title
//       subtitle
//       image{
//         title
//         description
//         contentType
//         fileName
//         size
//         url
//         width
//         height
//       }
//       subtitle
//       caption
//       logo{
//         title
//         description
//         contentType
//         fileName
//         size
//         url
//         width
//         height
//       }
//     }
//   }
// }
// `;


const CardsQuery = gql`
    {
      cardsCollection{
      items{
        title
        subtitle
        image{
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo{
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
     }
    }
`;

// @ts-ignore
function mapStateToProps(state) {
  return { action: state.action };
}

// @ts-ignore
function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    // @ts-ignore
    if (this.props.action === "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        // @ts-ignore
        easing: Easing.in(),
        useNativeDriver: false
      }).start();

      Animated.spring(this.state.opacity, {
        useNativeDriver: false,
        toValue: 0.5
      }).start();
      // @ts-ignore
      StatusBar.setBarStyle("light-content", true);
    }

    // @ts-ignore
    if (this.props.action === "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        // @ts-ignore
        easing: Easing.in(),
        useNativeDriver: false
      }).start();
      Animated.spring(this.state.opacity, {
        useNativeDriver: false,
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              <TitleBar>
                <TouchableOpacity
                  // @ts-ignore
                  onPress={this.props.openMenu}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 20
                  }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>welcome back</Title>
                <Name>Zakaria</Name>
                <Ionicons
                  name="notifications"
                  size={25}
                  color="#4775f2"
                  style={{ position: "absolute", right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: "row",
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {Logos.map((logo, index) => (
                  <Logo
                    key={index}
                    image={logo.image}
                    text={logo.text}
                  />
                ))}
              </ScrollView>
              <SubTitle>{"Continue Learning".toUpperCase()}</SubTitle>
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <Query<any> query={CardsQuery}>
                  {({ loading, error, data }) => {
                    if (loading) return <Message>Loading...</Message>;
                    return (
                      <CardsContainer>
                        {data.cardsCollection.items.map((card: {
                          title: string;
                          image: ImageSourcePropType;
                          logo: string;
                          subtitle: string;
                          caption: string;
                          content: any;
                        }, index: React.Key | null | undefined) => (
                          <TouchableOpacity key={index} onPress={() =>{
                            // @ts-ignore
                            this.props.navigation.push("Section", {
                              section: card
                            });
                          }}>
                            <Card
                              title={card.title}
                              image={card.image}
                              logo={card.logo}
                              subtitle={card.subtitle}
                              caption={card.caption}
                              // @ts-ignore
                              content={card.content}
                            />
                          </TouchableOpacity>
                        ))}
                      </CardsContainer>
                    )
                  }}
                </Query>
              </ScrollView>
              <SubTitle>{"Popular Advanced Courses".toUpperCase()}</SubTitle>
              <CoursesContainer>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  name={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
              </CoursesContainer>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
        {/*<ModalLogin />*/}
      </RootView>
   );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

// @ts-ignore
const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;
// @ts-ignore
const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
// @ts-ignore
const CardsContainer = styled.View`
  flex-direction: row;
  padding-left: 10px;
`;
// @ts-ignore
const RootView = styled.View`
  background: black;
  flex: 1;
`;
// @ts-ignore
const SubTitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    margin-left: 20px;
    margin-top: 20px;
    text-transform: uppercase;
`;
// @ts-ignore
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;
// @ts-ignore
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
// @ts-ignore
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
// @ts-ignore
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
// @ts-ignore
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;


// // @ts-ignore
// const RootView = styled.View`
//     background: black;
//     flex: 1;
// `;
//
// // @ts-ignore
// const Message = styled.Text`
//   margin: 20px;
//   color: #b8bece;
//   font-size: 15px;
//   font-weight: 500;
// `;
//
// // @ts-ignore
// const SubTitle = styled.Text`
//     color: #b8bece;
//     font-weight: 600;
//     font-size: 15px;
//     margin-left: 20px;
//     margin-top: 20px;
//     text-transform: uppercase;
// `;
//
// // @ts-ignore
// const Container = styled.View`
//     flex: 1;
//     background-color: #f0f3f5;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
// `;
//
// const AnimatedContainer = Animated.createAnimatedComponent(Container);
//
// // @ts-ignore
// const Title = styled.Text`
//     font-size: 16px;
//     color: #b8bece;
//     font-weight: 500;
// `;
// // @ts-ignore
// const CardsContainer = styled.View`
//   flex-direction: row;
//   padding-left: 10px;
// `;
// // @ts-ignore
// const Name = styled.Text`
//     font-size: 20px;
//     color: #3c4560;
//     font-weight: bold;
// `;
//
// // @ts-ignore
// const TitleBar = styled.View`
//     width: 100%;
//     margin-top: 50px;
//     padding-left: 80px;
// `;

const Logos = [
  {
    image: require("../../assets/logo-framerx.png"),
    text: "Composite Func."
  },
  {
    image: require("../../assets/logo-figma.png"),
    text: "Complex N."
  }
  ,
  {
    image: require("../../assets/logo-studio.png"),
    text: "Trigonometry"
  }
  ,
  {
    image: require("../../assets/logo-react.png"),
    text: "Rational functions"
  },
  {
    image: require("../../assets/logo-swift.png"),
    text: "Conics"
  }
  ,
  {
    image: require("../../assets/logo-sketch.png"),
    text: "Vectors"
  },
  {
    image: require("../../assets/logo-sketch.png"),
    text: "Matrix"
  }

]


const cards = [
  {
    title: "React Native for Designers",
    image: require("../../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../../assets/logo-react.png")
  }
]


const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../../assets/background13.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../../assets/background11.jpg"),
    logo: require("../../assets/logo-react.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../../assets/background14.jpg"),
    logo: require("../../assets/logo-framerx.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../../assets/background6.jpg"),
    logo: require("../../assets/logo-figma.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Complete guide to designing a site using a collaborative design tool"
  }
]
