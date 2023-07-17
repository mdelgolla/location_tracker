import axios from 'axios';
import { GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../utils/constants';


export const getPlaceDetails = async (placeId: string): Promise<GooglePlaceDetail> => {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEY}`;
  
    try {
      const response = await axios.get(url);
      return response.data.result;
    } catch (error) {
      throw new Error('Failed to fetch place details');
    }
  };
