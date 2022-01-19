import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Picker} from '@react-native-picker/picker';

function Reason ({navigation}) {
    const [selectedValue, setSelectedValue] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.reason}>
                <Text style={{fontSize: 20}}>4. What is the reason of visit?</Text>

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

            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 20}} onPress={() => navigation.goBack()}>Go back!</Text>
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