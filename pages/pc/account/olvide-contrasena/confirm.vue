<template>
    <v-container class="d-flex flex-column justify-space-between align-center full-height ">
        <div>
            <h1 class="mb-3 text-center">Cofirmar contraseña</h1>
            <p class="text-center mb-5">Ingrese su nueva contraseña</p>
        </div>
        <v-form
        class="full-width pl-3 pr-3"
        ref="form"
        v-model="valid"
        >
            <v-text-field
            name="pass"
            label="Contraseña"
            placeholder="Ingrese su password"
            v-model="pass"
            id="pass"
            :rules="passValidator"
            type="password"
            :append-icon="show1 ? 'mdi-lock-open-outline' : 'mdi-lock-outline'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
            rounded
            outlined
            ></v-text-field>
        </v-form>

        <div class="full-width pl-3 pr-3">
            <v-btn class="white--text elevation-0 pa-5" color="primary" block rounded @click="next" >Continuar</v-btn>
        </div>

        <p class="mt-3">
            ¿No tienes una cuenta? <span class="orange--text">Registrate</span>
        </p>
    </v-container>
</template>

<script>
    export default {
        layout: 'olvide-contrasena',
        data() {
            return {
                show1: false,
                valid: false,
                pass: null,
                passValidator: [
                    v => !!v || 'Nueva contraseña es requerida',
                ]
            }
        },
        methods: {
            next() {
                this.$refs.form.validate()
                if (!this.valid) return;

                this.$router.push('/inicio-sesion');
            }
        }
    }
</script>