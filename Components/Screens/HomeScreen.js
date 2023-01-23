import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
});
