import React from "react";
import { StyleSheet, View,TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
    const handlePress = () => {
        if (!imageUri) selectImage();
    }   

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            quality:0.5,
          });
          if(!result.cancelled)
            onChangeImage(result.uri);
        } catch (error) {
          console.log('error reading an image', error)
        }
    };
      
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
});
export default ImageInput;
