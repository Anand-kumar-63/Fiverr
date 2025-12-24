const CreatenewError = async(code , message)=>{
  const error = new Error();
  error.message = message;
  error.status = code;
  console.log(error);
  return error;
}
export default CreatenewError;