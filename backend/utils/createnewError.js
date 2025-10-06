export const CreatenewError = async(code , message)=>{
  const error = new Error();
  error.message = message;
  error.status = 400;
  next(error);
}