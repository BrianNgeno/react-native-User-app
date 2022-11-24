import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../config/colors';
import OtpScreen from '../screens/OtpScreen';
import PasswordResetScreen from '../screens/PasswordResetScreen';

const Stack = createNativeStackNavigator();

const PasswordResetNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.yellow },
      headerTintColor: colors.black,
      headerTitleAlign: "center",
      autoCapitalize: "words",
    }}
  >
    <Stack.Screen name="RessPassword" component={PasswordResetScreen} options={{headerShown:false}}/>
    <Stack.Screen name="OTP" component={OtpScreen}/>  
  </Stack.Navigator>);

  export default PasswordResetNavigator;