import React from 'react';
import Constants from 'expo-constants';
import {SafeAreaView, StyleSheet} from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Constants.StatusBarHeight,
        padding:20,
        marginTop:40,
        flex:1,
    },
})
export default Screen;