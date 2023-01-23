import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SpecList = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Image source={{ uri: item.img }} style={styles.img} />
        <View style={styles.grid}>
          <TouchableOpacity style={{ marginHorizontal: 20 }}>
            <Text>{APP_ICON.MESSAGE}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{APP_ICON.CALL}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SpecList;

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
