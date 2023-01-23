import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const CallScreen = () => {
  const img =
    "https://cdn.dribbble.com/users/153131/screenshots/2995660/phone_2x.gif";
  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
