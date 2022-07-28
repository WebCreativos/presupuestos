<template>
  <v-app>
    <v-app-bar app class="elevation-0 navbar-back" color="primary">
      <v-btn icon small @click="$router.go(-1)">
        <v-icon color="white">mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="overline white--text">{{titlePage}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <bottom-navigation-bar v-if="showBottomBar"></bottom-navigation-bar>
  </v-app>
</template>

<script>
  import bottomNavigationBar from '~/components/BottomNavigationBar.vue'
  export default {
    components: {
      bottomNavigationBar
    },
    computed: {
      titlePage() {
        return this.$store.getters['general/titlePage']
      },
      showBottomBar() {
        return this.$store.getters['general/showBottomBar']
      }

    }
  }
</script>

<style scoped>
.navbar-back .v-toolbar__content {
    border-bottom: 1px solid #63636317;
}

</style>