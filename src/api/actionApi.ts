import axiosInstance from "./axiosInstance";
import { ActionApiConstants } from "../constants/server/ApiConstants";
import { ActionFilterDto, GenerateActionDto } from "../types/Action";

export function generateImage(generateActionDto: GenerateActionDto) {
  return axiosInstance.post(
    ActionApiConstants.GENERATE_IMAGE,
    generateActionDto
  );
}

export function filterActions(actionFilterDto: ActionFilterDto) {
  return axiosInstance.get(ActionApiConstants.GENERATE_IMAGE, {
    params: {
      prompt: actionFilterDto.prompt,
      action_type: actionFilterDto.action_type,
      action_status: actionFilterDto.action_status,
      begin: actionFilterDto.begin.toISOString(),
      end: actionFilterDto.end.toISOString(),
    },
  });
}
