import Hyrequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
const hyrequest = new Hyrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors:{
    
  }
});
export default hyrequest;
