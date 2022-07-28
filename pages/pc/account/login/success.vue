<template>
    <v-container class="d-flex flex-column justify-space-between align-center full-height ">
        <v-img
          src="https://picsum.photos/510/300?random"
          aspect-ratio="1.7"
        ></v-img>

        <div>
            <h1 class="mb-3 text-center">Inicio de sesion exitoso</h1>
            <p class="text-center mb-5">Ahora estas listo para ir de compras</p>
        </div>

        <div class="full-width pl-3 pr-3">
            <v-btn 
            block 
            rounded 
            height="50"
            class="white--text elevation-0 pa-5" 
            color="primary" 
            @click="$router.push('/')" >Empezar</v-btn>
        </div>
    </v-container>
</template>

<script>
    export default {
        layout: 'login-success'
    }
</script>