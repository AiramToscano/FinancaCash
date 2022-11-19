import axios from 'axios';

export async function apiLogin(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3004/login', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}

export async function apiRegister(username: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3004/register', { username, password });
    return response.data;
  } catch (err) {
    return false;
  }
}
