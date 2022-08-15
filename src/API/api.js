import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('auth');
    const auth = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (auth?.isLoggedIn) {
      return auth?.token;
    }
  } catch (e) {
    console.log(e);
  }
};

axios.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.defaults.baseURL = 'https://surajcodesinstagram.herokuapp.com/api/v1';

export const login = async (body) => {
  try {
    const response = await axios.post('/auth/login', body);
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const profile = async () => {
  try {
    const response = await axios.get('/auth/me');
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const userDetails = async (username) => {
  try {
    const response = await axios.get(`/users/${username}`);
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const posts = async () => {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const feed = async () => {
  try {
    const response = await axios.get('/users/feed');
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const toggleLike = async (id) => {
  try {
    const response = await axios.get(`/posts/${id}/toggleLike`);
    return response.data;
  } catch (err) {
    return err?.response?.data;
  }
};
