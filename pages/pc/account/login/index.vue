<template>
  <v-container class="d-flex flex-column justify-space-between align-center full-height ">
    <h1 class="mb-3">Bienvenidos</h1>
    <p class="text-center mb-5">Inicie sesion con su correo electronico y contraseña o continuar con las redes sociales
    </p>
    <v-form class="full-width mt-5 pl-5 pr-5" ref="form" v-model="valid">
      <v-text-field name="email" label="Email" placeholder="Ingrese su email" id="email" :rules="rules.emailValidator"
        type="email" v-model="user.email" append-icon="mdi-email-outline" required outlined rounded></v-text-field>

      <v-text-field name="pass" label="Contraseña" placeholder="Ingrese su password" v-model="user.password" id="pass"
        :rules="rules.passValidator" type="password" :append-icon="show1 ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
        :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" required rounded outlined></v-text-field>

      <div class="d-flex justify-space-between align-center">
        <v-checkbox v-model="recordarme" label="Recordarme"></v-checkbox>
        <router-link tag="span" class="text-right caption" to='/account/olvide-contrasena'>Se me olvido la contraseña
        </router-link>
      </div>
    </v-form>
    <div class=" full-width white--text mb-auto pa-5">
      <v-btn class="white--text rounded-lg font-weight-light" color="primary" depressed large block
        @click="login()">Continuar</v-btn>
    </div>
    <div>
      <v-spacer></v-spacer>
      <div>
        <v-avatar size="40" color="blue-grey lighten-5">
          <v-avatar size="30">
            <img src="facebook.png">
          </v-avatar>
        </v-avatar>
        <v-avatar size="40" color="blue-grey lighten-5">
          <v-avatar size="30">
            <img src="google.png">
          </v-avatar>
        </v-avatar>
        <v-avatar size="40" color="blue-grey lighten-5">
          <v-avatar size="30">
            <img src="twitter.png">
          </v-avatar>
        </v-avatar>
      </div>
      <v-spacer></v-spacer>
    </div>
    <p class="mt-3">
      ¿No tienes cuenta? <span class="orange--text" @click="$router.push('/account/registro')">Registrate</span>
    </p>
  </v-container>
</template>

<script>
  export default {
    layout: 'withBackButton',
    data() {
      return {
        show1: false,
        valid: false,
        recordarme: false,
        user:{},
        rules:{
        emailValidator: [
          v => !!v || 'Email es requerido',
        ],
        passValidator: [
          v => !!v || 'Contraseña es requerida',
        ],
        },
      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage','Iniciar sesion')
      this.$store.dispatch('general/setShowBottomBar',false)
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith("local", {
            data: {
              identifier: this.user.email,
              password: this.user.password
            }
          })
          return this.$router.push('/pc/account/user/products')

        } catch (e) {
        }
      }
    }
  }

</script>
