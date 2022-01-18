import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Date ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Date here!</Text>
            <Text onPress={() => navigation.goBack()}>Press here!</Text>
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