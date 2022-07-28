<template>
  <v-app>
    <v-app-bar app  color="#3F51B5">
      <img src="/minilogo.png" width="36" />
      <v-spacer></v-spacer>
        <v-btn outlined @click="logout" class="white--text">SALIR</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
  import BottomNavigationBar from '~/components/BottomNavigationBar.vue'
  export default {
    middleware: 'auth',
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
      },
      async logout() {
        await this.$auth.logout()
        location.href="https://presupuestos.uy"
      }
    }
  }

</script>
