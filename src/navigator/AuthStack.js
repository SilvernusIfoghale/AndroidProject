import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LanguageScreen from '../screens/Auth/LanguageScreen';
import FirstScreen from '../screens/Auth/FirstScreen';
import SecondScreen from '../screens/Auth/SecondScreen';
import ThirdScreen from '../screens/Auth/ThirdScreen';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
    </Stack.Navigator>
  );
}
