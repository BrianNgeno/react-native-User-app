import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../config/colors';
import ListingEditScreen from '../screens/ListingEditingScreen';



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
    <Stack.Screen name="Upload Image" component={ListingEditScreen} />



  </Stack.Navigator>);

  export default AccountNavigator;
  