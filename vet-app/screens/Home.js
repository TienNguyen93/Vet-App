import { StyleSheet, Text, View, TextInput,
         TouchableOpacity, Image, ScrollView, ImageBackground, Pressable }
    from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";

import orange2 from '../assets/orange2.jpg'
import vet1 from '../assets/vet1.png'
import per1 from '../assets/per1.jpg'

import Card from '../components/Card'
import {doctors} from '../components/Dummy'
import {clinics} from '../components/Dummy'

const Home = ({navigation}) => {

    // helper functions
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
                            <Image source={per1}
                                   style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                            <Text style={[styles.text, {marginTop: 10}]}>Hello </Text>
                            <Text style={styles.text}>Jessie,</Text>
                            <Text style={{fontSize: 15, color: '#E5E4E2'}}>how can we help?</Text>
                        </View>
                        <Image source={vet1} style={{width: 140, height: 140, marginLeft: 90}}/>
                    </View>

                </ImageBackground>
            </View>
        )
    }

    // function

    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex: 1, marginTop: -25, borderTopLeftRadius: 12 * 2,
                        borderTopRightRadius: 12 * 2, backgroundColor: '#f5f9fc'
                }}>
                <View style={{alignItems: 'center', padding: 5}}>
                    <Text style={styles.title}>Book Now</Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {doctors.map((item) => (
                            <Card
                                image={item.image}
                                name={item.name}
                                clinic={item.clinic}
                                available={item.available}
                                review={item.review}/>
                        ))}
                    </ScrollView>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>My Clinics</Text>

                        <Pressable onPress={() => alert("search pressed!")} style={{marginLeft: 185, alignSelf: 'center'}}>
                            <Ionicons name="search" size={25} color="#eb762b">
                                <TextInput
                                    style={[styles.searchStyle, {marginRight: -10}]}
                                    placeholder="Search">
                                </TextInput>
                            </Ionicons>
                        </Pressable>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {clinics.map((item) => (
                            <Card
                                image={item.image}
                                name={item.name}
                                clinic={item.clinic}
                                available={item.available}
                                review={item.review}/>
                        ))}
                    </ScrollView>

                    <Text style={[styles.title, {marginTop: 20, marginBottom: 5}]}>My Pets/Animals</Text>
                        <View style={styles.cardTop}>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',
                                textAlign: 'center', marginLeft: 45, marginRight: 45, padding: 10}}>
                                Looks like you haven't added your pet yet
                            </Text>
                            <Text style={{color: '#ececec', fontSize: 18, textAlign: 'center', padding: 10, marginBottom: 10}}>
                                It's super easy. Simply tap "Add one", upload a photo
                                and tell us all about your furry friends
                            </Text>
                            <Pressable onPress={() => alert("go to add pet modal")}>
                                <Text style={{backgroundColor: 'white', color: 'black', textAlign: 'center', alignSelf: 'center',
                                    borderRadius: 20, padding: 10, fontSize: 18, fontWeight: 'bold', paddingLeft: 25, paddingRight: 25, }}>
                                    Thanks for the tip
                                </Text>
                            </Pressable>

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
    },
    title: {
        fontSize: 18,
        alignSelf: 'flex-start',
        padding: 15,
        fontWeight: 'bold',
        letterSpacing: 0.8,
        color: '#AEAEAE'
    },
    cardTop: {
        padding: 18,
        borderRadius: 20,
        backgroundColor: "#eb762b",
        elevation: 30,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    searchStyle: {
        fontSize: 15,
        color: '#AEAEAE',
        fontWeight: 'bold',
        alignItems: 'center'
    }
});