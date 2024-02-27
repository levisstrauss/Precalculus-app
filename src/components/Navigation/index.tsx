import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SectionScreen from "../../screens/SectionScreen";
import TabNavigator from "./TabNavigator.tsx";
import GettingStartedScreen from "../../screens/GettingStartedScreen";
import QuizDetailScreen from "../../screens/QuizDetailScreen";
import SignupScreen from "../../screens/SignupScreen";
import LoginScreen from "../../screens/LoginScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import QuizzesScreen from "../../screens/QuizzesScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GettingStarted"
          screenOptions={{headerShown: true}}
        >
        <Stack.Screen
          name="GettingStarted"
          component={GettingStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Feed"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizzesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QuizDetail"
          component={QuizDetailScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: true}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{headerShown: true}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
