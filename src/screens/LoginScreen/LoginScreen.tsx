import React from 'react';
import { StatusBar, Alert} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Loading from '../../components/Loading';
import Success from '../../components/Success';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseApp } from '../../utils/firebaseHelper';
import styled from "styled-components/native";
import { getDatabase, ref, get } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';


// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});


/**
 * `LoginScreen` is a React functional component that provides a user interface
 * for logging into the application. It validates user input against a schema using `yup`
 * and handles the authentication process with Firebase.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.navigation - The navigation prop used for navigating between screens.
 * @returns The JSX elements to render the Login screen.
 */
// @ts-ignore
const LoginScreen = ({ navigation }) => {
  const [firebaseError, setFirebaseError] = React.useState('');
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // @ts-ignore
  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const auth = getAuth(getFirebaseApp());
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Check if the user's email is verified
      if (!user.emailVerified) {
        Alert.alert("Please verify your email before logging in. Check your inbox for the verification email.");
        setIsLoading(false); // Stop the loading indicator
        return; // Exit the function early
      }

      const userId = user.uid;
      // Get a reference to the user's data in the Realtime Database
      const db = getDatabase(getFirebaseApp());
      const userRef = ref(db, `users/${userId}`);

      // Fetch the user's data
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        //const username = userData.username;
        setIsSuccess(true);
        setTimeout( async () => {
          setIsSuccess(false);
          navigation.navigate('Feed', { username: userData.username });
          reset(); // Reset form fields
          setFirebaseError(''); // Clear any previous error messages
        }, 1000);
      }else {
        console.error("User data not found for the user ID:", userId);
      }
    } catch (error) {
      //console.error('Login failed:', error);
      // @ts-ignore
      setFirebaseError(mapFirebaseErrorToMessage(error.code)); // Handle Firebase error
    } finally {
      setIsLoading(false);
    }
  };
  const firebaseErrorMessages = {
    'auth/invalid-email': 'The email address is badly formatted.',
    'auth/user-disabled': 'The user account has been disabled by an administrator.',
    'auth/user-not-found': 'No user found with this email.',
    'auth/wrong-password': 'The password is invalid or the user does not have a password.',
    // Add more error codes as needed
  };

  //@ts-ignore
  const mapFirebaseErrorToMessage = (errorCode) => {
    //@ts-ignore
    return firebaseErrorMessages[errorCode] || 'Wrong email or password. Please try again.';
  };

  const handleSignup = () => {
    navigation.push('Signup');
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <BackgroundImage source={require('../../assets/background.png')} />
      <LightImages>
        <Animated.Image
          style={{ height: 225, width: 90 }}
          source={require('../../assets/light.png')}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        />
        <Animated.Image
          style={{ height: 160, width: 65 }}
          source={require('../../assets/light.png')}
          entering={FadeInUp.delay(400).duration(1000).springify()}
        />
      </LightImages>
      <Animated.Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          position: "absolute",
          marginLeft: "35%",
          marginTop: "70%",
        }}
        entering={FadeInUp.duration(1000).springify()}
      >
        Login
      </Animated.Text>
      <ContentWrapper>
        <Content>
          <Animated.Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "black",
            }}
            entering={FadeInUp.duration(1000).springify()}
          >
            Pre-Calculus
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: 18,
              color: "black",
              textAlign: "center",
              marginVertical: 10,
            }}
            entering={FadeInUp.duration(1000).springify()}
          >
            Join the fun and start learning now!
          </Animated.Text>
        </Content>
        <FormContainer>
          {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your email"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
              />
            )}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          <SubmitButton onPress={handleSubmit(handleLogin)} testID="loginButton">
            <ButtonText>Login</ButtonText>
          </SubmitButton>
        </FormContainer>
        <SignupContainer>
          <Animated.View entering={FadeInUp.delay(500).duration(1000).springify()}>
            <SignUpText>Don't have an account yet?</SignUpText>
          </Animated.View>
          <SignupButton onPress={handleSignup}>
            <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()}>
              <SignupButtonText>Sign Up</SignupButtonText>
            </Animated.View>
          </SignupButton>
        </SignupContainer>
      </ContentWrapper>
      {isLoading && <Loading isActive={isLoading} />}
      {isSuccess && <Success isActive={isSuccess} />}
    </Container>
  );
};

export default LoginScreen;
// @ts-ignore
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// @ts-ignore
const SignupButtonText = styled.Text`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
  margin-left: 5px;
`;

// @ts-ignore
const SignupButton = styled.TouchableOpacity`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
`;

// @ts-ignore
const SignUpText = styled.Text`
  font-size: 16px;
  color: grey;
`;

// @ts-ignore
const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

// @ts-ignore
const LightImages = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  position: absolute;
`;

// @ts-ignore
const ContentWrapper = styled.View`
  justify-content: center;
  margin: 15px;
  margin-top: 110%;
`;

// @ts-ignore
const FormContainer = styled.View`
  margin-bottom: 20px;
  justify-content: space-between;
`;

// @ts-ignore
const StyledInput = styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: grey;
  border-radius: 5px;
  padding: 10px;
`;

// @ts-ignore
const SubmitButton = styled.TouchableOpacity`
  background-color: #546bfb;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
`;

// @ts-ignore
const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

// @ts-ignore
const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

// @ts-ignore
const Content = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

// @ts-ignore
const SignupContainer = styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
