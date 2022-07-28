<template>
  <v-container class="pa-0">
    <div class="d-flex justify-space-between align-end py-5">
      <h3 class="font-weight-bold">Avisos destacados</h3>
      <v-btn small outlined class="font-weight-light body-2" to="/products/">Ver más</v-btn>
    </div>

    <div class="d-flex full-width overflow">
      <v-card v-for="(product,index) in products" class=" elevation-0 rounded-xl mr-3" :key="index"
        :to="`/products/single/${product.id}`">
        <v-img contain v-if="product.pictures.length>0" :src="$axios.defaults.baseURL + product.pictures[0].url"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" class="pa-2 heigh-vh-p width-vh-p ">
          <h3 class="white--text">{{product.name}}</h3>
        </v-img>
      </v-card>
    </div>
  </v-container>
</template>

<script>
  import moment from 'moment';
  export default {
    props: {
      products: Array
    },
    data() {
      return {

      }
    },
    methods: {
      formatDate(date) {
        return moment(date).locale("es").fromNow()
      },
    }

  }

</script>

<style scoped>
  .heigh-vh-p {
    height: calc(100vh / 6);
  }

  .width-vh-p {
    width: calc(100vw * 0.7);
  }

  .overflow {
    overflow: scroll;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

</style>
