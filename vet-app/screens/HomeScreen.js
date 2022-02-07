import { StyleSheet, Text, View, TextInput } from 'react-native';

function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
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