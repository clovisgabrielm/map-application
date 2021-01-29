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
        let { name, email, password } = payload;
        await HTTPRequest
            .post("/users", { name, email, password })
            .then(() => {
                HTTPRequest
                .post("/register", { email, password })
                .then(response => {
                    response = response.data;   
                    
                return response;        
                });
            });
        return {};
    },
    async logout() {
        localStorage.clear();
    },
    
    isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
}
 
export default AuthAPI;
 

