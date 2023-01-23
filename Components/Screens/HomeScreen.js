import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICON } from "../../Context/settings";
import SearchInput from "../Input/SearchInput";

import MapView, { Marker } from "react-native-maps";
import ViewMap from "../Views/ViewMap";

const HomeScreen = () => {
  //   const [toggleModel, setToggleModel] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  const [mapRegion, setmapRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.outline}>
      {/* <Nav
        icon1={APP_ICON.horizontal}
        title={"Uber"}
        onPress={() => setIsVisible(!isVisible)}
      /> */}
      <MapView
        style={{ alignSelf: "stretch", height: "50%" }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>

      <Modal
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
      </Modal>
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
});
