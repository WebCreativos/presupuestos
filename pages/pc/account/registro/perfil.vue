<template>
    <v-container class="d-flex flex-column justify-space-between align-center full-height ">
        <div>
            <h1 class="mb-3 text-center">Completar Perfil</h1>
            <p class="text-center mb-5">Complete sus datos</p>
        </div>
        <v-form
        class="full-width mt-5 pl-5 pr-5"
        ref="form"
        v-model="valid"
        >

        <v-text-field
            name="nombre"
            label="Nombre"
            id="nombre"
            placeholder="Ingrese su nombre"
            v-model="nombre"
            :rules="nombreRules"
            type="text"
            append-icon="mdi-account"
            required
            rounded
            outlined
        ></v-text-field>

        <v-text-field
            name="apellido"
            label="Apellido"
            id="apellido"
            placeholder="Ingrese su apellido"
            v-model="apellido"
            :rules="apellidoRules"
            type="text"
            append-icon="mdi-account"
            required
            rounded
            outlined
        ></v-text-field>

        <v-text-field
            name="celular"
            label="Celular"
            id="celular"
            placeholder="Ingrese su celular"
            v-model="celular"
            :rules="celularRules"
            type="number"
            append-icon="mdi-cellphone"
            required
            rounded
            outlined
        ></v-text-field>

        <v-text-field
            name="direccion"
            label="Direccion"
            id="direccion"
            placeholder="Ingrese su direccion"
            v-model="direccion"
            :rules="direccionRules"
            type="text"
            append-icon="mdi-map-marker"
            required
            rounded
            outlined
        ></v-text-field>
            
        </v-form>
        <div class=" full-width white--text mb-auto pa-5" >
            <v-btn class="white--text elevation-0 pa-5" color="primary" block rounded @click="next" >Continuar</v-btn>
        </div>
        
        <span class="mt-5 mb-5 text-center">
            Al continuar, confirmo que estoy de acuerdo con nuestros Terminos y Condiciones.
        </span>
    </v-container>
</template>

<script>
    export default {
        layout: 'registro',
        data() {
            return {
                valid: false,
                nombre: null,
                nombreRules: [
                    v => !!v || 'Nombre es requerido'
                ],
                apellido: null,
                apellidoRules: [
                    v => !!v || 'Apellido es requerido'
                ],
                celular: null,
                celularRules: [
                    v => !!v || 'Celular es requerido'
                ],
                direccion: null,
                direccionRules: [
                    v => !!v || 'Direccion es requerido'
                ]

            }
        },
        methods: {
            next() {
                this.$refs.form.validate()
                if (!this.valid) return

                this.$router.push('/login/success')
            }
        }
    }
</script>