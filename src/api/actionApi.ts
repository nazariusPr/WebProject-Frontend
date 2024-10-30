import axiosInstance from "./axiosInstance";
import { ActionApiConstants } from "../constants/server/ApiConstants";
import { ActionFilterDto, GenerateActionDto } from "../types/Action";
import { Pageable } from "../types/Page";

export function generateImage(generateActionDto: GenerateActionDto) {
  return axiosInstance.post(
    ActionApiConstants.GENERATE_IMAGE,
    generateActionDto
  );
}

export function filterActions(
  actionFilterDto: ActionFilterDto,
  pageable: Pageable
) {
  return axiosInstance.get(ActionApiConstants.FILTER_ACTIONS, {
    params: {
      prompt: actionFilterDto.prompt,
      actionType: actionFilterDto.actionType,
      actionStatus: actionFilterDto.actionStatus,
      begin: actionFilterDto.begin,
      end: actionFilterDto.end,
      page: pageable.page,
      size: pageable.size,
    },
  });
}

export function seeAction(actionId: string) {
  const url = ActionApiConstants.SEE_ACTION.replace("{actionId}", actionId);
  return axiosInstance.get(url);
}

export function cancelAction(actionId: string) {
  const url = ActionApiConstants.CANCEL_ACTION.replace("{actionId}", actionId);
  return axiosInstance.patch(url);
}

export function restartAction(actionId: string) {
  const url = ActionApiConstants.RESTART_ACTION.replace("{actionId}", actionId);
  return axiosInstance.patch(url);
}

export function getActionStatus(actionId: string){
  const url = ActionApiConstants.GET_ACTION_STATUS.replace("{actionId}", actionId);
  return axiosInstance.get(url);
}
