import axiosInstance from "./axiosInstance";
import { ActionApiConstants } from "../constants/server/ApiConstants";
import { GenerateActionDto } from "../types/Action";

export function generateImage(generateActionDto: GenerateActionDto) {
  return axiosInstance.post(
    ActionApiConstants.GENERATE_IMAGE,
    generateActionDto
  );
}
