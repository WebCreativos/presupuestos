<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-12">
        <producto-carousel :slides="compra.announcement.pictures"></producto-carousel>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-rating class="d-flex justify-space-between" length="5" color="yellow lighten-1" v-model="compra.stars">
          <template v-slot:item="props">
            <div class="star rounded-lg grey lighten-4">
              <v-icon class="fas" :color="props.isFilled ? 'yellow darken-1' : 'grey lighten-2'" large
                @click="props.click">
                fa-star
              </v-icon>
            </div>
          </template>
        </v-rating>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-textarea rounded outlined name="input-7-4" label="Comentario" v-model="compra.comment">
        </v-textarea>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-btn class="pt-3 pb-3 elevation-0 white--text" height="50" color="primary" @click="setScoreAndComment()" rounded block>Enviar</v-btn>
      </v-col>
    </v-row>
    <v-snackbar color="primary" v-model="calificacionEnviada">Calificacion enviada!</v-snackbar>
  </v-container>
</template>

<script>
  import ProductoCarousel from "~/components/ProductoCarousel.vue"

  export default {
    layout: 'withBackButton',
    components: {
      ProductoCarousel
    },
    data() {
      return {
        compra: {
          announcement: {}
        },
        rating: 4.5,
        comentario: "",
        calificacionEnviada: false
      }
    },
     created() {
      this.$store.dispatch('general/setTitlePage', 'Calificar')
      this.$store.dispatch('general/setShowBottomBar', false)
       this.getProduct()
   },
   methods: {
      getProduct() {
        this.$axios.get(`/compras/${this.$route.params.id_product}`)
          .then((data) => {
            this.compra = data.data
          })
      },
      setScoreAndComment() {
        this.$axios.put(`/compras/${this.$route.params.id_product}`,this.compra)
          .then((data) => {
            this.calificacionEnviada = true
            setTimeout(() => {
              this.$router.push("/")
            }, 3000);
          })

      }
    }

  }
</script>