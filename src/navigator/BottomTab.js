import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/Home/HomeScreen';
import ChatScreen from '../screens/Main/Chat/ChatScreen';
import NotificationScreen from '../screens/Main/Notification/NotificationScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
