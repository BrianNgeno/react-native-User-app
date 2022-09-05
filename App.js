import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import {View, StyleSheet} from 'react-native';
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import AppButton from "./app/components/AppButton";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import LoginScreen from "./app/screens/LoginScreen";


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

})
export default function App() {
  return (
        
            <LoginScreen/>
       
      );
}


