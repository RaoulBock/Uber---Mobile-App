export const APP_PAGES = {
  APP: {
    LOGIN: "LOGIN",
    VERIFY: "VERIFY",
    HOME: "HOME",
    SPEC: "SPEC",
    SEARCH: "SEARCH",
  },
};

import { Ionicons } from "react-native-vector-icons";

export const APP_ICON = {
  horizontal: (
    <Ionicons
      name={"ios-ellipsis-horizontal-sharp"}
      style={{ color: "#fff", fontSize: 28 }}
    />
  ),
  BRIEFCASE: (
    <Ionicons
      name={"ios-briefcase-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
  LOCATION: (
    <Ionicons
      name={"ios-location-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
  ARROW: (
    <Ionicons
      name={"ios-chevron-forward-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
  MESSAGE: (
    <Ionicons
      name={"ios-chatbox-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
  CALL: (
    <Ionicons
      name={"ios-call-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
};
