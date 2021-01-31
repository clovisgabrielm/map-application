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
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-row>
        <v-col
          col="9"
          lg="9"
          md="6"
          sm="6"
        >
           <gmap-map
            :center="{lat: this.lat, lng: this.lng}"
            :zoom="16"
            style="width: 100%; height: 100vh; margin-top: 0.5em"
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
          lg="3"
          md="6"
          sm="6"
        >
          <v-card class="list-card col-12">
            <v-card-title>
              Busque locais próximos de você!
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
        { text: 'Hotel', value: 'motel' },
        { text: 'Igreja', value: 'church' },
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
        console.log("t", this.places)
      }).catch(error => {
        this.errorMsg = error.message;
        this.snackbar = true;
        console.log(error.message);
      });
    },
    changeType() {
      this.getPlaces(this.lat, this.lng);
    }
  }
};
</script>