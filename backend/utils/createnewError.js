const CreatenewError = (code, message) => {
  const error = new Error(typeof message === "string" ? message : message?.message || "Error");
  error.status = code;
  return error;
};

export default CreatenewError;
