<template>
  <v-container class="d-flex align-center justify-center finish-container">
    <v-card>
      <v-toolbar color="primary" class="elevation-0">
        <v-toolbar-title class="white--text">
          Felicitaciones!
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column justify-center">
        <v-icon color="success" class="icon">mdi-checkbox-marked-circle</v-icon>
        <p>Tu publicacion ha sido impulsada!</p>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/" outlined block>IR AL INICIO&nbsp;<v-icon>mdi-home</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
  import axios from 'axios'
  export default {
    components: {},
    data() {
      return {
        openModal: false,
        publicidad: {},
      }
    },
    created() {},
    methods: {}
  }

</script>


<style scoped>
  h1 {
    color: rgba(0, 0, 0, 0.87) !important;
    font-size: 24px !important;
  }

  .finish-container {
    height: calc(100vh - 95px)
  }

  .img-producto {
    height: 100px;
    width: 100px;
  }

  .icon {
    font-size: 70px;
  }

  .list-price {
    float: right;
    background: #80808026;
    width: 100%;
  }

</style>
<style>
  .v-data-table__empty-wrapper {
    display: none
  }

</style>
