<template>
  <div>
      <v-row>
        <v-col
          class="d-flex"
          cols="3"
          lg="3"
          sm="6"
        >
          <v-card class="col-12 list-card">
            <v-select
              v-model="type"
              :items="items"
              item-text="text"
              item-value="value"
              label="Tipo"
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
        <v-col
          class="d-flex"
        >
          <gmap-map
            :center="{lat: this.lat, lng: this.lng}"
            :zoom="16"
            style="width: 100%; height: auto;"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in places"
              :position="m.geometry.location"
              @click="center=m.position"
            ></gmap-marker>
          </gmap-map>  
        </v-col>
      </v-row>
  </div>
</template>
 
<script>
import "../assets/main.scss";
import axios from "axios";

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
        { text: 'Hotel', value: 'hotel' },
        { text: 'Igreja', value: 'church' },
      ],
      radius: "5",
      lat: 0,
      lng: 0,
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
      }
    );
  },
  methods: {
    changeType() {
      console.log("chamou")
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
              this.lat
            },${this.lng}&type=${this.type}&radius=${this.radius *
              1000}&key=AIzaSyDZkiASvelK1aD_el52h6BDv82yeS33CZk`;

      axios.get(URL).then(response => {
        this.places = response.data.results;
        console.log("t", this.places)
      }).catch(error => {
        console.log(error.message);
      });
    }
  }
};
</script>