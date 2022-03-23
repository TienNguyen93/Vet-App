import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header} from "../components/Header";
import React from "react";

function ProfileScreen ({navigation}) {
    return (
        <View>
            <Header />
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Profile screen!</Text>
            </View>
        </View>

    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});