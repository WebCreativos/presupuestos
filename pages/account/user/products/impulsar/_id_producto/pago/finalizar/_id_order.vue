<template>
  <v-container class="d-flex align-center justify-center finish-container">
    <v-card v-if="order.status == 'rejected'">
      <v-toolbar color="red" class="elevation-0">
        <v-toolbar-title class="white--text">
          Hubo un error
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column justify-center">
        <v-icon color="red" class="icon">fa-times</v-icon>
        <p>Tu publicacion fue rechazada, revisa nuevamente los datos de tu tarjeta y vuelve a intentarlo</p>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/" outlined block>IR AL INICIO&nbsp;<v-icon>mdi-home</v-icon></v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-else-if="order.status == 'approved'">
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
    <v-card v-else>
      <v-toolbar color="yellow darken-3" class="elevation-0">
        <v-toolbar-title class="white--text">
          En espera
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text class="d-flex flex-column justify-center">
        <v-icon color="yellow darken-3" class="icon">mdi-clock</v-icon>
        <p>Tu compra esta siendo revisada, te avisaremos a la brevedad!</p>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/" outlined block>IR AL INICIO&nbsp;<v-icon>mdi-home</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
  export default {
    layout:'withBackButton',
    data() {
      return {
        order: {
        },
      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Tu orden')
      this.getOrder()
    },
    methods: {
      getOrder() {
        this.$axios.get(`/orders/${this.$route.params.id_order}`)
          .then((data)=>{
            this.order = data.data
          })
      }
    }
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
