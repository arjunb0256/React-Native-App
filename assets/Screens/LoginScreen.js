import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

Font.loadAsync({
    'main-bold': require('../fonts/main-bold.ttf')
  });


function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Login</Text>

            <TouchableOpacity style={styles.Back} onPress={ () => navigation.navigate('Home') }>
                <Text style={styles.BackText}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
    },
    Text: {
        color: '#fff',
        fontSize: 50,
        marginTop: 50,
    },
    Back: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        height: 60,
        justifyContent: 'center',
        marginTop: 560,
        borderRadius: 10,
      },
    BackText: {
        fontSize: 20,
    },
});

export default LoginScreen;