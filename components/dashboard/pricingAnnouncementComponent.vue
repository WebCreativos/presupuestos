<template>
  <v-dialog v-model="value" persistent>
    <v-card>
      <v-toolbar color="primary elevation-0">
        <v-btn icon @click="$emit('input', false)">
          <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
        <v-toolbar-title class="white--text">Tipo de publicacion</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/create`">
            <h4 class="text-center mb-2">Gratis</h4>
            <h1 class="text-center mb-2 secondary--text">$ 0</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">15 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>
        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/create/?type=1`">
            <h4 class="text-center mb-2">1 mes</h4>
            <h1 class="text-center mb-2 secondary--text">$ 150</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">30 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>

        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/create/?type=3`">
            <h4 class="text-center mb-2">3 meses</h4>
            <h1 class="text-center mb-2 secondary--text">$ 300</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">90 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>
        <v-col class="col-12">
          <v-card class="py-6 gradient-box" :to="`/account/user/products/create/?type=6`">
            <h4 class="text-center mb-2">6 meses</h4>
            <h1 class="text-center mb-2 secondary--text">$ 450</h1>
            <p class="text-center mb-2 secondary--text font-weight-bold">180 dias</p>
            <p class="text-center mb-2">Costo por anuncio</p>
          </v-card>
        </v-col>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: {
      value: Boolean
    }
  }

</script>
