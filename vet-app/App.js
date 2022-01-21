import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppointmentStackScreen from "./screens/AppointmentStackScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="AppointmentStackScreen"
              component={AppointmentStackScreen}
              options={{title: "Appointment" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;


