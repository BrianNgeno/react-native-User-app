import React from "react";
import { Image, ImageBackground, StyleSheet, View} from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";



function WelcomeScreen( {navigation}) {
  return (
    <ImageBackground
      blurRadius={4}
      style={styles.background}
      source={require("../assets/background.jpeg")} 
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.webp")} />
        <AppText style={styles.tagLine}>Quality Highways Better Connections </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="register" color="light" onPress={() => navigation.navigate("Register")}   />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20, 
    justifyContent: "center",
    width:"100%",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 150,
    height: 90,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    color: " #fff",
  },
  tagLine:{
    color:colors.white,
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20,
  },
});

export default WelcomeScreen;
