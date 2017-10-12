import axios from 'axios';
import { destination } from '../data/sample_drivers_destination';

export function selectDestination(id) {
  return {
    type: 'DESTINATION_SELECTED',
    payload: destination[id]
  };
}

export function selectDriver(driver) {
	return {
		type: 'DRIVER_SELECTED',
		payload: driver
	};
}

export function setMyLocation(latitude, longitude) {
    return {
        type: 'SET_MY_LOCATION',
        payload: { latitude, longitude }
    };
}

export function setDriversInfo() {
  const request = axios.get('http://usertaxi.dev/driver/api/getdata');
  
  return {
      type: 'DRIVER_LOCATION',
      payload: request
  };
}
