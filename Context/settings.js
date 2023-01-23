export const APP_PAGES = {
  APP: {
    LOGIN: "LOGIN",
    VERIFY: "VERIFY",
    HOME: "HOME",
    SPEC: "SPEC",
    SEARCH: "SEARCH",
    CHAT: "CHAT",
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
  SEARCH: (
    <Ionicons
      name={"ios-search-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
  BACK: (
    <Ionicons
      name={"ios-chevron-back-outline"}
      style={{ color: "#3071f5", fontSize: 28 }}
    />
  ),
};

export const LOCATION_DATA = [
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
  {
    id: 3,
    name: "El Dorado Bar",
    location: "3043 B Street, 7894",
    icon: APP_ICON.LOCATION,
  },
];
