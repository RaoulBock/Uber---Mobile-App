import React from "react";
import { StatusBar } from "react-native";
import CallScreen from "./Components/Screens/CallScreen";
import ChatScreen from "./Components/Screens/ChatScreen";
import HomeScreen from "./Components/Screens/HomeScreen";
import LoginScreen from "./Components/Screens/LoginScreen";
import SearchScreen from "./Components/Screens/SearchScreen";
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
      {navPage === APP_PAGES.APP.SEARCH && <SearchScreen />}
      {navPage === APP_PAGES.APP.CHAT && <ChatScreen />}
      {navPage === APP_PAGES.APP.CALL && <CallScreen />}
    </>
  );
};

export default App;
