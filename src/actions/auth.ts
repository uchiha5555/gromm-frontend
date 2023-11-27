import { SERVER_URI } from '@/config';
import axios from 'axios';

export const register = async (payload: any) => {
    const response = await axios.post(`${SERVER_URI}/users/signup`, { ...payload })
    .then(res => res.data);

    return response;
}

export const login = async (payload: any) => {
    const response = await axios.post(`${SERVER_URI}/users/signin`, { ...payload })
    .then(res => res.data);

    return response;
}