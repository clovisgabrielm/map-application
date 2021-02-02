import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
      avatar: '',
      email: '',
      first_name: '',
      last_name: ''
    },
    email: ''
  },
  getters: {
    getProfile: state => {
      return state.profile;
    },
    getEmail: state => {
      return state.email;
    }
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    logout(state) {
      state.profile = null;
      state.email = ''
    }
  },
  actions: {},
  modules: {}
});