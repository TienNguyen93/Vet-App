import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card, Button} from 'react-native-elements';

function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', flex: 0.2}}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1, borderRadius: 10, width: 150, height: 50,
                        alignItems: 'center', padding: 15}}>
                    <Text>
                        Upcoming
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderWidth: 1, borderRadius: 10, width: 150, height: 50,
                        alignItems: 'center', padding: 15}}>
                    <Text>Past</Text>
                </TouchableOpacity>
            </View>

            <Card>
                <Card.Title>Testing card</Card.Title>
                <Card.Divider />
                <Text>In 3 days</Text>
                <Text style={{fontSize: 20}}>Consultation with Doja Cat</Text>

                <Icon name="calendar-month" size={20} color="#F91B17">
                    <Text>February 14</Text>
                </Icon>

                <Icon name="clock-outline" size={20} color="#F91B17">
                    <Text>11:00 AM</Text>
                </Icon>

                <Ionicons name="location-outline" size={20} color="#F91B17">
                    <Text>Main Street, 18</Text>
                </Ionicons>

                <Icon name="phone" size={20} color="#F91B17">
                    <Text>+1 121 234 5678</Text>
                </Icon>
            </Card>

            <Text style={{fontSize: 20}}>Home screen!</Text>
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
    },
});