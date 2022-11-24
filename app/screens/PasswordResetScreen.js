import React, {useState} from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {AppFormField,SubmitButton,AppForm} from '../components/forms';
import authApi from "../api/client";


const validationSchema = Yup.object().shape({
  phone_number: Yup.number().required().label("phone_number"),
});

function PasswordResetScreen(props) {

  const [error, setError] = useState();
  const handleSubmit = async ({
    phone_number,
  }) => {
    console.log(phone_number)
    try {
      if (phone_number) phone_number = "+254" + phone_number.slice(-9);
      const result = await authApi.post("auth/password-request-otp", {
        phone_number,
      });
      console.log(result.data);
      
      if (!result.ok) {
        if (result.data) setError(result.data.error);
        else {
          setError("An unexpected error occured");
          console.log(result);
        }
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.webp")} />
      <AppForm
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          name="phone_number"
          keyboardType="numeric"
          icon="flag"
          placeholder="Phone Number"
          textContentType="telephoneNumber"
        />

        <SubmitButton 
        title="Send OTP"
        />

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
export default PasswordResetScreen;
