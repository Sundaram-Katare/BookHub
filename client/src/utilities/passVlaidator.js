const validator = (password) => {
  const passLength = 8;
  const uppercase = /[A-Z]/.test(password);
  const lowercase = /[a-z]/.test(password);
  const number = /[0-9]/.test(password);
  const specialcharacter = /[ !@#$%^&*]/.test(password);
  const minLength = password.length >= passLength;
  return {
    isValid: minLength && uppercase && lowercase && number && specialcharacter,
    feedback: {
      minLength,
      uppercase,
      lowercase,
      number,
      specialcharacter,
    },
  };
};

export default validator;
