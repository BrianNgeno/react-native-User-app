import React,{useState} from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm, ErrorMessage } from "../components/forms";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import authApi from '../api/auth'; 
import jwtDecode from 'jwt-decode';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(7).label("password"),
});
function LoginScreen({navigation}) {
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({email, password}) =>{
    const result = await authApi.login(email,password);
    if (!result.ok);
    setLoginFailed(false);
    const user = jwtDecode(result.data);
    console.log(user);
  }
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid username or password" visible={loginFailed} />
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

        <AppButton title="Forgot your Password" color="white" onPress={() => navigation.navigate("Forgot Password")}/>
          
        
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
