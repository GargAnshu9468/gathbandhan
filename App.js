import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import ContactUs from './src/screens/ContactUs';
import DeleteAccount from './src/screens/DeleteAccount';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

console.reportErrorsAsExceptions = false;

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

      <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
      />

      <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
      />

      <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
      />

      <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
      />

      <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{ headerShown: false }}
      />

      <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
