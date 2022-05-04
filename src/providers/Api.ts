import axios from 'axios';
import { Constants } from '../configs';

const baseURL = Constants.ApiBaseUrl;

export const Api = axios.create({ baseURL });

export function setBearerToken(token: string) {
  Api.interceptors.request.use((config: any) => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  });
}
