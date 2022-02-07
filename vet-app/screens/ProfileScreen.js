import { StyleSheet, Text, View, TextInput } from 'react-native';

function ProfileScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Profile screen!</Text>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});