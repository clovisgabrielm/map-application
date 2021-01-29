<template>
  <v-card height="100%" width="100%" flat class=" pa-4 background"> 
    <v-card
      elevation="2"
      outlined
      class="centered login-card"
      tile
    >
      <v-form
        ref="form"
        class="login-form"
      >
        <div class="title-login">
          <h1><strong>Login</strong></h1>
        </div>
        <v-text-field
          name="email"
          v-model="email"
          @input="cleanErrorMessage"
          label="E-mail"
          required
        ></v-text-field>
  
        <v-text-field
          name="password"
          v-model="password"
          @input="cleanErrorMessage"
          type="password"
          label="Senha"
          required
        ></v-text-field>
        <div class="erro-msg">{{ error }}</div>
        <v-btn
          color="#ee675c"
          height="45px"
          class="btn-login"
          @click="login"
        >
          <div class="white-text">Entrar <v-icon>mdi-map-marker</v-icon></div>
        </v-btn>
        <div class="sign-up">Não tem conta? <a href="../signUp">Cadastre-se</a></div>
      </v-form>
    </v-card>
    
  </v-card>
</template>
 
<script>
import "../assets/main.scss";
import AuthAPI from "../api/auth";

export default {
  name: 'Login',
  components: {
    
  },
  data () {
    return {
      email: '',
      password: '',
      checkbox: '',
      error: ''
    }
  },
  methods: {
    cleanErrorMessage() {
      this.error = '';
    },
    login() {
      AuthAPI.login({ email: this.email, password: this.password})
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => {
            console.error(`Não foi possível fazer login. ${err}`);
            this.error = 'E-mail e/ou senha incorretos.';
          });
    }
  }
};
</script>