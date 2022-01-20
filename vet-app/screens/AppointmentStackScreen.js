import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PetName from "./PetName";
import Date from "./Date";
import Reason from "./Reason";
import OwnerInfo from "./OwnerInfo";

const screenNames = {
    petName: "PetName",
    date: "Date",
    reason: "Reason",
    ownerInfo: "OwnerInfo"
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

            <AppointmentStack.Screen
                name={screenNames.ownerInfo}
                component={OwnerInfo}
                options={{headerShown: false}}/>

        </AppointmentStack.Navigator>
    );
}

export default AppointmentStackScreen;
