import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.mainScreen}>
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../../assets/images/background.jpg')}
                blurRadius={1}
                imageStyle={{ opacity: 0.75 }}
            >

            <SafeAreaView style={styles.quote}>
                <Text style={styles.line}>
                    Find your
                </Text>

                <Text style={styles.line}>
                    Perfect match
                </Text>

                <Text style={styles.line}>
                    Today
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.buttons}>
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => {
                        console.log('Pressed!');
                    }}
                >

                <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => {
                        console.log('Pressed!');
                    }}
                >

                <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.brandName}>
                <Text style={styles.gath}>
                    Gath
                </Text>

                <Text style={styles.bandhan}>
                    Bandhan
                </Text>
            </SafeAreaView>

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow : "hidden",
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    quote: {
        marginTop: '330px',
        marginLeft: '30px',
    },

    line: {
        fontSize: 40,
        fontFamily: 'Rockwell',
        color: '#ffffff',
    },

    buttons: {
        marginTop: '30px',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signInButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f27072',
    },

    signInText: {
        fontSize: 20,
        fontWeight: 300,
        color: '#ffffff',
    },

    registerButton: {
        marginTop: '30px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffffff',
    },

    registerText: {
        fontSize: 20,
        fontWeight: 300,
        color: '#7dbab0'
    },

    brandName: {
        marginTop: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gath: {
        fontSize: 40,
        fontFamily: 'Mistral',
        color: '#f27072',
    },

    bandhan: {
        fontSize: 40,
        fontFamily: 'Mistral',
        color: '#7dbab0',
    },
});
