import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import ViewMap from "../Views/ViewMap";

const SpecScreen = () => {
  return (
    <View style={styles.outline}>
      <ViewMap />
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
