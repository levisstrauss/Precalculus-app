import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirebaseApp } from '../../utils/firebaseHelper';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components/native';
import Loading from '../../components/Loading';
import Success from '../../components/Success';
// Validation schema
const schema = yup.object({
  username: yup.string().required('Username is required').min(6, 'Username must be at least 6 characters long'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords do not match'),
});

/**
 * `SignupScreen` is a React functional component that provides a user interface for registering a new user.
 * It uses Firebase Authentication for user creation and also writes additional user data to Firebase Realtime Database.
 * The form handling and validation are managed by `react-hook-form` and `yup`.
 *
 * @param {Object} props - The props passed to the component.
 * @param {Object} props.navigation - The navigation prop used for navigating between screens.
 * @returns The JSX elements to render the Signup screen.
 */
//@ts-ignore
const SignupScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [firebaseError, setFirebaseError] = React.useState('');
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  //@ts-ignore
  const handleSignup = async (data) => {
    setIsLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      // Send verification email
      sendEmailVerification(userCredential.user)
        .then(() => {
          console.log("Verification email sent.");
        })
        .catch((error) => {
          console.error("Error sending verification email: ", error);
        });


      const db = getDatabase(getFirebaseApp());
      await set(ref(db, 'users/' + userCredential.user.uid), {
        username: data.username,
        unlockedQuizzes: ["1"],
        points: 0,
        quizCompleted: 0,
        city: "City",
        state: "State",
        unlockedBadges: [],
        createdAt: new Date().toISOString(),
        bio: "Something about yourself...",
        profileImageUrl: 'https://cl.ly/55da82beb939/download/avatar-default.jpg',
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigation.navigate('Login');
        reset(); // Reset form fields
        setFirebaseError(''); // Reset a Firebase error message at the start of a new signup attempt
      }, 2000);

   } catch (error) {
     console.error('Signup failed:', error);
      //@ts-ignore
      setFirebaseError(mapFirebaseErrorToMessage(error.message)); // Set the Firebase error message for display
   } finally {
      setIsLoading(false);
   }
  };
  const firebaseErrorMessages = {
    'auth/invalid-email': 'The email address is badly formatted.',
    'auth/user-disabled': 'The user account has been disabled by an administrator.',
    'auth/user-not-found': 'No user found with this email.',
    'auth/wrong-password': 'The password is invalid or the user does not have a password.',
    'auth/email-already-in-use': 'The email address is already in use by another account.',
    'auth/operation-not-allowed': 'Password sign-in is disabled for this project.',
    'auth/weak-password': 'The password must be 6 characters long or more.',
    'auth/too-many-requests': 'We have blocked all requests from this device due to unusual activity. Try again later.',
    'auth/username-already-in-use': 'The username is already in use by another account.',
  };
  //@ts-ignore
  const mapFirebaseErrorToMessage = (errorCode) => {
    //@ts-ignore
    return firebaseErrorMessages[errorCode];
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <BackgroundImage source={require("../../assets/background.png")} />
      <LightImages>
        <Animated.Image
          style={{ height: 225, width: 90 }}
          source={require("../../assets/light.png")}
          entering={FadeInUp.delay(200).duration(1000).springify()}
        />
        <Animated.Image
          style={{ height: 160, width: 65 }}
          source={require("../../assets/light.png")}
          entering={FadeInUp.delay(400).duration(1000).springify()}
        />
      </LightImages>
      <ContentWrapper>
        <Content>
          <Animated.Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: "black",
              marginTop: 20,
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
              marginVertical: 5,
            }}
            entering={FadeInUp.duration(1000).springify()}
          >
            Sign up and start learning now!
          </Animated.Text>
        </Content>
        <FormContainer>
          {firebaseError && <ErrorMessage>{firebaseError}</ErrorMessage>}
          <Controller
            name="username"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Username"
                autoCapitalize="none"
              />
            )}
          />
          {errors.username &&
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          }
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email Address"
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
                secureTextEntry={true}
              />
            )}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Repeat Password"
                secureTextEntry={true}
              />
            )}
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
        </FormContainer>
        <SubmitButton onPress={handleSubmit(handleSignup)}>
          <ButtonText>Sign Up</ButtonText>
        </SubmitButton>
        <SignupContainer>
          <SignUpText>Already have an account then - </SignUpText>
          <SignupButton onPress={() => navigation.navigate('Login')}>
            <SignupButtonText>Log In</SignupButtonText>
          </SignupButton>
        </SignupContainer>
      </ContentWrapper>
      {isLoading && <Loading isActive={isLoading} />}
      {isSuccess && <Success isActive={isSuccess} />}
    </Container>
  );
};

export default SignupScreen;


// @ts-ignore
const Container = styled.View`
  flex: 1;
  background-color: white;
`;


// @ts-ignore
const ContentWrapper = styled.View`
  justify-content: center;
  margin: 15px;
  margin-top: 95%;

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
const Content = styled.View`
  align-items: center;
  margin-bottom: 15px;
`;

// @ts-ignore
const FormContainer = styled.View`
     margin-bottom: 10px;

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
`;

// @ts-ignore
const SignupContainer = styled.View`
  margin-top: 15px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

// @ts-ignore
const SignUpText = styled.Text`
  font-size: 16px;
  color: grey;
`;

// @ts-ignore
const SignupButton = styled.TouchableOpacity`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
`;

// @ts-ignore
const SignupButtonText = styled.Text`
  font-size: 18px;
  color: #546bfb;
  font-weight: bold;
  margin-left: 5px;
`;

// @ts-ignore
const ErrorMessage = styled.Text`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;


