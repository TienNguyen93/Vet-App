import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Tabs from "./screens/Tabs";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Home'}>
          <Stack.Screen
            name="Home"
            component={Tabs}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


