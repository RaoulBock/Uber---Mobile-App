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
import Model from "../Model/Model";
const HomeScreen = () => {
  //   const [toggleModel, setToggleModel] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.outline}>
      <Nav
        icon1={APP_ICON.horizontal}
        title={"Uber"}
        onPress={() => setIsVisible(!isVisible)}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisible}
        onRequestClose={toggleModal}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: 300,
          }}
        >
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
    margin: 10,
  },
});
