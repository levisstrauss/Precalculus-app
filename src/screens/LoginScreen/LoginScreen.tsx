import React from 'react';
import { StatusBar} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Loading from '../../components/Loading';
import Success from '../../components/Success';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirebaseApp } from '../../utils/firebaseHelper';
import Styled from "styled-components";
import { getDatabase, ref, set, get } from "firebase/database";

// Validation schema
const schema = yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

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
      const userId = userCredential.user.uid;

      // Get a reference to the user's data in the Realtime Database
      const db = getDatabase(getFirebaseApp());
      const userRef = ref(db, `users/${userId}`);

      // Fetch the user's data
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        const userData = snapshot.val();
        const username = userData.username;


        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigation.navigate('Feed', { username: username });
          reset(); // Reset form fields
          setFirebaseError(''); // Reset Firebase error message at the start of a new login attempt
        }, 1000);
      }else {
        console.error("User data not found for the user ID:", userId);
      }
      //navigation.navigate('Feed');
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
    return firebaseErrorMessages[errorCode] || 'An unexpected error occurred. Please try again.';
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
          <SubmitButton onPress={handleSubmit(handleLogin)}>
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
const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

// @ts-ignore
const SignupButtonText = Styled.Text`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
  margin-left: 5px;
`;

// @ts-ignore
const SignupButton = Styled.TouchableOpacity`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
`;
// @ts-ignore
const SignUpText = Styled.Text`
  font-size: 16px;
  color: grey;
`;
// @ts-ignore
const BackgroundImage = Styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

// @ts-ignore
const LightImages = Styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  position: absolute;
`;
// @ts-ignore
const ContentWrapper = Styled.View`
  justify-content: center;
  margin: 15px;
  margin-top: 110%;
`;
// @ts-ignore
const FormContainer = Styled.View`
  margin-bottom: 20px;
  justify-content: space-between;
`;
// @ts-ignore
const StyledInput = Styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: grey;
  border-radius: 5px;
  padding: 10px;
`;
// @ts-ignore
const SubmitButton = Styled.TouchableOpacity`
  background-color: #546bfb;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
`;
// @ts-ignore
const ButtonText = Styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;
// @ts-ignore
const ErrorMessage = Styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
// @ts-ignore
const Content = Styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

// @ts-ignore
const SignupContainer = Styled.View`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
