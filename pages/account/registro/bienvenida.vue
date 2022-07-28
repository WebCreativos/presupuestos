<template>
  <v-container fill-height>
    <v-stepper v-model="stepper" class="elevation-0 fill-height">
      <v-stepper-items class="fill-height">
        <v-stepper-content step="1">
          <v-card flat class="mb-16">
            <v-card-text style="height: 85vh;">
              <v-row>
                <v-col class="col-12 col-md-12">
                  <v-img src="/logo.png"></v-img>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-img src="/bienvenida/1.jpg"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn block large depressed class="rounded-lg" @click="stepper=2" color="primary">CONTINUAR</v-btn>
            </v-card-actions>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card flat class="mb-16" >
            <v-card-text style="height: 85vh;">
              <v-row>
                <v-col class="col-12 col-md-12">
                  <v-img src="/logo.png"></v-img>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-img src="/bienvenida/2.png"></v-img>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn block large depressed class="rounded-lg" @click="stepper=3" color="primary">CONTINUAR</v-btn>
            </v-card-actions>
          </v-card>

        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card flat class="mb-16" >
            <v-card-text style="height: 85vh;">
              <v-row>
                <v-col class="col-12 col-md-12">
                  <img src="/bienvenida/3.png" width="100%">

                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn block large depressed class="rounded-lg" @click="stepper = 4" color="primary">CONTINUAR</v-btn>
            </v-card-actions>
          </v-card>

        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card flat class="mb-16" >
            <v-card-text style="height: 85vh;">
              <v-row>
                <v-col class="col-12 col-md-12">
                  <img src="/bienvenida/4.jpg" width="100%">
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn block large depressed class="rounded-lg" @click="stepper=5" color="primary">CONTINUAR</v-btn>
            </v-card-actions>
          </v-card>

        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card flat class="mb-16" >
            <v-card-text style="height: 85vh;">
              <v-row>
                <v-col class="col-12 col-md-12">
                  <img src="/bienvenida/5.jpg" width="100%">
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn block large depressed class="rounded-lg" color="primary" to="/" >EMPEZAR A COMPRAR</v-btn>
            </v-card-actions>
          </v-card>

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
        stepper: 3,
      }
    }
  }
</script>