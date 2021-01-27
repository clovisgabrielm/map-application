<template>
  <div>
    <v-app-bar
      color="#abafb0"
      dark
    >
      <v-toolbar-title class="title">Map Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          depressed
          color="#1f2e2e"
          class="title"
          to="/"
        >
          Clientes
        </v-btn>
        <v-btn
          depressed
          color="#1f2e2e"
          class="title"
          to="/Usuarios"
        >
          Usuários
        </v-btn>
        
        <v-btn
          icon
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
 
<script>
 
 
export default {
  name: 'Header',
  data () {
    return {
      mostrar: false
    }
  },
  methods: {
    logout() {
    //   AuthAPI.logout()
    //       .then(() => {
    //         this.mostrar = false;
    //         this.$router.push("/Login");
    //       })
    //       .catch(err => console.error(`Não foi possível fazer login. ${err}`));
    },
  },
  
}
 
  
</script>
 
<style scoped>
 
</style>
 
 

