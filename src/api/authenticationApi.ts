import axiosInstance from "./axiosInstance";
import { AuthenticationDto } from "../types/Authentication";

export function authenticateUser(authenticationDto: AuthenticationDto) {
  return axiosInstance.post("/auth", authenticationDto, {
    withCredentials: true,
  });
}

export function refreshToken() {
  return axiosInstance.get("/auth/refresh-token", { withCredentials: true });
}
