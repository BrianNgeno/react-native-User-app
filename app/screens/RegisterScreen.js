import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import authApi from "../api/client";
import { useNavigation } from "@react-navigation/native";
import MultiSteps from "react-native-multi-steps";
import { color } from "react-native-reanimated";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().label("username"),
  first_name: Yup.string().required().label("first_name"),
  last_name: Yup.string().required().label("last_name"),
  type: Yup.string().required().label("type"),
  phone_number: Yup.number().required().label("phone_number"),
});
function RegisterScreen(props) {
  const navigation = useNavigation();
  const [error, setError] = useState();
  const handleSubmit = async ({
    email,
    first_name,
    last_name,
    username,
    type,
    phone_number,
  }) => {
    console.log(email, first_name, last_name, username, type, phone_number);
    try {
      if (phone_number) phone_number = "+254" + phone_number.slice(-9);
      const result = await authApi.post("auth/registration", {
        email,
        first_name,
        last_name,
        username,
        type,
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
      navigation.navigate("PasswordReset");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Screen>
        
          <AppForm
            initialValues={{
              email: "",
              username: "",
              first_name: "",
              last_name: "",
              type: "",
              phone_number: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Image
              style={styles.logo}
              source={require("../assets/logo.webp")}
            />
            <MultiSteps
              containerButtonStyle={styles.containerButtonStyle}
              onMoveNext={function (data: any): void {
                console.log("next", data);
              }}
              onMovePrevious={function (data: any): void {
                console.log("previous", data);
              }}
              onSubmit={handleSubmit}
            >
              <View>
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
                  autoCompleteType="username"
                  autoCorrect={false}
                  name="username"
                  keyboardType="text"
                  icon="account"
                  placeholder="User Name"
                  textContentType="UserName"
                />
              </View>
              <View>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="first_name"
                  keyboardType="text"
                  icon="account"
                  placeholder="First Name"
                  textContentType="FirstName"
                />
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="last_name"
                  keyboardType="text"
                  icon="account"
                  placeholder="Last Name"
                  textContentType="LastName"
                />
              </View>
              <View>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="type"
                  keyboardType="text"
                  icon="login"
                  placeholder="User Type"
                  textContentType="UserType"
                />

                <AppFormField
                  autoCorrect={false}
                  name="phone_number"
                  keyboardType="numeric"
                  icon="flag"
                  placeholder="Phone Number"
                  textContentType="telephoneNumber"
                />
              </View>
            </MultiSteps>
          </AppForm>
          <View style={{ flex: 1 }} />
        </Screen>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 70,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  phoneContainer: {
    width: "100%",
    height: 50,
  },

  text: {
    color: colors.dark,
    fontWeight: "600",
  },

});
export default RegisterScreen;
