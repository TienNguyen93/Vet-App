import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ProfileScreen from "./ProfileScreen";

function Reason ({navigation}) {
    const [selectedValue, setSelectedValue] = useState("")
    const [details, setDetails] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.reason}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
                    4. What is the reason of visit?
                </Text>

                <Picker
                    style={{ justifyContent: 'center'}}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)}>

                    <Picker.Item label="External Issues" value="exti"/>
                    <Picker.Item label="Internal Issues" value="inti"/>
                    <Picker.Item label="Wellness/Vaccine" value="wellv"/>
                </Picker>
            </View>

                <View style={styles.reason}>
                    <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
                        Details of visit reason: (Optional)
                    </Text>
                    <TextInput
                        style={{padding: 20, borderWidth: 1, borderRadius: 10,
                            borderColor: '#D3D3D3', fontSize: 15, color: 'black'}}
                        onChangeText={setDetails}
                        value={details}
                        placeholder="Describe details for the visit reason"/>
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
                        onPress={() => navigation.navigate('ProfileScreen')}>
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
    reason: {
        flex: 1,
        justifyContent:'center',
        marginRight: 'auto',
        paddingLeft: 30,
    }
});

export default Reason;