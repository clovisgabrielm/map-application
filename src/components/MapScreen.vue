<template>
  <div>
      <v-snackbar
        v-model="snackbar"
        top
      >
        {{ errorMsg }}
        <template>
          <v-btn
            color="pink"
            text
            @click="snackbar = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <v-row>
        <v-col
          col="9"
          lg="8"
          md="8"
          sm="6"
        >
           <gmap-map
            :center="{lat: this.lat, lng: this.lng}"
            :zoom="16"
            class="google-map-container"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in places"
              :position="m.geometry.location"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map> 
        </v-col>
        <v-col
          col="3"
          lg="4"
          md="4"
          sm="6"
        >
          <v-card class="list-card col-12">
            <v-card-title>
              Locais próximos
            </v-card-title>
            <v-card-subtitle>
              Ao escolher um tipo no campo abaixo, serão exibidos locais em um raio de 5km.
            </v-card-subtitle>
            <v-select
              v-model="type"
              :items="items"
              item-text="text"
              item-value="value"
              label="Tipo do local"
              outlined
              v-on:change="changeType"
            ></v-select>
            <v-list
              nav
              dense
              style="max-height: 50vh"
              class="overflow-y-auto"
            >
              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item
                  v-for="(place, i) in places"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="'mdi-map-marker'"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="place.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="place.vicinity"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>
 
<script>
import "../assets/main.scss";
import HTTPRequest from "../api/axios-config";

export default {
  name: 'MapScreen',
  components: {
  },
  data () {
    return {
      type: "restaurant",
      items: [
        { text: 'Restaurante', value: 'restaurant' },
        { text: 'Bar', value: 'bar' },
        { text: 'Supermercado', value: 'supermarket' },
        { text: 'Cinema', value: 'cinema' },
        { text: 'Praia', value: 'beach' },
        { text: 'Clube', value: 'club' },
        { text: 'Cafeterias', value: 'cafe' },
        { text: 'Teatro', value: 'theater' },
        { text: 'Museu', value: 'museum' },
        { text: 'Boate', value: 'pubs' },
        { text: 'Universidade', value: 'university' },
        { text: 'Escola', value: 'school' },
        { text: 'Posto de gasolina', value: 'gasstation' }
      ],
      menu: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      radius: "5",
      lat: 0,
      lng: 0,
      errorMsg: "",
      snackbar: false,
      selectedItem: 0,
      places: [],
    }
  },
  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.getPlaces(this.lat, this.lng);
      }
    );
  },
  methods: {
    getPlaces(lat, lng) {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
              lat
            },${lng}&type=${this.type}&radius=${this.radius *
              1000}&key=AIzaSyDZkiASvelK1aD_el52h6BDv82yeS33CZk`;

      HTTPRequest.get(URL).then(response => {
        this.places = response.data.results;
      }).catch(error => {
        this.errorMsg = error.message;
        this.snackbar = true;
      });
    },
    changeType() {
      this.getPlaces(this.lat, this.lng);
    }
  }
};
</script>