import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SearchInput = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={styles.outline}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  outline: {
    backgroundColor: "#f6f8fa",
    borderWidth: 1,
    borderColor: "#d5d5d5",
    borderRadius: 10,
    padding: 10,
  },
});
