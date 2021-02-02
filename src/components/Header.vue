<template>
  <div>
    <v-app-bar
      dense
      fixed
      color="#abafb0"
      dark
    >
      <v-toolbar-title class="title">Places</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon 
              v-bind="attrs"
              @click="openMap"
              v-on="on"
            >
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </template>
          <span>Ver mapa</span>
        </v-tooltip>
        <!-- <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon 
              v-bind="attrs"
              @click="openFavs"
              v-on="on"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </template>
          <span>Locais favoritos</span>
        </v-tooltip> -->
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon 
              v-bind="attrs"
              @click="openProfile"
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <span>Ver perfil</span>
        </v-tooltip>
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
    openMap() {
      AuthAPI.isAuthenticated()
          .then(() => {
            this.$router.push("/");
          })
          .catch(err => console.error(`Não foi possível ir para o mapa. ${err}`));
    },
    openProfile() {
      AuthAPI.isAuthenticated()
          .then(() => {
            this.$router.push("/profile");
          })
          .catch(err => console.error(`Não foi possível ir para o mapa. ${err}`));
    },
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
 
 

