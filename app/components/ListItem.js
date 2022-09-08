import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable';



function ListItem({ title, subTitle, image,onPress, IconComponent, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={onPress}
    >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.title}>
          <AppText style={{fontWeight:600,}}>{title}</AppText>
          {subTitle && <AppText>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    padding: 20,
    backgroundColor:colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    
  },
  title: {
    fontWeight: 800,
    marginLeft:10,
    justifyContent:"center",
  },
});
export default ListItem;
