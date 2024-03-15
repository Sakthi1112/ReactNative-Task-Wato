import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/screens/splashScreen'; // Updated import
import LoginScreen from './components/screens/loginScreen';
import SignUpScreen from './components/screens/signUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen} // Updated component reference
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        {/* Other screens would be added here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
