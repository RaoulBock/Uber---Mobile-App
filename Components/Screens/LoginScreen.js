import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import LoginNav from "../Nav/LoginNav";
import Button from "../Button/Button";
import { AppContext } from "../../Context/AppContext";

const LoginScreen = () => {
  const [number, setNumber] = React.useState("");
  const { errorMsg, setErrorMsg } = React.useContext(AppContext);

  if (number === "") {
    setErrorMsg("Please provide your mobile number to continue.");
  } else {
  }

  return (
    <View style={styles.outline}>
      {/* <LoginNav /> */}
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.text}>We will send you a confirmation code.</Text>
      <View style={styles.inputOutline}>
        <Text style={styles.code}>+264</Text>
        <TextInput
          style={styles.input}
          placeholder={"81 495 3704"}
          focusable={true}
          keyboardType={"numeric"}
          onChangeText={(e) => setNumber(e)}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title={"Next"} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
  title: {
    color: "#333",
    fontWeight: "500",
    fontSize: 38,
  },
  text: {
    marginVertical: 15,
    color: "gray",
  },
  inputOutline: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  input: {
    marginHorizontal: 10,
    fontSize: 28,
  },
  code: {
    fontSize: 28,
  },
});
