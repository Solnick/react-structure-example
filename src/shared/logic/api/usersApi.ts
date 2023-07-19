import { axiosInstance } from './axiosInstance';
import { User } from '../../types/User';

const ORGANISATIONS_URL = 'users';

export const getUsers = () => {
  return axiosInstance.get<User[]>(`${ORGANISATIONS_URL}`);
};

export const usersApi = {
  getUsers,
};
