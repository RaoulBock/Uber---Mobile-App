import React from "react";
import { APP_PAGES } from "./settings";
import * as Location from "expo-location";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
    console.log("Something went wrong, try again later.");
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location);
  }

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        errorMsg,
        setErrorMsg,
        mobileNumber,
        setMobileNumber,
        location,
        setLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
