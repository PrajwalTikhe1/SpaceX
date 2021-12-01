import axios from 'axios';
import {
  FLIGHT_LIST_REQUEST,
  FLIGHT_LIST_SUCCESS,
  FLIGHT_LIST_FAIL,
} from '../constants/FlightConstants';

export const listFlights = () => async (dispatch) => {
  try {
    dispatch({ type: FLIGHT_LIST_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      'https://api.spacexdata.com/v3/launches',
      config
    );

    dispatch({ type: FLIGHT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FLIGHT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
