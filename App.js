import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import PasswordResetScreen from "./app/screens/PasswordResetScreen";
import OtpScreen from "./app/screens/OtpScreen";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

enableScreens();



export default function App() {
  return <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>
}
