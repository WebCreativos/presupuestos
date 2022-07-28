<template>
  <v-container>
    <v-row>
        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/impulsar/${idProduct}/pago/?type=1`">
            <h4 class="text-center mb-2">1 mes</h4>
            <h1 class="text-center mb-2 secondary--text">$ 150</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">30 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>

        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/impulsar/${idProduct}/pago/?type=3`">
            <h4 class="text-center mb-2">3 meses</h4>
            <h1 class="text-center mb-2 secondary--text">$ 300</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">90 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>
        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/impulsar/${idProduct}/pago/?type=6`">
            <h4 class="text-center mb-2">6 meses</h4>
            <h1 class="text-center mb-2 secondary--text">$ 450</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">180 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>
      <!--
          <v-col class="col-12 col-md-12">
            <v-card height="150" style="background:linear-gradient(to right, #56ab2f, #a8e063)">
              <v-card-text class="d-flex justify-center align-center" style="height:150px">
                <h2 class="white--text">FACTURACION</h2>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col class="col-12 col-md-12">
              <v-btn block class="white--text font-weight-bold" large @click="disconnect()" color="red">DESCONECTARSE</v-btn>
          </v-col>
          -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'withBackButton',
    data() {
        return {
            idProduct:this.$route.params.id_producto
        }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Elige tu plan')
      this.$store.dispatch('general/setShowBottomBar', false)
    },
  }

</script>

<style lang="scss" scoped>
  .gradient-box {

    $border: 5px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -$border;
      /* !importanté */
      border-radius: inherit;
      /* !importanté */
      background: linear-gradient(to right, red, orange);
    }
  }

</style>
