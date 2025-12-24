import axios from "axios";
const Newrequest = axios.create({
    baseURL:"http://localhost:3000",
    timeout:30000,
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true
})
export default Newrequest;