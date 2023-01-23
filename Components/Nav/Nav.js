import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Nav = ({ icon1, title, icon2, onPress }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text>{icon1}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>{icon2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#3071f5",
    borderRadius: 50,
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    color: "#404040",
    fontSize: 20,
  },
});
