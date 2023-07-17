import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "./home_screen_styles";

import PlaceAutocomplete from "components/place_autocomplete/place_autocomplete";
import SearchHistory from "components/search_history/search_history";
import MapLocator from "components/map_locator/map_locator";


const HomeScreen: React.FC = () => {
  {
    return (
      <SafeAreaView style={styles.container}>
        <MapLocator />

        <View style={styles.searchContainer}>
          <View
            style={styles.titleContainer}>
            <Text style={styles.titleText}>Location Tracker</Text>
            <PlaceAutocomplete />
            <SearchHistory />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
export default HomeScreen;
