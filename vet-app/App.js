import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Tabs from "./screens/Tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
          <Tabs />
      </NavigationContainer>
  );
}

export default App;


