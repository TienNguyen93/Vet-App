import { StyleSheet, Text, View, TextInput,
         TouchableOpacity, Image, ScrollView, ImageBackground }
    from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";

import per1 from '../assets/per1.jpg'
import per2 from '../assets/per2.jpg'
import pet1 from '../assets/pet1.jpg'
import orange2 from '../assets/orange2.jpg'
import doctor from '../assets/doctor.jpg'
import vet1 from '../assets/vet1.png'
import vet2 from '../assets/vet2.png'
import vet3 from '../assets/vet3.png'

const Home = ({navigation}) => {
    function renderHeader() {
        return (
            <View style={{width: '100%',height: 250}}>
                <ImageBackground
                    source={orange2}
                    resizemode="cover"
                    style={{
                        flex: 1, alignItems: 'flex-start',
                        paddingTop: 45, padding: 25}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Image source={doctor}
                                   style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                            <Text style={[styles.text, {marginTop: 10}]}>Hello </Text>
                            <Text style={styles.text}>Dr. Carly Garcia</Text>
                            <Text style={{fontSize: 15, color: '#E5E4E2'}}>Have a nice day</Text>
                        </View>
                        <Image source={vet1}
                               style={{width: 140, height: 140, marginLeft: 90}}/>
                    </View>

                </ImageBackground>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1, marginTop: -25, borderTopLeftRadius: 12 * 2,
                        borderTopRightRadius: 12 * 2, backgroundColor: '#f8f8ff'
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center', padding: 5}}>
                    <Text style={styles.title}>New Booking</Text>

                    <View style={styles.cardTop}>
                        <View style={{flexDirection: 'row', height: 100}}>
                            <Image source={per1} style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>

                            <View style={{paddingLeft: 20}}>
                                <Text style={{letterSpacing: 0.1, fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                                    Danielle Kordan
                                </Text>

                                <Ionicons name="paw-outline" size={18} color="#E5E4E2">
                                    <Text style={{letterSpacing: 0.8, lineHeight: 30}}>
                                        {" "}Chamberlain
                                    </Text>
                                </Ionicons>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Icon name="calendar-month-outline" size={18} color="white">
                                        <Text style={{letterSpacing: 0.8, fontWeight: 'bold', lineHeight: 30}}>
                                            {" "}Feb 14{"   "}
                                        </Text>
                                    </Icon>

                                    <Icon name="clock-outline" size={18} color="white" style={{marginLeft: 10}}>
                                        <Text style={{letterSpacing: 0.8, lineHeight: 30, fontWeight: 'bold'}}>
                                            {" "}9:40-10:00
                                        </Text>
                                    </Icon>
                                </View>

                                {/*<Ionicons name="location-outline" size={18} color="white">*/}
                                {/*    <Text style={{letterSpacing: 0.8, lineHeight: 30, fontWeight: 'bold'}}>*/}
                                {/*        {" "}Main Street, 18*/}
                                {/*    </Text>*/}
                                {/*</Ionicons>*/}

                                {/*<Icon name="phone-outline" size={18} color="white">*/}
                                {/*    <Text style={{letterSpacing: 0.8, lineHeight: 30, fontWeight: 'bold'}}>*/}
                                {/*        {" "}+1 121 234 5678*/}
                                {/*    </Text>*/}
                                {/*</Icon>*/}
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 1, borderRadius: 15, width: 150,
                                    alignItems: 'center', padding: 15, borderColor: 'white'
                                }}>
                                <Text style={{
                                    letterSpacing: 0.8, fontSize: 15,
                                    fontWeight: 'bold', color: 'white'
                                }}>
                                    Reject
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    borderWidth: 1, borderRadius: 15, width: 150,
                                    alignItems: 'center', padding: 15, borderColor: 'white'
                                }}>
                                <Text style={{letterSpacing: 0.8, fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                                    Accept
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[styles.title, {marginTop: 20}]}>Upcoming consultation</Text>
                    <Text style={{fontSize: 15, alignSelf: 'flex-start', padding: 15, paddingTop: 1}}>9:40 AM</Text>

                    <View style={styles.cardBot}>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Image source={per2} style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                                <View style={{position: 'absolute', alignSelf: 'center', paddingTop: 65}}>
                                    <Image source={pet1} style={{width: 40, height: 40, borderRadius: 100 / 2,}}/>
                                </View>
                            </View>

                            <View style={{paddingLeft: 20}}>
                                <Text style={{letterSpacing: 0.1, fontSize: 18, color: 'black', fontWeight: 'bold'}}>
                                    Julia Olive
                                </Text>

                                <Ionicons name="paw-outline" size={18} color="#A9A9A9">
                                    <Text style={{letterSpacing: 0.8, lineHeight: 30}}>
                                        {" "}Chamberlain
                                    </Text>
                                </Ionicons>

                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Icon name="clock-outline" size={18} color="#eb762b">
                                        <Text style={{letterSpacing: 0.8, lineHeight: 30, fontWeight: 'bold', color: 'black'}}>
                                            {" "}9:40-10:00
                                        </Text>
                                    </Icon>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        // backgroundColor: '#f8f8ff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 15,
    },
    title: {
        fontSize: 18,
        alignSelf: 'flex-start',
        padding: 15,
        fontWeight: 'bold'
    },
    cardTop: {
        padding: 18,
        borderRadius: 23,
        backgroundColor: "#eb762b",
        elevation: 30,
    },
    cardBot: {
        height: 140,
        width: 370,
        padding: 18,
        borderRadius: 23,
        backgroundColor: "white",
        elevation: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    }
});