import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Date from "./Date";

function PetName ({navigation}) {
    const [name, setName] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.petName}>
                <Text style={{fontSize: 20}}>What is your pet's name?</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your pet's name"/>
            </View>

            <View style={styles.petName}>
                <Text style={{fontSize: 20}}>Dog or Cat?</Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="Dog or Cat"/>
            </View>

            <View style={styles.petName}>
                <Text onPress={() => navigation.navigate('Date')}>Press here!</Text>
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
    petName: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
});

export default PetName;