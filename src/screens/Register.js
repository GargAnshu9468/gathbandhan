import React from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadResources from '../components/LoadResources';
import { SafeAreaView, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
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
});
