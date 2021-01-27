
<template>
  <div class="side-nav col-12">
    <v-navigation-drawer
        permanent
    >
    <v-list>
        <v-list-item class="px-2">
        <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
        </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
        <v-list-item-content>
            <v-list-item-title class="title">
            Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
        nav
        dense
    >
        <v-list-item link>
        <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Ver perfil</v-list-item-title>
        </v-list-item>
        <v-list-item link>
        <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Locais favoritos</v-list-item-title>
        </v-list-item>
       
    </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import "../assets/main.scss";
 
export default {
  name: 'SideNavigation'
}
 
  
</script>
 