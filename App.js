import React from "react";
import { StatusBar } from "react-native";
import HomeScreen from "./Components/Screens/HomeScreen";
import LoginScreen from "./Components/Screens/LoginScreen";
import SpecScreen from "./Components/Screens/SpecScreen";
import VerifyScreen from "./Components/Screens/VerifyScreen";
import AppProvider, { AppContext } from "./Context/AppContext";
import { APP_PAGES } from "./Context/settings";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="dark"
        barStyle={"dark-content"}
        backgroundColor="#fff"
        hidden={false}
        translucent={true}
      />

      {navPage === APP_PAGES.APP.LOGIN && <LoginScreen />}
      {navPage === APP_PAGES.APP.VERIFY && <VerifyScreen />}
      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.SPEC && <SpecScreen />}
    </>
  );
};

export default App;
