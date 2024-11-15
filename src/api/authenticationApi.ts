import axiosInstance from "./axiosInstance";
import { AuthApiConstants } from "../constants/server/ApiConstants";
import { AuthenticationDto, GoogleOAthDto } from "../types/Authentication";

export function authenticateUser(authenticationDto: AuthenticationDto) {
  return axiosInstance.post(
    AuthApiConstants.AUTHENTICATE_USER,
    authenticationDto,
    {
      withCredentials: true,
    }
  );
}

export function googleOAuth(googleOAuthDto: GoogleOAthDto) {
  return axiosInstance.post(AuthApiConstants.GOOGLE_OAUTH, googleOAuthDto, {
    withCredentials: true,
  });
}

export function registerUser(authenticationDto: AuthenticationDto) {
  return axiosInstance.post(AuthApiConstants.REGISTER_USER, authenticationDto);
}

export function refreshToken() {
  return axiosInstance.get(AuthApiConstants.REFRESH_TOKEN, {
    withCredentials: true,
  });
}

export function verifyEmail(token: string) {
  return axiosInstance.get(AuthApiConstants.VERIFY_EMAIL, {
    params: { token },
    withCredentials: true,
  });
}

export function resendVerificationEmail(email: string) {
  return axiosInstance.post(AuthApiConstants.RESEND_VERIFICATION_EMAIL, null, {
    params: { email },
    withCredentials: true,
  });
}

export function logout() {
  return axiosInstance.delete(AuthApiConstants.LOGOUT, {
    withCredentials: true,
  });
}
