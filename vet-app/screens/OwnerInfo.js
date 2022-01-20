import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function OwnerInfo ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>OwnerInfo screen!</Text>
            <Text style={{fontSize: 20}} onPress={() => navigation.goBack()}>Go back</Text>
        </View>
    )
}

export default OwnerInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ownerInfo: {
        flex: 1,
        justifyContent:'center',
        marginRight: 'auto',
        paddingLeft: 30,
    }
});