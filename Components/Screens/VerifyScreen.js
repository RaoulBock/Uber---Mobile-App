import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import Button from "../Button/Button";
import { AppContext } from "../../Context/AppContext";
import { APP_PAGES } from "../../Context/settings";

const VerifyScreen = () => {
  const { errorMsg, mobileNumber, setNavPage } = React.useContext(AppContext);

  const [input1, setInput1] = React.useState();
  const [input2, setInput2] = React.useState();
  const [input3, setInput3] = React.useState();
  const [input4, setInput4] = React.useState();

  const handleInput1 = (text) => {
    setInput1(text);
    if (text.length === 1) {
      input2Ref.current.focus();
    }
  };

  const handleInput2 = (text) => {
    setInput2(text);
    if (text.length === 1) {
      input3Ref.current.focus();
    }
  };

  const handleInput3 = (text) => {
    setInput3(text);
    if (text.length === 1) {
      input4Ref.current.focus();
    }
  };

  const input1Ref = React.createRef();
  const input2Ref = React.createRef();
  const input3Ref = React.createRef();
  const input4Ref = React.createRef();

  return (
    <View style={styles.outline}>
      {/* <LoginNav /> */}
      <Text style={styles.title}>Enter code sent to your number</Text>
      <Text style={styles.text}>
        We sent it to the number +264 {mobileNumber}.
      </Text>
      <View style={styles.inputOutline}>
        <TextInput
          ref={input1Ref}
          value={input1}
          onChangeText={handleInput1}
          maxLength={1}
          style={styles.input}
          keyboardType={"numeric"}
        />
        <TextInput
          ref={input2Ref}
          value={input2}
          onChangeText={handleInput2}
          maxLength={1}
          style={styles.input}
          keyboardType={"numeric"}
        />
        <TextInput
          ref={input3Ref}
          value={input3}
          onChangeText={handleInput3}
          maxLength={1}
          style={styles.input}
          keyboardType={"numeric"}
        />
        <TextInput
          ref={input4Ref}
          value={input4}
          onChangeText={setInput4}
          maxLength={1}
          style={styles.input}
          keyboardType={"numeric"}
        />
      </View>
      {input4 && (
        <View style={{ marginVertical: 20 }}>
          <Button
            title={"Next"}
            onPress={() => setNavPage(APP_PAGES.APP.HOME)}
          />
        </View>
      )}
      <Text style={styles.error}>{errorMsg}</Text>
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 20,
  },
  input: {
    width: 60,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    textAlign: "center",
    fontSize: 28,
    color: "#404040",
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
    justifyContent: "space-between",
  },
});
