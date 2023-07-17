// SearchHistory.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/root_reducer";
import { FlatList, Text, View } from "react-native";
import { removePlace } from "actions/place_actions";
import { Button } from "@ant-design/react-native";
import styles from "./search_history_style";

const SearchHistory: React.FC = () => {
  const places = useSelector((state: RootState) => state.places);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={places}
      renderItem={({ item }) => (
        <View  style={styles.container}>
          <Text>{item.name}</Text>
          <Button type="warning" onPress={()=>dispatch(removePlace(item.place_id))}>delete</Button>
        </View>
      )}
      keyExtractor={(item) => item.id + "" + item.place_id}
    />
  );
};

export default SearchHistory;
