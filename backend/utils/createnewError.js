const CreatenewError = async(code , message)=>{
  const error = new Error();
  error.message = message;
  error.status = code;
  return error;
}
export default CreatenewError;