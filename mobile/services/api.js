import axios from 'axios';
import { URL_API } from '../constants';

const api = axios.create({
  baseURL: URL_API,
  timeout: 8000,
});

export const definirJeton = (jeton) => {
};

export default api;
