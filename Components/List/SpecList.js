import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICON } from "../../Context/settings";

const SpecList = ({ item }) => {
  return (
    <View style={styles.outline}>
      <View style={[styles.grid, { justifyContent: "space-between" }]}>
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
      <View
        style={[
          styles.grid,
          {
            alignItems: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#eee",
            paddingVertical: 10,
            justifyContent: "space-between",
          },
        ]}
      >
        <View>
          <Text style={styles.title}>{item.name} is on the way</Text>
          <Text>12:43 PM Drop-Off</Text>
        </View>
        <View>
          <Text style={styles.title}>{item.plate_no}</Text>
          <Text style={styles.text}>License Plate No.</Text>
        </View>
      </View>

      <View style={[{}]}>
        <View
          style={[styles.grid, { alignItems: "center", marginVertical: 20 }]}
        >
          <Text>{APP_ICON.LOCATION}</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.text}>Start Location</Text>
            <Text style={styles.location}>
              B Street 920025, CA - 3:00 to 3:15 PM
            </Text>
          </View>
        </View>
        <View style={[styles.grid, { alignItems: "center" }]}>
          <Text>{APP_ICON.LOCATION}</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.text}>Dropoff</Text>
            <Text style={styles.location}>SJC, Terminal B</Text>
          </View>
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
  },
  title: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 25,
    marginTop: 10,
  },
  text: {
    color: "gray",
    fontWeight: "500",
    fontSize: 12,
  },
  location: {
    color: "#404040",
    fontWeight: "500",
    fontSize: 20,
  },
});
