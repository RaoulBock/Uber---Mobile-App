import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import React from "react";

import SearchInput from "../Input/SearchInput";

import ViewMap from "../Views/ViewMap";
import { APP_ICON } from "../../Context/settings";
import SimpleList from "../List/SimpleList";

const HomeScreen = () => {
  //   const [toggleModel, setToggleModel] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const locations = [
    {
      id: 1,
      name: "Work",
      location: "3043 B Street, 92102",
      icon: APP_ICON.BRIEFCASE,
    },
    {
      id: 2,
      name: "El Dorado Bar",
      location: "3043 B Street, 7894",
      icon: APP_ICON.LOCATION,
    },
  ];

  return (
    <View style={styles.outline}>
      {/* <Nav
        icon1={APP_ICON.horizontal}
        title={"Uber"}
        onPress={() => setIsVisible(!isVisible)}
      /> */}
      <ViewMap />

      <View style={styles.modal}>
        <Text style={styles.title}>Enhance your pick-up experience</Text>
        <Text style={styles.text}>
          Get a faster, hasstle free pick-up at your precise location
        </Text>
        <View style={styles.modalContainer}>
          <SearchInput placeholder={"Where are you going?"} />
          <View>
            {locations.map((e, i) => {
              return <SimpleList key={i} item={e} />;
            })}
          </View>
        </View>
      </View>

      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={toggleModal}
      >
        <TouchableOpacity style={styles.overlay} onPress={toggleModal} />
        <View style={styles.modalInfo}>
          <SearchInput placeholder={"Where are you going?"} />
          <Text>Hello World</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
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
});
