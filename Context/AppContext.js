import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.LOGIN);
  const [errorMsg, setErrorMsg] = React.useState("");

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
