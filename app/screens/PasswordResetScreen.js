import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {AppFormField,SubmitButton,AppForm} from '../components/forms';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});
function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <AppForm
        initialValues={{ email: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          icon="email"
          placeholder="Input your Email"
          textContentType="emailAddress"
        />

        <SubmitButton title="Reset Password" />
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
export default LoginScreen;
