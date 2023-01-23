import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { AppContext } from "../../Context/AppContext";

const ViewMap = () => {
  const { location } = React.useContext(AppContext);

  const [mapRegion, setmapRegion] = React.useState({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <MapView
      style={{
        alignSelf: "stretch",
        height: "100%",
      }}
      region={mapRegion}
    >
      <Marker coordinate={mapRegion} title="Marker" />
    </MapView>
  );
};

export default ViewMap;

const styles = StyleSheet.create({});
