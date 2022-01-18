import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PetName from "./PetName";
import Date from "./Date";
import Reason from "./Reason";

const screenNames = {
    petName: "PetName",
    date: "Date",
    reason: "Reason"
}
const AppointmentStack = createNativeStackNavigator();

function AppointmentStackScreen({navigation, route}) {
    return (
        <AppointmentStack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal"
            }}
            initialRouteName={screenNames.petName}>

            <AppointmentStack.Screen
                name={screenNames.petName}
                component={PetName}
                options={{headerShown: false}}/>

            <AppointmentStack.Screen
                name={screenNames.date}
                component={Date}
                options={{headerShown: false}}/>

            <AppointmentStack.Screen
                name={screenNames.reason}
                component={Reason}
                options={{headerShown: false}}/>

        </AppointmentStack.Navigator>
    );
}

export default AppointmentStackScreen;
