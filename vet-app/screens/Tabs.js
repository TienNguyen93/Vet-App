import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import AppointmentStackScreen from "./AppointmentStackScreen";
import ProfileScreen from "./ProfileScreen";

// screen options
const home = 'Home'
const appointment = 'Appointment'
const profile = 'Profile'

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName={home}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === home) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === appointment) {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                    } else if (rn === profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                // #572B29
                tabBarActiveTintColor: 'orange',
                tabBarLabelStyle: {paddingBottom: 10, fontSize: 12, fontWeight: 'bold'},
                tabBarStyle: {padding: 10, height: 65},
            })}
        >
            <Tab.Screen name={home} component={Home} options={{headerShown:false}}/>
            <Tab.Screen name={appointment} component={AppointmentStackScreen} options={{headerShown:false}} />
            <Tab.Screen name={profile} component={ProfileScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

export default Tabs;