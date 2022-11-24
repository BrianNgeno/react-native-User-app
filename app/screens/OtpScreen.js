import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";
import authApi from "../api/client";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import { useNavigation } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
  pin: Yup.string().required().label("pin"),
  new_password: Yup.string().required().label("new_password"),
  confirm_password: Yup.string().required().label("confirm_password"),
});

function OtpScreen(props) {
  const navigation = useNavigation("Login");
  const authContext = useContext(AuthContext);
  const [otpFailed, setOtpFailed] = useState(false);
  const handleSubmit = async ({ pin, new_password, confirm_password }) => {
    try {
      const result = await authApi.post("/auth/activation", {
        pin,
        new_password,
        confirm_password,
      });
      console.log(result);
      if (!result.ok) return setOtpFailed(true);
      setOtpFailed(false);

      const user = jwtDecode(result.data.access);

      authContext.setUser(user);
      authStorage.storeToken(result.data);
      navigation.navigate("Login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <AppForm
        initialValues={{ pin: "", new_password: "", confirm_password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="pin"
          keyboardType="text"
          icon="lock"
          placeholder="Input OTP Number"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="new_password"
          icon="lock"
          placeholder="New Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="confirm_password"
          icon="lock"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Save Password" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 90,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default OtpScreen;
