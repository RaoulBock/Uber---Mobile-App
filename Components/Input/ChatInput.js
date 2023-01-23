import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const ChatInput = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.grid}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.outline}
      />
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICON.ARROW}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginHorizontal: 10,
  },
});
