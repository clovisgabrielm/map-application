import HTTPRequest from './axios-config';
import store from "../store/index";
 
const AuthAPI = {
    async login(payload) {
        let response = await HTTPRequest
            .post("/login", payload)
            .then(response => {
                response = response.data;
                const { email } = payload;

                localStorage.setItem('token', response.token);
                localStorage.setItem('email', email);
                store.commit('setEmail', email);
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
    async getLoggedUser() {
        const email = store.getters.getEmail || localStorage.getItem('email');

        let loggedUser = await HTTPRequest
            .get("/users?per_page=13")
            .then(response => {
                let users = response.data.data;

                if (users) {
                    loggedUser = users.find(user => user.email === email);
                    return loggedUser;
                }
                
            })

        return loggedUser;
    },
    async updateProfile(payload) {
        const { id, email, first_name, last_name, avatar } = payload;
        let r = await HTTPRequest
            .put(`/users/${id}`, { email: email, first_name: first_name, last_name: last_name, avatar: avatar })
            .then(response => {
                r = response.data;
                return r;
            })
        return r;
    },
    async logout() {
        localStorage.clear();
        store.commit("logout");
    },
    async isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
}
 
export default AuthAPI;
 

