import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

const ViewMap = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title={"My Location"}
        description={"This is my current location"}
      />
    </MapView>
  );
};

export default ViewMap;

const styles = StyleSheet.create({});
