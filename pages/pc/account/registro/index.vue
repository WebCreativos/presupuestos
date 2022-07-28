<template>
  <v-container class="d-flex flex-column justify-space-between align-center full-height ">
    <div v-if="stepForm == 1">
      <h1 class="mb-3 text-center">Registrar Cuenta</h1>
      <p class="text-center mb-5">Complete sus datos o continue con las redes sociales</p>
    </div>
    <div v-else>
      <h1 class="mb-3 text-center">Completar Perfil</h1>
      <p class="text-center mb-5">Complete sus datos</p>
    </div>

    <v-form class="full-width mt-5" ref="form" v-model="valid">
      <v-stepper v-model="stepForm" class="elevation-0">
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field name="email" label="Email" placeholder="Ingrese su email" id="email"
              :rules="rules.emailValidator" type="email" class="pt-2" v-model="user.email"
              append-icon="mdi-email-outline" required outlined rounded>
            </v-text-field>

            <v-text-field name="pass" label="Contraseña" placeholder="Ingrese su password" v-model="user.password"
              id="pass" :rules="rules.passValidator" type="password"
              :append-icon="show1 ? 'mdi-lock-open-outline' : 'mdi-lock-outline'" :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1" required rounded outlined>
            </v-text-field>
            <v-text-field name="pass" label="Confirmar contraseña" placeholder="Vuelva a ingresar su contraseña"
              v-model="user.passConfirmation" id="passConfirmation" :rules="rules.passConfirmationValidator"
              type="password" :append-icon="show1 ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
              :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" required rounded outlined>
            </v-text-field>
            <v-btn class="white--text rounded-lg font-weight-light" depressed large color="primary" block
              @click="stepForm = 2">Continuar
            </v-btn>

          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field name="nombre" label="Nombre" class="pt-2" id="nombre" placeholder="Ingrese su nombre"
              v-model="user.first_name" :rules="rules.nombreRules" type="text" append-icon="mdi-account" required
              rounded outlined></v-text-field>

            <v-text-field name="apellido" label="Apellido" id="apellido" placeholder="Ingrese su apellido"
              v-model="user.last_name" :rules="rules.apellidoRules" type="text" append-icon="mdi-account" required
              rounded outlined>
            </v-text-field>

            <v-text-field name="celular" label="Celular" id="celular" placeholder="Ingrese su celular"
              v-model="user.phone" :rules="rules.celularRules" type="number" append-icon="mdi-cellphone" required
              rounded outlined></v-text-field>

            <v-text-field name="direccion" label="Direccion" id="direccion" placeholder="Ingrese su direccion"
              v-model="user.address" :rules="rules.direccionRules" type="text" append-icon="mdi-map-marker" required
              rounded outlined>
            </v-text-field>
            <v-btn class="white--text rounded-lg font-weight-light" depressed large color="primary" block
              @click="registerAccount()">Continuar
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>


    </v-form>
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
    <span class="mt-5 text-center">
      Al continuar, confirmo que estoy de acuerdo con nuestros Terminos y Condiciones
    </span>
  </v-container>
</template>

<script>
  export default {
    layout: 'withBackButton',
    data() {
      return {
        stepForm: 1,
        user: {},
        valid: false,
        show1: false,
        email: null,
        rules: {
          emailValidator: [
            v => !!v || 'Email es requerido',
          ],
          pass: null,
          passValidator: [
            v => !!v || 'Contraseña es requerida',
          ],
          passConfirmation: null,
          passConfirmationValidator: [
            v => !!v || 'Confirmacion de contraseña es requerida',
            v => v == this.user.password || 'Las contraseñas no coinciden'
          ],
        }

      }
    },
    created() {
      this.$store.dispatch('general/setTitlePage', 'Registro')
      this.$store.dispatch('general/setShowBottomBar', false)
    },
    methods: {
      backButtonRegister() {
        if (this.stepForm == 2) {
          return this.stepForm = 1
        }
        return this.$router.push('/pc/account/login')
      },
      async registerAccount() {
        this.$refs.form.validate()
        if (!this.valid) return
        this.user.username = this.user.email
        this.$axios.post('/auth/local/register', this.user)
          .then(async () => {
            try {
              await this.$auth.loginWith("local", {
                data: {
                  identifier: this.user.email,
                  password: this.user.password
                }
              })
              return this.$router.push('/pc/account/registro/bienvenida')
            } catch (e) {
              console.log(e)
            }
          })
      }
    }
  }
</script>