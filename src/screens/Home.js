import React from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadResources from '../components/LoadResources';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    const appIsReady = LoadResources();

    if (!appIsReady) {
        return null;
    }

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
                        CustomAlert({
                            'title': 'Success',
                            'message': 'You are now signed in.',
                            'navigation': navigation,
                            'destination': 'SignIn'
                        })
                    }}
                >

                <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => {
                        CustomAlert({
                            'title': 'Success',
                            'message': 'You are now registered.',
                            'navigation': navigation,
                            'destination': 'Register'
                        })
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
        marginTop: '80%',
        marginLeft: '10%',
    },

    line: {
        fontSize: 40,
        color: '#ffffff',
    },

    buttons: {
        marginTop: '20%',
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
        fontWeight: '300',
        color: '#ffffff',
    },

    registerButton: {
        marginTop: '10%',
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
        fontWeight: '300',
        color: '#7dbab0'
    },

    brandName: {
        marginTop: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    gath: {
        fontSize: 40,
        fontFamily: 'AlexBrush_400Regular',
        color: '#f27072',
    },

    bandhan: {
        fontSize: 40,
        fontFamily: 'AlexBrush_400Regular',
        color: '#7dbab0',
    },
});
