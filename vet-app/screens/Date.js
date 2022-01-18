import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Reason from "./Reason";

function Date ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Date here!</Text>
            <Text onPress={() => navigation.goBack()}>Go back!</Text>
            <Text onPress={() => navigation.navigate("Reason")}>Next screen!</Text>
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
});

export default Date;