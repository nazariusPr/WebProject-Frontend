import axiosInstance from "./axiosInstance";
import { AuthenticationDto } from "../types/Authentication";

export async function authenticateUser(authenticationDto: AuthenticationDto) {
  return await axiosInstance.post("/auth", authenticationDto);
}
