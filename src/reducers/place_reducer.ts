// placeReducer.ts
// import { Place, Action } from '../types';

import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import { PlaceAction } from "../actions/place_actions";
const initialState: GooglePlaceDetail[] = [];
const placeReducer = (state=initialState, action: PlaceAction) => {
  switch (action.type) {
    case "ADD_PLACE":
      if (
        !state.map((item) => item.place_id).includes(action.payload.place_id)
      ) {
        return [...state, action.payload];
      }
      case "REMOVE_PLACE":
        return state.filter((place) => place.place_id !== action.payload);
    
    default:
      return state;
  }
};

export default placeReducer;
