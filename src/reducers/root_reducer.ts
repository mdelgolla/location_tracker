// rootReducer.ts
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { combineReducers } from 'redux';
import placeReducer from './place_reducer';
// import placeReducer from './placeReducer';
// import { Place } from '../types';

export interface RootState {
  places: GooglePlaceDetail[];
}

const rootReducer = combineReducers<RootState>({
  places: placeReducer,
});

export default rootReducer;
