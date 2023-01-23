import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SimpleList = ({ item }) => {
  return (
    <TouchableOpacity style={styles.outline} activeOpacity={1}>
      <View style={styles.grid}>
        <Text style={styles.btn}>{item.icon}</Text>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={[styles.text, {}]}>{item.name}</Text>
          <Text
            style={[
              styles.text,
              { color: "gray", fontSize: 13, fontWeight: "400" },
            ]}
          >
            {item.location}
          </Text>
        </View>
      </View>
      <Text>{APP_ICON.ARROW}</Text>
    </TouchableOpacity>
  );
};

export default SimpleList;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 15,
  },
  grid: {
    flexDirection: "row",
  },
  text: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 50,
  },
});
