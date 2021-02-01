<template>
<div>
    <Header />
    <v-row>
        <!-- <v-col
            cols="5"
            sm="5"
            md="5"
            lg="2"
        >
            <SideNavigation />
        </v-col> -->
        <v-col
            cols="12"
            
        >

            <section>
                <router-view />
            </section>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import Header from "./Header";
// import SideNavigation from "./SideNavigation";

export default {
  name: 'Layout',
  components: {
    Header,
    // SideNavigation
  }
};
</script>