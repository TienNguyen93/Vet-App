import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Reason from "./Reason";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Date ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, justifyContent: 'center', marginRight: 'auto',
                padding: 30, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50,
                }}>
                3. Set your appointment:
            </Text>

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>Pick a day</Text>
            </View>

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>Pick a time</Text>
            </View>

            <View style={{margin: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{paddingRight: 50}}>
                    <TouchableOpacity
                        style={{backgroundColor: '#F91B17', borderRadius: 15, padding: 15}}
                        onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" color="white" size={30}/>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{backgroundColor: '#F91B17', borderRadius: 15, padding: 15}}
                        onPress={() => navigation.navigate('Reason')}>
                        <Icon name="arrow-right" color="white" size={30}/>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        flex: 1,
        marginRight: 'auto',
        paddingLeft: 30,
    }
});

export default Date;