import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="black" size={30}/>
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="trash-can-outline" color="black " size={30}/>
        </View>
        <Image resizeMode='contain' style={styles.image} source={require("../assets/highway.jpg")} />
    </View>
         
    );
}

const styles = StyleSheet.create({
    closeIcon:{
    
        position:"absolute",
        top:40,
        left:30,
    },
    container:{
        backgroundColor:colors.background,
        flex:1,
    },
    deleteIcon:{
        position:"absolute",
        top:40,
        right:30,
    },
    image: {
        width:"100%",
        height: "100%",
    },
    
})
export default ViewImageScreen; 