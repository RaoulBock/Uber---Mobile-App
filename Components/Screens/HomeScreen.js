import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

import SearchInput from "../Input/SearchInput";

import ViewMap from "../Views/ViewMap";
import { APP_ICON, APP_PAGES, LOCATION_DATA } from "../../Context/settings";
import SimpleList from "../List/SimpleList";
import { AppContext } from "../../Context/AppContext";

const HomeScreen = () => {
  //   const [toggleModel, setToggleModel] = React.useState(false);
  const { setNavPage } = React.useContext(AppContext);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.outline}>
      {/* <Nav
        icon1={APP_ICON.horizontal}
        title={"Uber"}
        onPress={() => setIsVisible(!isVisible)}
      /> */}
      <ViewMap />

      <View style={styles.modal}>
        {/* <View>
          <Text style={styles.title}>Enhance your pick-up experience</Text>
          <Text style={styles.text}>
            Get a faster, hasstle free pick-up at your precise location
          </Text>
        </View> */}
        <View style={styles.modalContainer}>
          {/* <SearchInput placeholder={"Where are you going?"} /> */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setNavPage(APP_PAGES.APP.SEARCH)}
          >
            <Text>{APP_ICON.SEARCH}</Text>
            <Text style={styles.searchText}>Where are you going?</Text>
          </TouchableOpacity>
          <View>
            {LOCATION_DATA.map((e, i) => {
              return <SimpleList key={i} item={e} />;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  overlay: {
    backgroundColor: "#404040",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  modalInfo: {
    height: 300,
    padding: 10,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  btn: {
    backgroundColor: "#f6f8fa",
    borderWidth: 1,
    borderColor: "#d5d5d5",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    fontWeight: "500",
    color: "#404040",
    paddingHorizontal: 10,
  },
});
