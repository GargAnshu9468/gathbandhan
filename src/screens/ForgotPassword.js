import React from 'react';
import LoadResources from '../components/LoadResources';
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';

export default function ForgotPassword({ navigation }) {
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
