import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launcher from './Components/Launcher';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

import Home from './Components/Home';
// import ForgotPassword from 'Signin';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Launcher">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            title: 'Forget Password',
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            title: 'Reset Password',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen name="Launcher" component={Launcher} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
