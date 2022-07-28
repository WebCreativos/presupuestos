<template>
    <v-container class="">
        <div>
            <template
            v-for="i in 3"
            >
                <div
                class="d-flex justify-space-between align-center pa-1 mt-4 mb-4"
                >
                        
                <v-avatar
                size="60"
                >
                    <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                    >
                </v-avatar>

                <div class="text-left">
                    <h3>Nombre</h3>
                    <span class="blue-grey--text text--lighten-1">Si lo tengo, si te interesa</span>
                </div>

                <div class="d-flex flex-column -justify-space-between align-center">
                    <span class="blue-grey--text text--lighten-1">8:10 am</span>
                    <v-avatar
                        size="20"
                        color="red"
                    >
                    <span class="white--text">2</span>
                    </v-avatar>
                </div>
                </div>
            </template>
</div>
</v-container>
</template>

<script>
    export default {

    }
</script>