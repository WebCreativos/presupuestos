<template>
  <v-container>
    <v-card flat>
          <img src="/presupuestos.gif" width="100%">
    </v-card>
    <bannerSell></bannerSell>
    <todos-los-anuncios title="Avisos destacados" bestProducts :products="bestProducts"></todos-los-anuncios>
    <todos-los-anuncios :products="allProducts"></todos-los-anuncios>
  </v-container>
</template>

<script>
  import AvisosDestacados from '../components/AvisosDestacados.vue'
  import TodosLosAnuncios from '../components/TodosLosAnuncios.vue'
  import bannerSell from '~/components/bannerSell.vue'
  import axios from 'axios'

  export default {
    components: {
      AvisosDestacados,
      TodosLosAnuncios,
      bannerSell
    },
    data() {
      return {
        bestProducts: [],
        allProducts: [],
      }
    },
    created() {
      this.getBests()
      this.getAll()
    },
    methods: {
      getBests() {
        axios.get('http://app.presupuestos.uy/api/announcements/?rand=true')
          .then((data) => {
            this.bestProducts = data.data
          })
      },
      getAll() {
        axios.get('http://app.presupuestos.uy/api/announcements/?rand=true')
          .then((data) => {
            this.allProducts = data.data
          })
      }
    }
  }

</script>

<style scoped>
  .bottomBarHeight {
    height: 70px;
  }

</style>
