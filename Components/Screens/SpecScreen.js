import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ViewMap from "../Views/ViewMap";
import SpecList from "../List/SpecList";
import { APP_ICON } from "../../Context/settings";

const SpecScreen = () => {
  const driver = [
    {
      id: 1,
      name: "Mike",
      plate_no: "XY21CC",
      isAvalable: false,
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/gamers-5266580-4403854.png",
    },
  ];

  return (
    <View style={styles.outline}>
      <ViewMap />
      <View style={styles.modal}>
        <View>
          {/* <Text style={styles.title}>Enhance your pick-up experience</Text> */}
          <Text style={styles.text}>14 Min away, 12:55 PM Arrival Time</Text>
        </View>
        <View style={styles.modalContainer}>
          {/* <SearchInput placeholder={"Where are you going?"} /> */}
          <View>
            {driver.map((e, i) => {
              return <SpecList key={i} item={e} />;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SpecScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  modal: {
    backgroundColor: "#3071f5",

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    width: "100%",
  },
  title: {
    fontWeight: "400",
    color: "white",
    fontSize: 28,
    padding: 15,
  },
  text: {
    color: "#eee",
    fontWeight: "400",
    paddingVertical: 10,
    textAlign: "center",
  },
  btn: {},
  btnOutline: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
    fontSize: 20,
    backgroundColor: "red",
  },
});
