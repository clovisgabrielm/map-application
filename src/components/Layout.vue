<template>
<div>
    <Header />
    <v-row class="v-container">
        <v-col cols="12">
            <section>
                <router-view />
            </section>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: 'Layout',
  components: {
    Header
  }
};
</script>