<template>
  <v-app>
    <v-app-bar app  class="elevation-0" color="secondary">
      <v-text-field name="search" @keyup.enter="searchProducts()" v-model="search" placeholder="Buscar" id="search"
        outlined dense hide-details background-color="blue-grey lighten-5 rounded-lg" prepend-inner-icon="mdi-magnify">
      </v-text-field>
      <v-spacer></v-spacer>
      <router-link to="/">
        <img src="/minilogo.png" width="36" />
      </router-link>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <bottom-navigation-bar></bottom-navigation-bar>
  </v-app>
</template>

<script>
  import BottomNavigationBar from '~/components/BottomNavigationBar.vue'
  export default {
    //middleware: 'auth',
    components: {
      BottomNavigationBar
    },
    data() {
      return {
        search: ''
      }
    },
    methods: {
      searchProducts() {
        this.$router.push('/products/?q=' + this.search)
      }
    }
  }

</script>
