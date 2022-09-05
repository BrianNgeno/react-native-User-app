import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image source={require('../assets/petrol.jpeg')} style={styles.image} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
})
export default ListingDetailsScreen;