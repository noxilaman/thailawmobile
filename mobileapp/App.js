import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LawScreen from './src/screens/LawScreen';
import BookmarksScreen from './src/screens/BookmarksScreen';
import MoreappsScreen from './src/screens/MoreappsScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Law" component={LawScreen} />
        <Tab.Screen name="Bookmark" component={BookmarksScreen} />
        <Tab.Screen name="More Apps" component={MoreappsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}