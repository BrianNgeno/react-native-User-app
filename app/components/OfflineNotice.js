import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function OfflineNotice(props) {
    return (
        <View style={styles.container}>
            <AppText>No Internet Connection</AppText>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        height:50,
        position:"absolute",
        zIndex:1,
        width:'100%',
    }
})
export default OfflineNotice;