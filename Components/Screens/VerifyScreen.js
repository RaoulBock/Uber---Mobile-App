import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";

const VerifyScreen = () => {
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [input3, setInput3] = React.useState("");
  const [input4, setInput4] = React.useState("");

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
      <TextInput
        ref={input1Ref}
        value={input1}
        onChangeText={handleInput1}
        maxLength={1}
      />
      <TextInput
        ref={input2Ref}
        value={input2}
        onChangeText={handleInput2}
        maxLength={1}
      />
      <TextInput
        ref={input3Ref}
        value={input3}
        onChangeText={handleInput3}
        maxLength={1}
      />
      <TextInput
        ref={input4Ref}
        value={input4}
        onChangeText={setInput4}
        maxLength={1}
      />
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
});
