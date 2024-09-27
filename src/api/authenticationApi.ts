import axiosInstance from "./axiosInstance";
import ApiConstants from "../constants/server/ApiConstants";
import { AuthenticationDto } from "../types/Authentication";

export function authenticateUser(authenticationDto: AuthenticationDto) {
  return axiosInstance.post(ApiConstants.AUTHENTICATE_USER, authenticationDto, {
    withCredentials: true,
  });
}

export function registerUser(authenticationDto: AuthenticationDto) {
  return axiosInstance.post(ApiConstants.REGISTER_USER, authenticationDto);
}

export function refreshToken() {
  return axiosInstance.get(ApiConstants.REFRESH_TOKEN, {
    withCredentials: true,
  });
}

export function verifyEmail(token: string) {
  return axiosInstance.get(ApiConstants.VERIFY_EMAIL, {
    params: { token },
    withCredentials: true,
  });
}

export function logout() {
  return axiosInstance.delete(ApiConstants.LOGOUT, { withCredentials: true });
}
