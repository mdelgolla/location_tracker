// placeActions.ts

import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
export interface AddPlaceAction {
  type: "ADD_PLACE";
  payload: GooglePlaceDetail;
}
export interface RemovePlaceAction {
  type: "REMOVE_PLACE";
  payload: string;
}

export type PlaceAction = AddPlaceAction | RemovePlaceAction;

export const addPlace = (place: GooglePlaceDetail) => ({
  type: "ADD_PLACE",
  payload: place,
});
export const removePlace = (placeId: string): RemovePlaceAction => ({
  type: "REMOVE_PLACE",
  payload: placeId,
});
