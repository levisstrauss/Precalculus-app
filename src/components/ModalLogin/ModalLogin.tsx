import React from "react";
import Styled from "styled-components";
import {
  TouchableOpacity,
  Keyboard,
  Pressable
} from "react-native";
import { BlurView } from "@react-native-community/blur";
import Success from "../Success";
import Loading from "../Loading";



class ModalLogin extends React.Component {
   state = {
     email: "",
     password: "",
     IconEmail: require("../../assets/icon-email.png"),
     IconPassword: require("../../assets/icon-password.png"),
     isSuccessful: true,
     isLoading: false
   }

   handleLogin = () => {
     console.log(this.state.email, this.state.password);
     this.setState({
       isLoading: false
     })
     setTimeout(() => {
       this.setState({
         isLoading: false,
         isSuccessful: true
       })
     }, 2000)
  }

  focusEmail = () => {
    this.setState({
      IconEmail:require("../../assets/icon-email-animated.gif"),
      IconPassword: require("../../assets/icon-password.png")
    })
  }

  focusPassword = () => {
    this.setState({
      IconEmail: require("../../assets/icon-email.png"),
      IconPassword: require("../../assets/icon-password-animated.gif")
    })
  }

  tapBackground = () => {
    Keyboard.dismiss();
  }
  render(){
    return (
      <Container>
        <Pressable onPress={this.tapBackground}>
          <BlurView
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
            blurType="dark"
            blurAmount={10}
          />
        </Pressable>
        <Modal>
          <Logo source={require("../../assets/logo-figma.png")}/>
          <Text>Start Learning. Access Pro content</Text>
          <TextInput
            // @ts-ignore
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <TextInput
            // @ts-ignore
            onChangeText={(password) => this.setState({ password })}
            placeholder="password"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <IconEmail source={this.state.IconEmail}/>
          <IconPassword source={this.state.IconPassword}/>
          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>Log In</ButtonText>
            </Button>
          </TouchableOpacity>
        </Modal>

        {/* // @ts-ignore*/}
        {/*//<Success isActive={this.state.isSuccessful} />*/}
        {/*<Loading isActive={this.state.isLoading}/>*/}
      </Container>
    )
  }
}

export default ModalLogin;
//
//

// import React, { useState} from "react";
// import Styled from "styled-components";
// import { TouchableOpacity, Keyboard, Pressable, Alert, Animated, Dimensions } from "react-native";
// import { BlurView } from "@react-native-community/blur";
// import Success from "../Success";
// import Loading from "../Loading";
//
//
// const screenHeight = Dimensions.get("window").height;
// const ModalLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [iconEmail, setIconEmail] = useState(require("../../assets/icon-email.png"));
//   const [iconPassword, setIconPassword] = useState(require("../../assets/icon-password.png"));
//   const [isSuccessful, setIsSuccessful] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [top, setTop] = useState(new Animated.Value(0));
//
//   const handleLogin = () => {
//     console.log(email, password);
//     setIsLoading(true);
//
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSuccessful(true);
//
//     }, 2000)
//     Alert.alert("Congrats", "You have logged in successfully");
//   };
//
//   const focusEmail = () => {
//     setIconEmail(require("../../assets/icon-email-animated.gif"));
//     setIconPassword(require("../../assets/icon-password.png"));
//   };
//
//   const focusPassword = () => {
//     setIconEmail(require("../../assets/icon-email.png"));
//     setIconPassword(require("../../assets/icon-password-animated.gif"));
//   };
//
//   const tapBackground = () => {
//     Keyboard.dismiss();
//   };
//   return (
//     <AnimatedContainer style={{ top: 0}}>
//       <Pressable onPress={tapBackground}>
//         <BlurView
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%"
//           }}
//           blurType="dark"
//           blurAmount={10}
//         />
//       </Pressable>
//       <Modal>
//         <Logo source={require("../../assets/logo-figma.png")} />
//         <Text>Start Learning Access Pro content</Text>
//         <TextInput
//           onChangeText={setEmail}
//           placeholder="Email"
//           keyboardType="email-address"
//           onFocus={focusEmail}
//         />
//         <TextInput
//           onChangeText={setPassword}
//           placeholder="password"
//           secureTextEntry={true}
//           onFocus={focusPassword}
//         />
//         <IconEmail source={iconEmail} />
//         <IconPassword source={iconPassword} />
//         <TouchableOpacity onPress={handleLogin}>
//           <Button>
//             <ButtonText>Log In</ButtonText>
//           </Button>
//         </TouchableOpacity>
//       </Modal>
//       <Success isActive={isSuccessful} />
//       <Loading isActive={isLoading} />
//     </AnimatedContainer>
//   );
// };
//
// export default ModalLogin;


// @ts-ignore
const Container = Styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;

//const AnimatedContainer = Animated.createAnimatedComponent(Container);
// @ts-ignore
const Modal = Styled.View`
  width: 335px;
  height: 370px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  align-items: center;
`;

// @ts-ignore
const Logo = Styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;

// @ts-ignore
const Text = Styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;

// @ts-ignore
const TextInput = Styled.TextInput`
  border: 1px solid #dbdfea;
  width: 295px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;

// @ts-ignore
const Button = Styled.View`
  background-color: #5263ff;
  width: 295px;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;
// @ts-ignore
const ButtonText = Styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;
// @ts-ignore
const IconEmail = Styled.Image` 
  width: 24px;
  height: 16px;
  position: absolute;
  top: 179px;
  left: 32px;
`;

// @ts-ignore
const IconPassword = Styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 239px;
  left: 35px;
`;
