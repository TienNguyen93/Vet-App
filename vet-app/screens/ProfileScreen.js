import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import {Header} from "../components/Header";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                <View style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={per1}
                           style={{width: 80, height: 80, borderRadius: 100 / 2, padding: 40}}/>
                    <Text style={{fontSize: 20}}>Jessie Leanor</Text>
                    <Text style={{fontSize: 20}}>janedoe@gmail.com</Text>
                    <Icon name="cellphone" size={30} color="black">
                        <Text style={{fontSize: 20}}>Profile screen!</Text>
                    </Icon>

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
});