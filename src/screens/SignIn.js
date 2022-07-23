import React, { useState } from 'react';
import CustomAlert from '../components/CustomAlert';
import LoadResources from '../components/LoadResources';
import CheckBox from 'expo-checkbox';
import {
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

export default function SignIn({ navigation }) {
    const [username, onChangeUsername] = useState('');
    const [password, onChangePassword] = useState('');
    const [isSelected, setSelection] = useState(false);

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

            <SafeAreaView style={styles.elements}>
                <Text style={styles.headerText}>Sign In</Text>
            </SafeAreaView>

            <Text style={styles.labelText}>Username</Text>

            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholder='Enter your username'
                />
            </SafeAreaView>

            <Text style={styles.labelText}>Password</Text>

            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder='Enter your password'
                    secureTextEntry={true}
                />
            </SafeAreaView>

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

            <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />

                <Text style={styles.checkboxText}>Remember me</Text>

                <TouchableOpacity
                    style={styles.needHelpButton}
                    onPress={() => {
                        navigation.navigate('ForgotPassword');
                }}>

                <Text style={styles.needHelpText}>Need help?</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={styles.signUpContainer}>
                <Text style={styles.newLabel}>New to gathbandhan?</Text>

                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => {
                        navigation.navigate('Register');
                }}>

                <Text style={styles.signUpText}>Sign up now.</Text>
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
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    elements: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontFamily: 'AlexBrush_400Regular',
        fontSize: 50,
        fontWeight: '400',
        color: '#f27072',
        marginTop: '10%',
    },

    labelText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#ffffff',
        marginTop: '10%',
        marginLeft: '10%',
    },

    input: {
        width: '80%',
        height: 40,
        marginTop: 20,
        marginLeft: 30,
        borderRadius: 20,
        padding: 10,
        color: '#000000',
        backgroundColor: '#ffffff',
        fontSize: 16,
    },

    signInButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 40,
        marginTop: 40,
        marginLeft: 30,
        borderRadius: 20,
        backgroundColor: '#f27072',
    },

    signInText: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: '300',
        color: '#ffffff',
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: '10%',
        marginTop: '10%',
        marginLeft: '10%',
    },

    checkbox: {
        alignSelf: "center",
    },

    checkboxText: {
        margin: '5%',
        fontSize: 20,
        fontWeight: '300',
        color: '#000000',
    },

    needHelpButton: {
        marginTop: '5%',
        marginLeft: '10%',
    },

    needHelpText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#000000',
    },

    signUpContainer: {
        flexDirection: "row",
        marginLeft: '5%',
    },

    newLabel: {
        margin: '5%',
        fontSize: 20,
        fontWeight: '300',
        color: '#000000',
    },

    signUpButton: {
        marginTop: '5%',
    },

    signUpText: {
        fontSize: 20,
        fontWeight: '300',
        color: '#000000',
    },

    brandName: {
        marginTop: '10%',
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
