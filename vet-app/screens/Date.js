import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Reason from "./Reason";

function Date ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20,
                justifyContent: 'center',
                marginRight: 'auto',
                padding: 30,
                }}>
                3. Set your appointment:
            </Text>

            <View style={styles.date}>
                <Text style={{fontSize: 20}}>Pick a day</Text>
            </View>

            <View style={styles.date}>
                <Text style={{fontSize: 20}}>Pick a time</Text>
            </View>

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                    style={{fontSize: 20}}
                    onPress={() => navigation.goBack()}>Go back</Text>

                <Text
                    style={{fontSize: 20}}
                    onPress={() => navigation.navigate("Reason")}>Continue</Text>
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