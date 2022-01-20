import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Date from "./Date";

function PetName ({navigation}) {
    const [name, setName] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.petName}>
                <Text style={{fontSize: 20}}>1. What is your pet's name?</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your pet's name"/>
            </View>

            <View style={styles.petName}>
                <Text style={{fontSize: 20}}>2. Dog or Cat?</Text>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <View style={{flexDirection: 'column', marginLeft: 50}}>
                        <Icon onPress={() => alert("Cat pressed")}
                            name="cat" size={100} color="red" />
                    </View>

                    <View style={{flexDirection: 'column', marginLeft: 50}}>
                        <Icon onPress={() => alert("Dog pressed")}
                            name="dog" size={100} color="red" />
                    </View>
                </View>
            </View>

            <View style={{margin: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                    style={{backgroundColor: 'pink', }}
                    onPress={() => navigation.navigate('Date')}>
                    <Text>Next</Text>
                </TouchableOpacity>
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
        justifyContent:'center',
        marginRight: 'auto',
        paddingLeft: 30,
    }
});

export default PetName;