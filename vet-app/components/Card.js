import React, { useState } from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";

import per1 from "../assets/per1.jpg";
import pet1 from "../assets/pet1.jpg";

function Card (props) {
    const isClick = props.isClick;

    const message = () => {
        return (
            <Text style={{color: 'white', alignSelf: 'flex-end', borderRadius: 15,
                marginTop: -10, marginRight: -10, fontSize: 12, padding: 1, paddingBottom: 2,
                paddingRight: 5, paddingLeft: 5, backgroundColor: '#eb762b'}}>
                Waiting Approval
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15, alignSelf: 'flex-start', padding: 15}}>
                {props.startTime}
            </Text>

            <TouchableOpacity>
                <View style={props.isClick ? styles.cardBotTrue : styles.cardBotFalse}>
                        {props.isClick ? message() : null}
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Image source={props.pic1}
                                       style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                                <View style={{position: 'absolute', alignSelf: 'center', paddingTop: 65}}>
                                    <Image source={props.pic2} style={{width: 40, height: 40, borderRadius: 100 / 2,}}/>
                                </View>
                            </View>

                            <View style={{paddingLeft: 20}}>

                                <Text style={{letterSpacing: 0.1, fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                                    {props.name}
                                </Text>

                                <Ionicons name="paw-outline" size={18} color="#A9A9A9">
                                    <Text style={{letterSpacing: 0.8, lineHeight: 30}}>
                                        {" "}{props.petName}
                                    </Text>
                                </Ionicons>

                                {/*<Text>{props.date}</Text>*/}

                                <Icon name="clock-outline" size={18} color="#eb762b">
                                    <Text style={{
                                        letterSpacing: 0.8,
                                        lineHeight: 30,
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }}>
                                        {" "}{props.time}
                                    </Text>
                                </Icon>

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