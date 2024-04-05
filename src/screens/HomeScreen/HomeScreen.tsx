import React from 'react';
import { Animated, Easing, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Menu from "../../components/Menu";
import Logo from "../../components/Logo/Logo";
import Card from "../../components/Card";
import Course from "../../components/Course";
import { connect } from "react-redux";
import Avatar from "../../components/Avatar";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { UserContext } from "../../UserContext/UserContext";

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

/**
 * `HomeScreen` is a class component in React that serves as the main entry point of the application.
 * It displays a collection of cards, courses, and a user interface for navigating to different parts of the app.
 * The component integrates with GraphQL to fetch data and uses Redux for state management.
 *
 * @extends React.Component
 */
class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };
  static contextType = UserContext;
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
        <Menu/>
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
                <Content>
                  <Title>Welcome back</Title>
                  <UserContext.Consumer>
                    {user => (
                      // @ts-ignore
                      <Name>{user ? user.username : 'Guest'}</Name>
                    )}
                  </UserContext.Consumer>
                </Content>
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
// @ts-ignore
const Content = styled.View`
  padding-left: 10px;
`;
const Logos = [
  {
    image: require("../../assets/logo/inverse.svg"),
    text: "Composite Func."
  },
  {
    image: require("../../assets/logo/complex.svg"),
    text: "Complex N."
  }
  ,
  {
    image: require("../../assets/logo/Trigo.svg"),
    text: "Trigonometry"
  }
  ,
  {
    image: require("../../assets/logo/rational.svg"),
    text: "Rational functions"
  },
  {
    image: require("../../assets/logo/Conics.svg"),
    text: "Conics"
  }
  ,
  {
    image: require("../../assets/logo/Vectors.svg"),
    text: "Vectors"
  },
  {
    image: require("../../assets/logo/matrix.svg"),
    text: "Matrix"
  }

]

const courses = [
  {
    title: "Probability and combinatorics",
    subtitle: "10 sections",
    image: require("../../assets/background13.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Learn probability and Combinatorics concepts"
  },
  {
    title: "Master Series",
    subtitle: "12 sections",
    image: require("../../assets/background11.jpg"),
    logo: require("../../assets/logo-studio.png"),
    author: "Zakaria",
    avatar: require("../../assets/avatar.jpg"),
    caption: "Learn fundamental series skills"
  },
]
