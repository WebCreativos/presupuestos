<template>
  <v-container class="pa-0">
    <div class="d-flex justify-space-between align-end  py-5">
      <h3 class="font-weight-bold">{{title}}</h3>
      <v-btn small outlined class="font-weight-bold body-2" v-if="bestProducts" tag="span"
        to="/products/?destacado=true&q=">
        Ver más
      </v-btn>
      <v-btn small outlined class="font-weight-bold body-2" v-else tag="span" to="/products/?q=">
        Ver más
      </v-btn>
    </div>
    <v-row>
      <v-col class="col-6" v-for="(product,index) in products" :key="product.id">
        <v-card flat class=" elevation-0 mr-3" :key="index" :to="`/products/single/${product.id}`">
          <v-card class="rounded-xl elevation-1">
            <v-img cover v-if="product.pictures.length>0" :src="imageUrl(product.pictures[0])"
              class="pa-2 heigh-vh-p width-vh-p">
              <div class=" d-flex justify-space-between align-start" style="height:100%">
                <v-chip small icon color="primary">
                  <span class="font-weight-bold mr-1">{{product.views}}</span>
                  <v-icon color="white" small>mdi-eye</v-icon>
                </v-chip>
                <v-chip small icon v-show="bestProducts" color="primary">
                  <v-icon size="15">fa-star</v-icon>
                </v-chip>
              </div>
            </v-img>
          </v-card>
          <v-card-text class="pl-0">
            <h3 class="black--text">{{product.name}}</h3>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>
  import moment from 'moment';
  export default {
    props: {
      bestProducts: Boolean,
      title: {
        type: String,
        default: 'Todos los anuncios'
      },
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
      imageUrl(picture) {
        if (picture.formats) {
          return (picture.formats.small) ? picture.formats.small.url : picture.formats.thumbnail.url

        } else {
          return `https://compraventa.nyc3.digitaloceanspaces.com/upload/${picture.hash}${picture.ext}`
        }
      },
    }

  }

</script>

<style scoped>
  .heigh-vh-p {
    height: calc(25vh);
  }

  .width-vh-p {
    width: calc(45vw);
  }

  .overflow {
    overflow: scroll;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

</style>
