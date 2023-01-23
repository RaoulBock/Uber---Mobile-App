import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Nav from "../Nav/Nav";
import { APP_ICON, APP_PAGES, LOCATION_DATA } from "../../Context/settings";
import SearchInput from "../Input/SearchInput";
import { AppContext } from "../../Context/AppContext";
import SimpleList from "../List/SimpleList";

const SearchScreen = () => {
  const { setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav
        icon1={APP_ICON.BACK}
        title={"Where are you going?"}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
      />
      <View style={{ marginVertical: 10 }}>
        <SearchInput placeholder={"Ex. Windhoek West, Namibia"} />
      </View>
      <View>
        <ScrollView>
          {LOCATION_DATA.map((e, i) => {
            return <SimpleList key={i} item={e} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    margin: 10,
  },
});
