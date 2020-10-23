import axios from 'axios';
import {LogDisplay} from '../util/Utils';
export const BASE_URL = 'https://api.harvardartmuseums.org/'; //URl

export const API_KEY = 'f317d3b0-a5b2-48f1-9723-6c0b2798bc47'; //API KEY

//Web Service Endpoints
export const webServiceEndpoint = {
  GET_LIST: 'object',
};

//Get Web Service Call method
export const getServiceCall = async (endpoint, params) => {

  LogDisplay('URL & endpoint:-', BASE_URL + endpoint);
  LogDisplay('Param&&:-', params);
  return axios
    .get(BASE_URL + endpoint,{params:params})
    .then(response => response)
    .catch(error => {
      throw error;
    });
};
