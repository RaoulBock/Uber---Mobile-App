import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICON } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";

const ChatScreen = () => {
  const { specDriver: item } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav icon1={APP_ICON.BACK} title={item.name} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
