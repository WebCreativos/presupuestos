<template>
    <v-container class="d-flex flex-column justify-space-between align-center full-height ">
        <div>
            <h1 class="mb-3 text-center">Se te olvido la contraseña</h1>
            <p class="text-center mb-5">Ingrese su correo electronico y le enviaremos un enlace para volver a restaurar su contraseña</p>
        </div>
        <v-form
        class="full-width pl-3 pr-3"
        ref="form"
        v-model="valid"
        >
            <v-text-field
                name="email"
                label="Email"
                placeholder="Ingrese su email"
                id="email"
                :rules="emailValidator"
                type="email"
                v-model="email"
                append-icon="mdi-email-outline"
                required
                outlined
                rounded
            ></v-text-field>
        </v-form>

        <div class="full-width pl-3 pr-3">
            <v-btn class="white--text elevation-0 pa-5" color="primary" block rounded @click="next" >Continuar</v-btn>
        </div>

        <p class="mt-3">
            ¿No tienes una cuenta? <span class="orange--text" @click="$router.push('registro')">Registrate</span>
        </p>
    </v-container>
</template>

<script>
    export default {
        layout: 'olvide-contrasena',
        data() {
            return {
                valid: false,
                email: null,
                emailValidator: [
                    v => !!v || 'Email es requerido',
                ]
            }
        },
        methods: {
            next() {
                this.$refs.form.validate()
                if (!this.valid) return;

                this.$router.push('/olvide-contrasena/confirm')
            }
        }
    }
</script>