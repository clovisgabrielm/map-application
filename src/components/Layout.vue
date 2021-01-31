<template>
<div>
    <Header />
    <v-row>
        <v-col
            cols="3"
            sm="4"
            md="4"
            lg="1"
        >
            <SideNavigation />
        </v-col>
        <v-col
            cols="9"
            sm="8"
            md="8"
            lg="11"
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
import SideNavigation from "./SideNavigation";

export default {
  name: 'Layout',
  components: {
    Header,
    SideNavigation
  }
};
</script>