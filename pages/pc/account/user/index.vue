<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-12">
        <v-card height="150" style="background:linear-gradient(to right, #5464c0, #20318d)" to="/account/user/products/">
          <v-card-text class="d-flex justify-center align-center" style="height:150px">
            <h2 class="white--text">COMPRAS / VENTAS</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-12">
        <v-card height="150" style="background:linear-gradient(to right,  #ff9872, #ac3c13)" to="/account/user/info">
          <v-card-text class="d-flex justify-center align-center" style="height:150px">
            <h2 class="white--text">MI INFORMACION</h2>
          </v-card-text>

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
    layout:'withBackButton',
    methods: {
        async disconnect() {
            await this.$auth.logout()
            this.$router.push('/')
        }
    },
    created() {
        this.$store.dispatch('general/setTitlePage', 'Mi cuenta')
        this.$store.dispatch('general/setShowBottomBar', true)
    }
}
</script>