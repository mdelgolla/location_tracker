// PlaceAutocomplete.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { addPlace } from "actions/place_actions";
import { RootState } from "reducers/root_reducer";
import { getPlaceDetails } from "services/api_get_place_details";
import { API_KEY } from "../../utils/constants";
import { View } from "react-native";
import styles from "./place_autocomplete_style";

const PlaceAutocomplete: React.FC = () => {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places);
  const fetchPlaceDetails = async (placeId: string) => {
    try {
      const place = await getPlaceDetails(placeId);
      dispatch(addPlace(place));
    } catch (error) {
      console.error("Failed to fetch place details:", error);
    }
  };
  useEffect(() => {
    places.forEach((place) => {
      fetchPlaceDetails(place.place_id);
    });
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder={"Search"}
        onPress={(data, details: any = null) => {
          fetchPlaceDetails(data.place_id);
        }}
        //   fetchDetails
        query={{
          key: API_KEY,
          language: "en",
        }}
      />
    </View>
  );
};

export default PlaceAutocomplete;
