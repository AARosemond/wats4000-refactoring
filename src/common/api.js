import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
        config.params.APPID = 'f6c081f425905d686971f0b5a280bf98';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });