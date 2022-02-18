import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Calendar} from "../components/Calendar";

import Reason from "./Reason";

function SetAppoint ({navigation}) {
    const [date, setDate] = useState(new Date(Date.now()));

    const timeSlots = [
        {id: 1, time: "08:30"}, {id: 2, time: "09:00"}, {id: 3, time: "10:30"},
        {id: 4, time: "12:30"}, {id: 5, time: "13:00"}, {id: 6, time: "13:30"},
        {id: 7, time: "15:15"}, {id: 8, time: "16:00"}, {id: 9, time: "17:20"},
    ];

    const Item = ({ time }) => (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginRight: 5}}>
          <TouchableOpacity style={{borderWidth: 1, borderRadius: 10}}>
              <Text style={{fontSize: 16, padding: 10, fontWeight: 'bold'}}>{time}</Text>
          </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item time={item.time} />
    );

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 20, justifyContent: 'center', marginRight: 'auto',
                padding: 30, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50,
                }}>
                3. Set your appointment:
            </Text>

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>
                    Pick a day
                </Text>
            </View>

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>Pick a time</Text>
                    <FlatList
                        key={""}
                        data={timeSlots}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={5}/>
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
                        onPress={() => navigation.navigate('Reason')}>
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
    date: {
        flex: 1,
        marginRight: 'auto',
        paddingLeft: 30,
    }
});

export default SetAppoint;