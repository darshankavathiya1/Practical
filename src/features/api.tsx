import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://3.7.81.243/projects/plie-api/public/api';

interface LoginResponse {
  data: any;
  token: string;
  user: {
    email: string;
  };
}

export const login = async (email: string, password: string) => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${BASE_URL}/login`,
      {email, password},
    );
    return response.data;
  } catch (error: any) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error;
  }
};
