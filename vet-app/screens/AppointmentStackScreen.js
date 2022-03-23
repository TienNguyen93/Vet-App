import * as React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, ScrollView, Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PetName from "./PetName";
import SetAppoint from "./SetAppoint";
import Reason from "./Reason";
import orange2 from "../assets/orange2.jpg";
import pet1 from "../assets/pet1.jpg"
import per2 from "../assets/per2.jpg"


const screenNames = {
    petName: "PetName",
    setAppoint: "SetAppoint",
    reason: "Reason",
}

function ModalScreen({navigation}) {
    return (
        <View style={{flex: 1, width: '100%', backgroundColor: '#f5f9fc'}}>
            <ImageBackground source={orange2} resizemode="cover"
                             style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={30} color="white" style={{paddingRight: 300}}/>
                </TouchableOpacity>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}
                        style={{
                            flex: 1, marginTop: -30, borderTopLeftRadius: 12 * 2,
                            borderTopRightRadius: 12 * 2, backgroundColor: '#f5f9fc'
                        }}>
                <View style={{backgroundColor: 'white', marginBottom: 20, flex: 1,
                    borderTopLeftRadius: 12 * 2, borderTopRightRadius: 12 * 2}}>
                    <Image source={per2}
                           style={{width: 130, height: 130, borderRadius: 200 / 2,
                               alignSelf: 'center'}}/>
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>Julia Wimmerlin</Text>
                </View>
                <View style={{alignSelf: 'flex-start', padding: 20}}>
                    <View>
                        <View style={[styles.cardTop, {marginBottom: 20}]}>
                            <View style={{flexDirection: 'row'}}>
                                <View>
                                    <Image source={pet1}
                                           style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                                </View>
                                <View style={{paddingLeft: 20}}>
                                    <Text style={{marginTop: 15, letterSpacing: 0.1, fontSize: 18, color: 'white', fontWeight: 'bold'}}>
                                        Chamberlain
                                    </Text>
                                    <Text style={{marginTop: 5, letterSpacing: 0.1, fontSize: 18, color: '#E5E4E2'}}>
                                        Dog, Rottweiler
                                    </Text>
                                </View>
                            </View>

                        </View>
                        <Text style={{fontSize: 15, color: 'grey'}}>Reasons of Visit </Text>
                        <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 20,}}>Coughing / Sneezing</Text>
                        <Text style={{marginTop: 10, fontSize: 18}}>
                            Chamberlain appears to have lost his appetite and played
                            with other dogs at a local dog park. He began scratching
                            his right ear a lot more than ever.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const AppointmentStack = createNativeStackNavigator();

function AppointmentStackScreen({navigation, route}) {
    return (
        <AppointmentStack.Navigator
            headerMode="none"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal"
            }}
            initialRouteName={screenNames.petName}>

            <AppointmentStack.Screen
                name={screenNames.petName}
                component={PetName}
                options={{headerShown: false}}/>

            {/*<AppointmentStack.Screen*/}
            {/*    name={screenNames.setAppoint}*/}
            {/*    component={SetAppoint}*/}
            {/*    options={{headerShown: false}}/>*/}

            {/*<AppointmentStack.Screen*/}
            {/*    name={screenNames.reason}*/}
            {/*    component={Reason}*/}
            {/*    options={{headerShown: false}}/>*/}

            <AppointmentStack.Group screenOptions={{presentation: 'modal'}}>
                <AppointmentStack.Screen name="MyModal" component={ModalScreen} options={{headerShown: false}}/>
            </AppointmentStack.Group>

        </AppointmentStack.Navigator>
    );
}

export default AppointmentStackScreen;

//style={{paddingRight: 15}}
const styles = StyleSheet.create({
    cardTop: {
        padding: 18,
        borderRadius: 23,
        backgroundColor: "#eb762b",
    },
})