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
          @input="limparMsgErro"
          label="E-mail"
          required
        ></v-text-field>
  
        <v-text-field
          name="senha"
          v-model="senha"
          @input="limparMsgErro"
          type="password"
          label="Senha"
          required
        ></v-text-field>
        <div class="erro-msg">{{ erro }}</div>
        <v-btn
          color="#ee675c"
          height="45px"
          class="btn-login"
          @click="login"
        >
          <div class="white-text">Entrar <v-icon>mdi-map-marker</v-icon></div>
        </v-btn>
      </v-form>
    </v-card>
    
  </v-card>
</template>
 
<script>
import "../assets/main.scss";

export default {
  name: 'Login',
  components: {
    
  },
  data () {
    return {
      email: '',
      senha: '',
      checkbox: '',
      erro: ''
    }
  },
  methods: {
    limparMsgErro() {
      this.erro = '';
    },
    login() {
      this.$router.push("/");
      // AuthAPI.login({ email: this.email, senha: this.senha})
      //     .then(() => {
      //       this.$router.push("/");
      //     })
      //     .catch(err => {
      //       console.error(`Não foi possível fazer login. ${err}`);
      //       this.erro = 'E-mail e/ou senha incorretos.';
      //     });
    },
    // mounted() {
    //   eventBus.$emit("mostrarItensMenu");
    // }
  }
};
</script>