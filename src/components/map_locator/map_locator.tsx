import { View } from "@ant-design/react-native";
import Geolocation from "@react-native-community/geolocation";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import MapView, { Marker, Region } from "react-native-maps";
import { useSelector } from "react-redux";
import { RootState } from "reducers/root_reducer";
import React, { useEffect, useState } from "react";
import styles from "./map_locator_styles";

const MapLocator: React.FC = () => {
  let mapRef: MapView | null | undefined;
  const places = useSelector((state: RootState) => state.places);
  const [currentPosition, setCurrentPostion] = useState<Region>();
  useEffect(() => {
    getMyCurrentLocation();
  }, []);
  const getMyCurrentLocation = () => {
    Geolocation.getCurrentPosition((loc) => {
      const { latitude, longitude } = loc.coords;
      setCurrentPostion({
        latitude: latitude,
        longitude: longitude,
        longitudeDelta: 0.0922,
        latitudeDelta: 0.0421,
      });
    });
  };

  const renderMarkers = () => {
    return places.map((place: GooglePlaceDetail) => {
      const { place_id, geometry, name, vicinity } = place;
      if (geometry && geometry.location) {
        const { location } = geometry;
        return (
          <Marker
            key={place_id}
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
            title={name}
            description={vicinity}
            identifier={place_id}
          />
        );
      }
      return null;
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        provider="google"
        showsUserLocation={true}
        ref={(ref) => {
          mapRef = ref;
        }}
        region={currentPosition}
        initialRegion={{
          latitude: currentPosition?.latitude ?? 3.140853,
          longitude: currentPosition?.longitude ?? 101.693207,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {renderMarkers()}
      </MapView>
    </View>
  );
};
export default MapLocator;
