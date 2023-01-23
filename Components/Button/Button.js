import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#eeeeee",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    color: "#9f9f9f",
    fontWeight: "500",
    fontSize: 18,
  },
});
