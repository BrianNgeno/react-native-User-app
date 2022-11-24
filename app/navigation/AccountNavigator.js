import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../config/colors';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';


const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.yellow },
      headerTintColor: colors.black,
      headerTitleAlign: "center",
      autoCapitalize: "words",
    }}
  >
    <Stack.Screen name="Individual Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen}/>


  </Stack.Navigator>);

  export default AccountNavigator;