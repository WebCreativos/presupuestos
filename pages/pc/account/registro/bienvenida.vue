<template>
  <v-container fill-height>
    <v-stepper v-model="stepper" class="elevation-0 fill-height">
      <v-stepper-items class="fill-height">
        <v-stepper-content step="1">
          <v-card flat class="mb-16" height="450">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-12">
                  <v-img src="/logo.png"></v-img>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-img src="/bienvenida/1.png"></v-img>

                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn block large depressed class="rounded-lg" @click="stepper=2" color="primary">CONTINUAR</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card flat class="mb-16" height="450">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-12">
                  <v-img src="/logo.png"></v-img>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-img src="/bienvenida/2.png"></v-img>

                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn block large depressed class="rounded-lg" @click="stepper=3" color="primary">CONTINUAR</v-btn>

        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card flat class="mb-16" height="450">
            <v-card-text>
              <v-row>
                <v-col class="col-12 col-md-12">
                  <v-img src="/logo.png"></v-img>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-img src="/bienvenida/3.png"></v-img>

                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn block large depressed class="rounded-lg" to="/pc/account/user/products" color="primary">EMPEZAR A COMPRAR</v-btn>

        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
  export default {
    layout: 'empty',
    data() {
      return {
        stepper: 1,
      }
    }
  }
</script>