import axios from 'axios';
 
const baseURL =  process.env.URL_API || "https://reqres.in/api";
 
// Axios config
const HTTPRequest = axios.create({
    baseURL: baseURL
});
 
export default HTTPRequest;

