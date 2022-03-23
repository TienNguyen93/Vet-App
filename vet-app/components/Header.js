import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';
import orange2 from "../assets/orange2.jpg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const Header = () => {
    return (
        <View style={{width: '100%', height: 150}}>
            <ImageBackground source={orange2} resizemode="cover"
                             style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
            </ImageBackground>
        </View>
    )
}

