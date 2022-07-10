import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { AlexBrush_400Regular }  from '@expo-google-fonts/alex-brush';

export default function LoadResources() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({AlexBrush_400Regular});
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
            console.warn(e);
            } finally {
            setAppIsReady(true);
            SplashScreen.hideAsync();
            }
        }

        prepare();
    }, []);

    return appIsReady;
}
