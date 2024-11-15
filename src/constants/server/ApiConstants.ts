const AUTH_CONTROLLER = "/auth";
const ACTION_CONTROLLER = "/action";

export const AuthApiConstants = {
  AUTHENTICATE_USER: AUTH_CONTROLLER,
  GOOGLE_OAUTH: AUTH_CONTROLLER + "/google",
  REGISTER_USER: AUTH_CONTROLLER + "/register",
  REFRESH_TOKEN: AUTH_CONTROLLER + "/refresh-token",
  VERIFY_EMAIL: AUTH_CONTROLLER,
  RESEND_VERIFICATION_EMAIL: AUTH_CONTROLLER + "/resend-verification-email",
  LOGOUT: AUTH_CONTROLLER + "/logout",
};

export const ActionApiConstants = {
  GENERATE_IMAGE: ACTION_CONTROLLER + "/generate-image",
  FILTER_ACTIONS: ACTION_CONTROLLER + "/filter",
  SEE_ACTION: ACTION_CONTROLLER + "/{actionId}",
  CANCEL_ACTION: ACTION_CONTROLLER + "/cancel/{actionId}",
  RESTART_ACTION: ACTION_CONTROLLER + "/restart/{actionId}",
  GET_ACTION_STATUS: ACTION_CONTROLLER + "/{actionId}/status",
};
