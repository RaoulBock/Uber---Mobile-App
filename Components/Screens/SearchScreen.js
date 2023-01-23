import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICON } from "../../Context/settings";
import SearchInput from "../Input/SearchInput";

const SearchScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav icon1={APP_ICON.BACK} title={"Where are you going?"} />
      <SearchInput placeholder={"Ex. Windhoek West, Namibia"} />
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