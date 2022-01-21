import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import OwnerInfo from "./OwnerInfo";

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

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 20}} onPress={() => navigation.goBack()}>Go back</Text>

                <Text
                    style={{fontSize: 20}}
                    onPress={() => navigation.navigate("OwnerInfo")}>Continue</Text>
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