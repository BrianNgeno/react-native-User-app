import React from 'react';
import { View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard  } from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
         
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};



export default KeyboardAvoidingComponent;