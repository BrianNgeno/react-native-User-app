import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Screen from "../components/Screen";
import * as Yup from "yup";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  ErrorMessage,
} from "../components/forms";
import AppButton from "../components/AppButton";
import authApi from "../api/client";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("password"),
});

function LoginScreen({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    try {
      const result = await authApi.post("/login/", { email, password });
      console.log(result.data.access);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);

      const user = jwtDecode(result.data.access);

      authContext.setUser(user);
      authStorage.storeToken(result.data);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <ErrorMessage
              error="Invalid username or password"
              visible={loginFailed}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              keyboardType="email-address"
              icon="email"
              placeholder="Email"
              textContentType="emailAddress"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <SubmitButton title="login" />

            <AppButton
              title="Forgot your Password ?"
              color={colors.light}
              onPress={() => navigation.navigate("PasswordReset")}
            />
          </AppForm>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
export default LoginScreen;
