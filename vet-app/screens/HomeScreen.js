import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card, Button} from 'react-native-elements';

import per1 from '../photos/per1.jpg';

function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, alignSelf: 'flex-start', padding: 15, fontWeight: 'bold'}}>New Booking</Text>

            <View style={{padding: 23, borderRadius: 23, backgroundColor: "#eb762b"}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={per1} style={{width: 80, height: 80, borderRadius: 100/2, padding: 40}}/>

                    <View style={{lineHeight: 50, textAlign: 'justify', paddingLeft: 20}}>
                        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>Danielle Kordan</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Icon name="calendar-month" size={18} color="white">
                                <Text style={{lineHeight: 50, marginLeft: 50, fontWeight: 'bold'}}>
                                    {" "}Feb 14
                                </Text>
                            </Icon>

                            <Icon name="clock-outline" size={18} color="white" style={{marginLeft: 10}}>
                                <Text style={{lineHeight: 50, fontWeight: 'bold'}}>
                                    {" "}9:40-10:00
                                </Text>
                            </Icon>
                        </View>

                        <Ionicons name="location-outline" size={18} color="white">
                            <Text style={{lineHeight: 50, fontWeight: 'bold'}}>
                                {" "}Main Street, 18
                            </Text>
                        </Ionicons>

                        <Icon name="phone" size={18} color="white">
                            <Text  style={{lineHeight: 50, fontWeight: 'bold'}}>
                                {" "} +1 121 234 5678
                            </Text>
                        </Icon>
                    </View>
                </View>


                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity
                        style={{
                            borderWidth: 1, borderRadius: 15, width: 150, height: 50,
                            alignItems: 'center', padding: 15, borderColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Reject
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1, borderRadius: 15, width: 150, height: 50,
                            alignItems: 'center', padding: 15, borderColor: 'white'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
});