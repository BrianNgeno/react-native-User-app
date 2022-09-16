import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import colors from '../config/colors';

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
    {/* <Stack.Screen name="" component={}/> */}
  </Stack.Navigator>);

  export default PasswordResetNavigator;