const AUTH_CONTROLLER = "/auth";

const ApiConstants = {
  AUTHENTICATE_USER: AUTH_CONTROLLER,
  REGISTER_USER: AUTH_CONTROLLER + "/register",
  REFRESH_TOKEN: AUTH_CONTROLLER + "/refresh-token",
  VERIFY_EMAIL: AUTH_CONTROLLER,
  RESEND_VERIFICATION_EMAIL: AUTH_CONTROLLER + "/resend-verification-email",
  LOGOUT: AUTH_CONTROLLER + "/logout",
};

export default ApiConstants;
