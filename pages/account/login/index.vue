<template>
  <v-container class="d-flex flex-column justify-space-between align-center full-height ">
    <v-row>
      <v-col class="col-12 col-md-12 d-flex align-center flex-column">
        <h1 class="mb-3">Bienvenidos</h1>
        <p class="text-center mb-5">Inicie sesion con su correo electronico y contraseña o continuar con las redes
          sociales
        </p>

      </v-col>
      <v-col class="col-12 col-md-12">
        <v-form class="full-width mt-5 pl-5 pr-5" ref="form" v-model="valid">
          <v-text-field name="email" label="Email" placeholder="Ingrese su email" id="email"
            :rules="rules.emailValidator" type="email" v-model="user.email" append-icon="mdi-email-outline" required
            outlined rounded></v-text-field>

          <v-text-field name="pass" label="Contraseña" placeholder="Ingrese su password" v-model="user.password"
            id="pass" :rules="rules.passValidator" type="password"
            :append-icon="show1 ? 'mdi-lock-open-outline' : 'mdi-lock-outline'" :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1" required rounded outlined></v-text-field>

          <div class="d-flex justify-space-between align-center">
            <v-checkbox v-model="recordarme" label="Recordarme"></v-checkbox>
            <router-link tag="span" class="text-right caption" to='/account/olvide-contrasena'>Se me olvido la
              contraseña
            </router-link>
          </div>
        </v-form>
        <div class=" full-width white--text mb-auto pl-5 pr-5">
          <v-btn class="white--text rounded-lg font-weight-light" color="primary" depressed large block
            @click="login()">Continuar</v-btn>
        </div>
      </v-col>
      <v-col class="col-12 col-md-12 d-flex align-center flex-column">
        <router-link to="/account/registro" tag="p">
          ¿No tienes cuenta? <span class="orange--text">Registrate</span>
        </router-link>
      </v-col>
    </v-row>
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
        user: {},
        rules: {
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
      this.$store.dispatch('general/setTitlePage', 'Iniciar sesion')
      this.$store.dispatch('general/setShowBottomBar', false)
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
          return this.$router.push('/')

        } catch (e) {}
      }
    }
  }

</script>
