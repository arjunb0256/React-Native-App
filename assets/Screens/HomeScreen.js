import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Placeholder</Text>

            <TouchableOpacity style={styles.login} onPress={ () => navigation.navigate('Login') }>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.register} onPress={ () => navigation.navigate('Register') }>
                <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        
    },
    Text: {
        color: '#fff',
        fontSize: 50,
        marginTop: 50,
    },
    login: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        height: 60,
        justifyContent: 'center',
        marginTop: 460,
        borderRadius: 10,
      },
    loginText: {
        fontSize: 20,
    },
    register: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        height: 60,
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 10,
    },
    registerText: {
        fontSize: 20,
    },
});

export default HomeScreen;