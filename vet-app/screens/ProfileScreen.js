import { StyleSheet, Text, View, TextInput, ScrollView, Image, Pressable} from 'react-native';
import {Header} from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import per1 from '../assets/per1.jpg'

function ProfileScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{
                            flex: 1, marginTop: -30, borderTopLeftRadius: 12 * 2,
                            borderTopRightRadius: 12 * 2, backgroundColor: '#f5f9fc'
                        }}>
                <View style={{borderTopLeftRadius: 12 * 2, borderTopRightRadius: 12 * 2,
                     alignItems: 'center', backgroundColor: 'white'}}>
                    <Image source={per1}
                           style={{width: 100, height: 100, borderRadius: 100 / 2}}/>
                    <Text style={{fontSize: 23, fontWeight: 'bold', letterSpacing: 0.5, marginTop: 20, marginBottom: 10}}>
                        Jessie Leanor
                    </Text>
                    <Text style={{fontSize: 18, color: 'grey', letterSpacing: 0.5, marginBottom: 10}}>
                        janedoe@gmail.com
                    </Text>

                    <Icon name="cellphone" size={25} color="#eb762b">
                        <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', alignItems: 'center'}}>
                            {" "}(123) 456-7890
                        </Text>
                    </Icon>

                    <View style={{justifyContent: 'flex-start', marginTop: 40}}>
                        <Pressable onPress={() => alert('notif click')} style={styles.btnStyle}>
                            <Text style={styles.btnText}>Notifications</Text>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                color="grey"
                                size={20}
                                style={{marginRight: 20}}
                                />
                        </Pressable>

                        <Pressable onPress={() => alert('payment click')} style={styles.btnStyle}>
                            <Text style={styles.btnText}>Payment</Text>
                            <Text style={[styles.btnText, {marginLeft: 120, color:'grey'}]}>Tap to add</Text>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                color="grey"
                                size={20}
                                style={{marginRight: 20}}
                                />
                        </Pressable>

                        <Pressable onPress={() => alert('faq click')} style={styles.btnStyle}>
                            <Text style={styles.btnText}>FAQ</Text>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                color="grey"
                                size={20}
                                style={{marginRight: 20}}
                                />
                        </Pressable>

                        <Pressable onPress={() => alert('pass click')} style={styles.btnStyle}>
                            <Text style={styles.btnText}>Change Password</Text>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                color="grey"
                                size={20}
                                style={{marginRight: 20}}
                            />
                        </Pressable>

                        <Pressable onPress={() => alert('help click')} style={styles.btnStyle}>
                        <Text style={styles.btnText}>Get Help</Text>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                color="grey"
                                size={20}
                                style={{marginRight: 20}}
                            />
                        </Pressable>
                    </View>

                </View>
                <View style={{
                    height: 150,
                    flexDirection: 'row',
                    backgroundColor: '#f5f9fc',
                    justifyContent: 'space-between',
                    padding: 20,
                    marginTop: 25
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>Terms & Conditions</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginRight: 65}}>Privacy Policy</Text>
                </View>
            </ScrollView>
        </View>

    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    btnStyle: {
        borderWidth: 0.7,
        width: 420,
        borderColor: '#d3d3d3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnText: {
        padding: 25,
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});