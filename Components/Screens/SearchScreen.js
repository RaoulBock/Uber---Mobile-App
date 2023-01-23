import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";

const SearchScreen = () => {
  return (
    <View style={styles.outline}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 10,
  },
});
