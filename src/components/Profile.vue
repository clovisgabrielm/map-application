<template>
  <div class="profile-container">
    <v-snackbar
      v-model="snackbar"
      top
    >
      {{ message }}
      <template>
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          FECHAR
        </v-btn>
      </template>
    </v-snackbar>
    <v-card
      class="mx-auto"
      max-width="700"
      tile
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
              tile
            >
              <v-img :src="profile.avatar"></v-img>
            </v-avatar>
          </v-col>
          <v-col class="py-4">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">
                  <h2>{{ name }}</h2>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
      <v-card-text>
          <h2>
            <v-btn
              color="#ee675c"
              @click="enableEdition"
            >
              <div class="white-text">Editar perfil</div>
            </v-btn>
          </h2>
          <v-divider class="profile-divider" />
          <v-form
            ref="form"
          >
          <v-text-field
            name="first_name"
            v-model="profile.first_name"
            @input="cleanErrorMessage"
            label="Nome"
            required
            :disabled="view"
          ></v-text-field>
          <v-text-field
            name="last_name"
            v-model="profile.last_name"
            @input="cleanErrorMessage"
            label="Sobrenome"
            required
            :disabled="view"
          ></v-text-field>
          <v-text-field
            name="email"
            v-model="profile.email"
            @input="cleanErrorMessage"
            label="E-mail"
            required
            :disabled="view"
          ></v-text-field>
          <div class="erro-msg">{{ error }}</div>
          <v-btn
          color="primary"
            :disabled="allFieldsFilled"
            v-if="!view"
            @click="updateProfile"
          >
            <div class="white-text">Salvar</div>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>
 
<script>
import AuthAPI from "../api/auth";
import store from "../store/index";
import { mapMutations } from "vuex";

export default {
  name: 'Profile',
  data () {
    return {
      profile: {},
      name: '',
      view: true,
      error: '',
      message: '',
      snackbar: false,
      allFieldsFilled: true
    }
  },
  methods: {
    ...mapMutations([
      "setProfile"
    ]),
    cleanErrorMessage() {
      this.error = '';
      this.allFieldsFilled = (this.profile.first_name == '' || this.profile.email == '' || this.profile.last_name == '');
    },
    enableEdition() {
      this.view = false;
    },
    updateProfile() {
      // const payload = { id: this.profile.id, name: this.profile.first_name + " " + this.profile.last_name, email: this.profile.email };

      AuthAPI.updateProfile(this.profile).then(result => {
        store.commit("setProfile", result);
        this.profile = result;
        this.name = result.first_name;
        this.message = "O perfil foi atualizado.";
        this.view = true;
        this.snackbar = true;
      });      

    }
  },
  created() {
    this.profile = store.getters.getProfile;
    if (!this.profile.email) {
      AuthAPI.getLoggedUser().then(result => {
        store.commit("setProfile", result);
        this.profile = result;
        this.name = result.first_name;
      });
    }
  },
  
}
 
  
</script>
 
<style scoped>
 
</style>
 
 

