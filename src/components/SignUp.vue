<template>
  <v-card height="100%" width="100%" flat class=" pa-4 background"> 
    <v-snackbar
      v-model="snackbar"
      top
    >
      {{ message }}
      <template>
        <v-btn
          color="white"
          text
          @click="goToLoginPage"
        >
          Ir para login
        </v-btn>
      </template>
    </v-snackbar>
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
          <h2><strong>Cadastre-se</strong></h2>
        </div>
        <v-text-field
          name="name"
          v-model="name"
          @input="cleanErrorMessage"
          label="Nome"
          required
        ></v-text-field>
        <v-text-field
          name="email"
          v-model="email"
          type="email"
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
        <v-text-field
          name="confirmPassword"
          v-model="confirmPassword"
          @input="cleanErrorMessage"
          type="password"
          label="Confirmar senha"
          required
        ></v-text-field>
        <div class="erro-msg">{{ error }}</div>
        <v-btn
          color="#ee675c"
          height="45px"
          class="btn-login"
          :disabled="allFieldsFilled"
          @click="signUp"
        >
          <div class="white-text">Cadastrar</div>
        </v-btn>
        <div class="sign-up"><a href="../login">Voltar para login</a></div>
      </v-form>
    </v-card>
  </v-card>
</template>
 
<script>
import "../assets/main.scss";
import AuthAPI from "../api/auth";

export default {
  name: 'SignUp',
  components: {
    
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      snackbar: false,
      allFieldsFilled: true,
      error: '',
      message: "",
    }
  },
  methods: {
    cleanErrorMessage() {
      this.error = '';
      this.allFieldsFilled = (
        this.name == '' ||
        this.email == '' ||
        this.password == '' ||
        this.confirmPassword == ''
      );
    },
    initialStates() {
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.error = "";
    },
    goToLoginPage() {
      this.$router.push("/login");
    },
    signUp() {
      if (this.password !== this.confirmPassword) {
        this.error = 'As senhas devem ser iguais.';
      } else if (this.password.length < 6) {
        this.error = 'A senha deve conter pelo menos 6 caracteres.';
      } else {
        AuthAPI.signUp({ email: this.email, password: this.password})
          .then(() => {
            this.snackbar = true;
            this.message = "Cadastro realizado com sucesso.";
            this.initialStates();
          })
          .catch(err => {
            console.error(`${err}`);
            this.error = "Erro: apenas usuários definidos podem ser cadastrados.";
          });
      }
    }
  }
};
</script>