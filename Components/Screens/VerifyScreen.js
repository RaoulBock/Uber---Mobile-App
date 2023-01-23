import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";

const VerifyScreen = () => {
  return (
    <View style={styles.outline}>
      <Text>VerifyScreen</Text>
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
});
