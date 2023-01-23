import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import LoginNav from "../Nav/LoginNav";

const LoginScreen = () => {
  return (
    <View style={styles.outline}>
      {/* <LoginNav /> */}
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.text}>We will send you a confirmation code.</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
  title: {
    color: "#333",
    fontWeight: "500",
    fontSize: 38,
  },
  text: {
    marginVertical: 15,
    color: "gray",
  },
});
