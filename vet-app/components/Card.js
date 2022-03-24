import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';

import per1 from "../assets/per1.jpg";
import pet1 from "../assets/pet1.jpg";

function Card (props) {
    const available = props.available;
    const navigation = useNavigation();

    const message = () => {
        return (
            <View style={{marginTop: 15}}>
                <Text style={{color: '#40826D', alignSelf: 'flex-start', borderRadius: 15,
                    marginTop: -10, marginRight: -10, fontSize: 14, padding: 1, paddingBottom: 2,
                    paddingRight: 5, paddingLeft: 5, backgroundColor: '#ECFFDC'}}>
                    Available to chat
                </Text>
            </View>
        )
    }

    const online = () => {
        return (
            <Icon name="circle" size={25} color="#eb762b" style={{paddingLeft: 40}}/>
        )
    }

    return (
        <View style={styles.container}>
            {/*<Text style={{fontSize: 15, alignSelf: 'flex-start', padding: 15}}>*/}
            {/*    {props.startTime}*/}
            {/*</Text>*/}

            <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
                <View style={props.available ? styles.cardBotTrue : styles.cardBotFalse}>

                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Image source={props.image}
                                       style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                            </View>

                            <View style={{paddingLeft: 20}}>
                                <Text style={{letterSpacing: 0.1, fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                                    {props.name}
                                </Text>

                                <Text style={{letterSpacing: 0.8, lineHeight: 30, fontSize: 18}}>
                                    {props.clinic}
                                </Text>
                                {props.available ? message() : null}
                            </View>
                        </View>
                </View>
            </TouchableOpacity>

        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    cardTop: {
        padding: 18,
        borderRadius: 23,
        backgroundColor: "#eb762b",
        elevation: 30,
    },
    cardBotTrue: {
        height: 140,
        width: 370,
        padding: 18,
        borderRadius: 23,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#eb762b'
    },
    cardBotFalse: {
        height: 140,
        width: 370,
        padding: 18,
        borderRadius: 23,
        backgroundColor: "white",
    },
});