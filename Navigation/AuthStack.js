import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Launcher from '../Components/Launcher';
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
import ForgetPassword from '../Components/ForgetPassword';
import ResetPassword from '../Components/ResetPassword';
import EditProfile from '../Components/EditProfile';
import Wallet from '../Components/Wallet';
import Setting from '../Components/Setting';
import Creator from '../Components/Creator';
import * as React from 'react';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Launcher" component={Launcher} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Creator" component={Creator} />
    </Stack.Navigator>
  );
}
