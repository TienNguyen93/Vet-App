import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
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