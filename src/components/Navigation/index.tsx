import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from "../../screens/HomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SectionScreen from "../../screens/SectionScreen";
import TabNavigator from "./TabNavigator.tsx";
import GettingStartedScreen from "../../screens/GettingStartedScreen";
import QuizDetailScreen from "../../screens/QuizDetailScreen";

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: true}}
        >
        <Stack.Screen
          name="Feed"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizDetailScreen}
          options={{headerShown: true}}
        />

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
