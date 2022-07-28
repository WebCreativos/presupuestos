<template>
  <v-app>
    <v-app-bar color="white" class="elevation-0">
      <v-text-field name="search" placeholder="Buscar" id="search" outlined dense hide-details
        background-color="blue-grey lighten-5 rounded-lg" prepend-inner-icon="mdi-magnify"></v-text-field>

      <v-btn fab class="elevation-0 ml-1" small color="blue-grey lighten-5">
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
      <v-btn fab class="elevation-0 ml-1" small color="blue-grey lighten-5">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>
    <bottom-navigation-bar></bottom-navigation-bar>
  </v-app>
</template>

<script>
  import BottomNavigationBar from '../components/BottomNavigationBar.vue'
  export default {
    //middleware: 'auth',
    components: {
      BottomNavigationBar
    }
  }

</script>
