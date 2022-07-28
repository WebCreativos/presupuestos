<template>
  <v-container class="d-flex flex-column justify-space-between align-center full-height ">

    <v-form class="full-width mt-5" ref="form" v-model="valid">
      <v-stepper v-model="stepForm" class="elevation-0">
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field name="email" background-color="grey lighten-3" readonly label="Email" placeholder="Ingrese su email" 
              :rules="rules.requerido" type="email" class="pt-2" v-model="user.email"
              append-icon="mdi-email-outline"  outlined rounded>
            </v-text-field>
            <v-text-field name="nombre" label="Nombre" class="pt-2" placeholder="Ingrese su nombre"
              v-model="user.first_name" :rules="rules.requerido" type="text" append-icon="mdi-account" 
              rounded outlined></v-text-field>
            <v-text-field name="apellido" label="Apellido" placeholder="Ingrese su apellido"
              v-model="user.last_name" :rules="rules.requerido" type="text" append-icon="mdi-account" 
              rounded outlined>
            </v-text-field>

            <v-text-field name="celular" label="Celular"  placeholder="Ingrese su celular"
              v-model="user.phone" :rules="rules.requerido" type="number" append-icon="mdi-cellphone" 
              rounded outlined></v-text-field>

            <v-text-field name="direccion" label="Direccion"  placeholder="Ingrese su direccion"
              v-model="user.address" :rules="rules.requerido" type="text" append-icon="mdi-map-marker" 
              rounded outlined>
            </v-text-field>
            <v-btn class="white--text rounded-lg font-weight-light" depressed large color="primary" block
              @click="registerAccount()">Continuar
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>

    </v-form>
    <v-snackbar color="success" v-model="infoUpdated">
        Informacion actualizada con exito
    </v-snackbar>
  </v-container>
</template>

<script>
  export default {
    layout: 'withBackButton',
    data() {
      return {
        infoUpdated: false,
        user: this.$auth.user,
        rules: {
          requerido: [value => !!value || "Requerido."],
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "El mail no es valido.";
          }
        },

      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Tu informacion')
      this.$store.dispatch('general/setShowBottomBar', false)
    },
    methods: {
      async registerAccount() {
        if(!this.$refs.form.validate()) {
            return
        }
        this.$axios.put(`/users/${this.$auth.user.id}/`, this.user)
          .then(() => {
              this.infoUpdated = true 
              setTimeout(() => {
                  this.$router.go(-1)
              }, 3000);
          })
      }
    }
  }
</script>