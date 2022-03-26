import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View, TextInput,
        TouchableOpacity, ScrollView, ImageBackground,
        Image, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CalendarStrip from 'react-native-calendar-strip';

import SetAppoint from "./SetAppoint";
import Card from '../components/Card'
import {Header} from "../components/Header";

import orange2 from "../assets/orange2.jpg";
import per2 from "../assets/per2.jpg";
import per3 from "../assets/per3.jpg";
import per4 from "../assets/per4.jpg";
import pet1 from "../assets/pet1.jpg"
import pet2 from "../assets/pet2.jpg"
import pet3 from "../assets/pet3.jpg"


const PetName = ({navigation}) => {
    const [name, setName] = useState(null);

    // const [active, setActive] = useState(0)
    // const [open, setOpen] = useState(0)
    // // const onLayout = useCallback(event => {})
    // const [close, setClose] = useState(0)
    // const [translate, setTranslate] = new Animated.Value(0)

    // const [state, setState] = [{
    //     active: null,
    //     close: null,
    //     open: null,
    //     translateX: new Animated.Value(0)
    // }]
    //
    // const onLayout = useCallback(event => {
    //     const {width, height} = event.nativeEvent.layout.x
    //     setState.close({width, height});
    // }, []);

    function renderHeader() {
        return (
            <View style={{width: '100%', height: 150}}>
                <ImageBackground source={orange2} resizemode="cover"
                    style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: '#E5E4E2', paddingRight: 80, fontSize: 20}}>Mar</Text>
                        <Text style={{color: 'white', paddingRight: 50, fontSize: 20, fontWeight: 'bold'}}>Appointments</Text>
                        <TouchableOpacity>
                            <Icon name="clipboard-text-outline" size={30} color="white" style={{paddingRight: 15}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="calendar-month-outline" size={30} color="white"/>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    function renderCalendar() {
        return (
        <View style={{flex: 1}}>
            <CalendarStrip
                scrollable
                scrollerPaging
                // calendarColor={'#3343CE'}
                // customDatesStyles
                daySelectionAnimation={{type: 'background', duration: 200,  highlightColor:'#eb762b'}}
                style={{height:"100%", width: 430, padding: 15, marginBottom: 20}}
                calendarHeaderStyle={{fontSize: 20, marginBottom: 20}}
                dateNumberStyle={{color: 'black', fontSize: 20}}
                dateNameStyle={{color: 'black', fontSize: 10}}
                highlightDateNumberStyle={{color: 'white'}}
                highlightDateNameStyle={{color: 'white'}}
                iconContainer={{flex: 0.1}}
            />
        </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{
                            flex: 1, marginTop: -30, borderTopLeftRadius: 12 * 2,
                            borderTopRightRadius: 12 * 2, backgroundColor: '#f5f9fc'
                        }}>
                <View style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
                    {renderCalendar()}

                    <View style={{flexDirection: 'row', marginTop: 10, borderWidth: 1, borderRadius: 20, width: 370, position: 'relative'}}>
                        <View style={{width: '50%', height: '100%', backgroundColor: '#eb762b', top: 0, left: 0, position: 'absolute', borderRadius: 20}} />
                            <TouchableOpacity
                                style={{flex: 1, borderRadius: 20, padding: 20,
                                    alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: 'black'}}>Open</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{flex: 1, borderRadius: 20, padding: 20,
                                    alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: 'black'}}>Close</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


export default PetName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
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
    cardBot: {
        height: 140,
        width: 370,
        padding: 18,
        borderRadius: 23,
        backgroundColor: "white",
        elevation: 10,
    },
});



// <View style={styles.petName}>
//     <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
//         1. What is your pet's name?</Text>
//     <TextInput
//         style={{padding: 10, borderWidth: 1,
//             borderRadius: 10, borderColor: '#D3D3D3',
//             color: 'black', fontSize: 15}}
//         onChangeText={setName}
//         value={name}
//         placeholder="Enter your pet's name"/>
// </View>
//
// <View style={styles.petName}>
//     <Text style={{fontSize: 20, color: '#572B29', fontWeight: 'bold', letterSpacing: 0.50}}>
//         2. Dog or Cat?</Text>
//     <View style={{flexDirection: 'row', paddingTop: 5}}>
//         <View style={{flexDirection: 'column', marginLeft: 50}}>
//             <Icon onPress={() => alert("Dog pressed")}
//                   name="dog" size={100} color="#F91B17" />
//         </View>
//
//         <View style={{flexDirection: 'column', marginLeft: 50}}>
//             <Icon onPress={() => alert("Cat pressed")}
//                   name="cat" size={100} color="#F91B17" />
//         </View>
//
//     </View>
// </View>
//
// <View style={{margin: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
//     <View>
//         <TouchableOpacity
//             style={{backgroundColor: '#F91B17', borderRadius: 15, padding: 15}}
//             onPress={() => navigation.navigate('SetAppoint')}>
//             <Icon name="arrow-right" color="white" size={30}/>
//         </TouchableOpacity>
//     </View>
// </View>