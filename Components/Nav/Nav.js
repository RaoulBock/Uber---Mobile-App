import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Nav = ({ icon1, title, icon2 }) => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity>
        <Text>{icon1}</Text>
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity>
        <Text>{icon2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({});
