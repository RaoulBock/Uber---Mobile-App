import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICON, APP_PAGES } from "../../Context/settings";
import { AppContext } from "../../Context/AppContext";
import ChatInput from "../Input/ChatInput";

const ChatScreen = () => {
  const { specDriver: item, setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav
        icon1={APP_ICON.BACK}
        title={item.name}
        onPress={() => {
          setNavPage(APP_PAGES.APP.SPEC);
        }}
      />
      <View style={{ flex: 1 }}></View>
      <View style={styles.grid}>
        <ChatInput placeholder={"Type something here ..."} />
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 10,
  },
});
