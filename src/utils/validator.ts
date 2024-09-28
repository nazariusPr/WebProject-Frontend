type ValidatorProps = {
  validateEmail: (email: string) => string | null;
  validatePassword: (password: string) => string | null;
};

const validateEmail = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value) {
    return "Email is required.";
  } else if (!emailRegex.test(value)) {
    return "Please enter a valid email address.";
  }
  return null;
};

const validatePassword = (value: string) => {
  const hasLetters = /[a-zA-Z]/.test(value);
  const hasNumbers = /[0-9]/.test(value);

  if (!value) {
    return "Password is required.";
  } else if (value.length < 6) {
    return "Password must be at least 6 characters long.";
  } else if (!hasLetters || !hasNumbers) {
    return "Password must contain both letters and numbers.";
  }
  return null;
};

const Validator: ValidatorProps = {
  validateEmail,
  validatePassword,
};

export default Validator;
