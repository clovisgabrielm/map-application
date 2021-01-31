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
    async signUp(payload) {
        let r = await HTTPRequest
            .post("/register", payload)
            .then(response => {
                r = response.data;
            })
        return r;
    },
    async logout() {
        localStorage.clear();
    },
    
    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
}
 
export default AuthAPI;
 

