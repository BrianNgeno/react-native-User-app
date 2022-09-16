import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";


function ListingDetailsScreen(props) {
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../assets/petrol.jpeg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Petrol station at sagana</AppText>
        <AppText style={styles.subTitle}>123km</AppText>

        <ListItem 
            image={require("../assets/avator.webp")} 
            title = "Brian"
            subTitle="5 Listings"
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colors.green,
    fontSize: 20,
  },
});
export default ListingDetailsScreen;
