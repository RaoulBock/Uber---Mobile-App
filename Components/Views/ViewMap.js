import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const ViewMap = () => {
  const [mapRegion, setmapRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
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
