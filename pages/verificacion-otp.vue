<template>
    <v-container class="d-flex flex-column justify-space-between align-center full-height ">
        <div>
            <h1 class="mb-3 text-center">Verificacion OTP</h1>
            <p class="text-center mb-5">Enviamos su codigo al +123123*** <br> Este codigo caducará a las 00:30 </p>
        </div>

        <div>
            <otp-input
            ref="otpInput"
            input-classes="otp-input"
            separator=" "
            :num-inputs="4"
            :should-auto-focus="true"
            :is-input-num="true"
            input-type="password"
            @on-change="handleOnChange"
            @on-complete="handleOnComplete"
            ></otp-input>
        </div>
        <div class="full-width pl-3 pr-3">
            <v-btn class="white--text elevation-0 pa-5" color="primary" block rounded @click="next" >Continuar</v-btn>
        </div>

        <div class="text-center">
            <p v-show="error" class="red--text">!Contraseña incorrecta. Por favor, pruebe de nuevo!</p>
            <p class="mt-3">
                Reenviar codigo OTP
            </p>
        </div>
    </v-container>
</template>

<script>
    import OtpInput from "@bachdgvn/vue-otp-input";

    export default {
        layout: 'verificacion-otp',
        data() {
            return {
                error: false
            }
        },
        methods: {
            next() {

                this.error = !this.error
                if (!this.error)
                    this.$router.push('/')

            },
            handleOnComplete(value) {
                console.log('OTP completed: ', value);
            },
            handleOnChange(value) {
                console.log('OTP changed: ', value);
            }
        },
        components: {
            OtpInput
        }
    }
</script>

<style>
    .otp-input {
        width: 50px;
        height: 50px;
        padding: 5px;
        margin: 0 10px;
        font-size: 50px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        text-align: center;
    }
    
    .error {
        border: 1px solid red !important;
    }
</style>