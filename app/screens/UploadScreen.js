import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.yellow} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop="false"
            onAnimationFinish={onDone}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  animation: {
    width:150,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
export default UploadScreen;
