import React, { useState } from "react";
import { Platform, TextInput,View,StyleSheet } from "react-native";
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
import colors from "../../config/colors";

function AppTextInput({icon, ...otherProps}) {

  return (
    <View style={styles.container}>
       {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>}

      <TextInput
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10,
    },
    textInput:{
        color:colors.dark,
        fontSize:18,
        width:"100%",
    },
})
export default AppTextInput;
