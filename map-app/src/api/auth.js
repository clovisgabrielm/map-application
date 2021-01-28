import HTTPRequest from './axios-config';
 
const AuthAPI = {
    async login(payload) {
        let response = await HTTPRequest
            .post("/login", payload)
            .then(response => {
                response = response.data;
                localStorage.setItem('token', response.token);
            });
        return response;
    },
    async logout() {
        localStorage.clear();
    },
    
    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
}
 
export default AuthAPI;
 

