import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import AppointmentStackScreen from "./screens/AppointmentStackScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Appointment" component={AppointmentStackScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;


