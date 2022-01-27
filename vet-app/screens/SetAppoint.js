import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DateTimePicker from '@react-native-community/datetimepicker';

import Reason from "./Reason";

function SetAppoint ({navigation}) {
    const [date, setDate] = useState(new Date(Date.now()));

    const timeSlots = [
        {id: 1, time: "8:30"}, {id: 2, time: "9:00"}, {id: 3, time: "10:30"},
        {id: 4, time: "12:30"}, {id: 5, time: "1:00"}, {id: 6, time: "1:30"},
    ];

    const Item = ({ time }) => (
      <View>
          <TouchableOpacity>
              <Text>{time}</Text>
          </TouchableOpacity>
      </View>
    );

    const renderItem = ({ item }) => (
        <Item time={item.time} />
    );

    // const Pills = (props) => {
    //     // const times = props.times;
    //     // const listTime = times.map(({ time }) =>
    //     //     <Text>{time}</Text>)
    //
    //     return (
    //         // <View>
    //         //     <Text>Heloodffgfgooooohfghfghfdfdfgo</Text>
    //         //     <TouchableOpacity>{listTime}</TouchableOpacity>
    //         // </View>
    //         <View style={{padding: 10}}>
    //             <TouchableOpacity style={{borderWidth: 1}}>
    //                 <Text style={{fontSize: 18, padding: 10}}>{props.times}</Text>
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, justifyContent: 'center', marginRight: 'auto',
                padding: 30, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50,
                }}>
                3. Set your appointment:
            </Text>

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>Pick a day</Text>
            </View>

            {/*<DateTimePicker*/}
            {/*    value={date}/>*/}

            <View style={styles.date}>
                <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold'}}>Pick a time</Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {/*<Pills times={timeSlots}/>*/}
                    {/*<Pills times="11:00"/>*/}
                    {/*<Pills times="12:15"/>*/}
                    {/*<Pills times="2:45"/>*/}

                    <FlatList
                        data={timeSlots}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={4}/>
                </View>

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