import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton(props) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:colors.yellow,
        borderRadius:40,
        height:80,
        justifyContent:"center",
        width:80,
        bottom:20,
        borderColor:colors.white,
        borderWidth:10,
    },
});

export default NewListingButton;