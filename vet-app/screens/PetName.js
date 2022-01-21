import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Date from "./Date";

function PetName ({navigation}) {
    const [name, setName] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.petName}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
                    1. What is your pet's name?</Text>
                    <TextInput
                        style={{padding: 10, borderWidth: 1,
                            borderRadius: 10, borderColor: '#D3D3D3',
                            color: 'black', fontSize: 15}}
                        onChangeText={setName}
                        value={name}
                        placeholder="Enter your pet's name"/>
            </View>

            <View style={styles.petName}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
                    2. Dog or Cat?</Text>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                    <View style={{flexDirection: 'column', marginLeft: 50}}>
                        <Icon onPress={() => alert("Dog pressed")}
                              name="dog" size={100} color="#F91B17" />
                    </View>

                    <View style={{flexDirection: 'column', marginLeft: 50}}>
                        <Icon onPress={() => alert("Cat pressed")}
                            name="cat" size={100} color="#F91B17" />
                    </View>

                </View>
            </View>

            <View style={{margin: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                    <TouchableOpacity
                        style={{backgroundColor: '#F91B17', borderRadius: 15, padding: 15}}
                        onPress={() => navigation.navigate('Date')}>
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
        color: 'orange'
    },
    petName: {
        flex: 1,
        justifyContent:'center',
        marginRight: 'auto',
        paddingLeft: 30,
    },
    btnText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 0.50,
    },
});

export default PetName;