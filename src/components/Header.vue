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
import AuthAPI from "../api/auth";
 
export default {
  name: 'Header',
  data () {
    return {
      mostrar: false
    }
  },
  methods: {
    logout() {
      AuthAPI.logout()
          .then(() => {
            this.mostrar = false;
            this.$router.push("/login");
          })
          .catch(err => console.error(`Não foi possível fazer logout. ${err}`));
    },
  },
  
}
 
  
</script>
 
<style scoped>
 
</style>
 
 

