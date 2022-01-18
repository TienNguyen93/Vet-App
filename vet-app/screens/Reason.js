import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Reason ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Reason here!</Text>
            <Text onPress={() => navigation.goBack()}>Go back!</Text>
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

export default Reason;