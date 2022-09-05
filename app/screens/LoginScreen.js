import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import {  Formik } from "formik";
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';



const validationSchema = Yup.object().shape({
  email:Yup.string().required().email().label("Email"),
  password:Yup.string().required().min(8).label("password") 
});
function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <Formik
        initialValues={{ enail: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onBlur = {()=> setFieldTouched("email")}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              icon="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email}/>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onBlur = {()=> setFieldTouched("password")}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password}/>
            <AppButton
              title="login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container:{
    padding:10,
  },
  logo: {
    width: 150,
    height: 90,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
