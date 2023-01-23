import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";

const SpecScreen = () => {
  return (
    <View style={styles.outline}>
      <Text>SpecScreen</Text>
    </View>
  );
};

export default SpecScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
